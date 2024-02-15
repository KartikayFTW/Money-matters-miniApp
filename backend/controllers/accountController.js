const mongoose = require("mongoose");
const { Account } = require("../models/account");
const { User } = require("../models/user");

const getBalance = async (req, res) => {
  try {
    const userId = req.userId;
    const balance = await Account.find({ userId: userId }, { balance: true });
    console.log("balance", balance);
    return res
      .status(200)
      .json({ msg: "Balance fetched successfully", balance });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      msg: "An error occurred while fetching the balance.",
    });
  }
};

const transferBalance = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const { to, amount } = req.body;
    const account = await Account.findOne({ userId: req.userId }).session(
      session
    );

    if (!account || account.balance < amount) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ msg: "Insufficient funds." });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ msg: "Recipient not found." });
    }

    const receiveUser = await User.findOne({ _id: to });

    // Deduct from sender
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);
    // Add to recipient
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // Commit transaction
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      msg:
        `Transfer successful to ${receiveUser?.firstName || "the recipient"} ${
          receiveUser?.lastName || ""
        }`.trim() + `!`,
    });
  } catch (error) {
    console.log(error);
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({
      msg: "Transfer failed. Try again.",
    });
  }
};

module.exports = {
  getBalance,
  transferBalance,
};
