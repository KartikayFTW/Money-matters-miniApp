
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET; 


const signToken = (payload, expiresIn = '24hr') => {
    return jwt.sign(payload, secret, { expiresIn });
};


const verifyToken = async (token, secret) => {
    try {
        return await new Promise((resolve, reject) => {
            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    } catch (error) {
        throw error;
    }
};





const decodeToken = (token) => {
    return jwt.decode(token);
};


module.exports = {
    signToken,
    verifyToken,
    decodeToken
};
