
const { User } = require("../models/user");

const checkUserExists = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ 
        error: "EMAIL_ALREADY_EXISTS",
        msg: "Email in use. Try another.",
      });
    }
    next();
  } catch (error) {
    console.error("Error checking user existence:", error);
    return res.status(500).json({
      error: "INTERNAL_ERROR",
      msg: "An error occurred while checking user existence.",
    });
  }
};

module.exports = checkUserExists;
