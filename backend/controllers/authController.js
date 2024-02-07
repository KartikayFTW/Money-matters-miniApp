const { User } = require("../models/user");
const { signToken } = require("../utils/helpers/jwt");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    const token = signToken({ userId: savedUser._id });

    return res.status(200).json({ msg: "SUCCESS", token: token });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ error: "INTERNAL_ERROR", msg: "Internal Server Error" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
        return res.status(404).json({ error: "EMAIL_DOES_NOT_EXIST", msg: "This email does not exist." });
    } else {
      const match = await bcrypt.compare(password, existingUser.password);
      if (match) {
        
        console.log("exist",existingUser)
        console.log("Authentication successful.");
        const token = signToken({ userId: existingUser._id});
        console.log("token",token)
        return res.status(200).json({ msg: "SUCCESS", token: token });


      } else {

        console.log("Authentication failed. Incorrect password.");
        return res.status(401).json({ error: "WRONG_PASSWORD", msg: "Incorrect password." });
      }
    }

  } catch (err) {
    console.error("SignIn Error:", err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};



const updateUser = async (req, res) => {
    try {
        const { password, firstName, lastName } = req.body;
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
                return res.status(400).json({ msg: "New password must be different from the old password" });
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
            return res.status(400).json({ msg: "No changes detected in the update request" });
        }
    } catch (err) {
        console.error("Update Error:", err);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};


module.exports = {
  signUp,
  signIn,
  updateUser
};
