const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10; 

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    }
});

// Pre-save hook to hash the password
userSchema.pre('save', function(next) {
    const user = this;

    if (!user.isModified('password')) return next();


    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);


        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
