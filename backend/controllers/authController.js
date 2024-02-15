const { User } = require("../models/user");
const { Account } = require("../models/account");
const { signToken } = require("../utils/helpers/jwt");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    const money = (Math.random() * 10000 + 1).toFixed(2);
    const amount = new Account({
      userId: savedUser.id,
      balance: money,
    });
    await amount.save();

    const token = signToken({ userId: savedUser._id });

    return res.status(200).json({ msg: "Account created!", token: token });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      msg: "Signup failed. Try again.",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(409).json({
        error: "EMAIL_NOT_FOUND",
        msg: "Email not registered.",
      });
    } else {
      const match = await bcrypt.compare(password, existingUser.password);
      if (match) {
        console.log("exist", existingUser);
        console.log("Authentication successful.");
        const token = signToken({ userId: existingUser._id });
        console.log("token", token);
        return res.status(200).json({ msg: "SUCCESS", token: token });
      } else {
        console.log("Authentication failed. Incorrect password.");
        return res
          .status(401)
          .json({ error: "INCORRECT_PASSWORD", msg: "Wrong password." });
      }
    }
  } catch (err) {
    console.error("SignIn Error:", err);
    return res.status(500).json({ msg: "Login error. Try again later." });
  }
};

const updateUser = async (req, res) => {
  try {
    const { password, firstName, lastName } = req.body;
    console.log("oo", firstName, lastName);
    const userId = req.userId;

    // Find the current user
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    let updateObject = {};
    let changesMade = false;

    // Update firstName and lastName if provided
    if (firstName && firstName !== currentUser.firstName) {
      updateObject.firstName = firstName;
      changesMade = true;
    }
    if (lastName && lastName !== currentUser.lastName) {
      updateObject.lastName = lastName;
      changesMade = true;
    }

    if (password) {
      const isMatch = await bcrypt.compare(password, currentUser.password);
      if (isMatch) {
        return res.status(400).json({
          msg: "New password must be different from the old password",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        updateObject.password = hash;
        changesMade = true;
      }
    }

    // If there are changes, update the user
    if (changesMade) {
      await User.updateOne({ _id: userId }, updateObject);
      return res.status(200).json({ msg: "User updated successfully" });
    } else {
      // No changes made to the user's data
      return res
        .status(400)
        .json({ msg: "No changes detected in the update request" });
    }
  } catch (err) {
    console.error("Update Error:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    const userDetails = await User.find({
      _id: req.userId,
    });

    if (userDetails.length === 0) {
      return res.status(404).json({
        msg: "User details not found.",
        users: [],
      });
    }

    return res
      .status(200)
      .json({ msg: "Users fetched successfully", userDetails });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: "Failed to fetch user details. Please try again.",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const userId = req.userId;
    const filter = req.query.filter || "";
    const filteredUsers = await User.find({
      $and: [
        {
          $or: [
            { firstName: { $regex: filter, $options: "i" } },
            { lastName: { $regex: filter, $options: "i" } },
          ],
        },
        { _id: { $ne: userId } },
      ],
    });

    if (filteredUsers.length === 0) {
      return res.status(200).json({
        msg: "No users found matching the filter criteria",
        users: [],
      });
    }

    const users = filteredUsers.map((user) => ({
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    }));

    return res.status(200).json({ msg: "Users fetched successfully", users });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "INTERNAL_SERVER_ERROR",
      msg: "An error occurred while fetching the users.",
    });
  }
};

module.exports = {
  signUp,
  signIn,
  updateUser,
  getAllUsers,
  getUserDetails,
};
