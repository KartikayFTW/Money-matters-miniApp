const { verifyToken } = require("../utils/helpers/jwt");
const JWT_SECRET = process.env.JWT_SECRET
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "AUTHORIZATION_REQUIRED", msg: "Authorization token missing or invalid." });
    }

    const token = authHeader.split(' ')[1];

    try {
        // Await the asynchronous verifyToken function
        const decoded = await verifyToken(token,JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        const statusCode = err.name === 'JsonWebTokenError' ? 400 : 500;
        const errorMsg = err.name === 'JsonWebTokenError' ? "INVALID_TOKEN" : "INTERNAL_ERROR";
        return res.status(statusCode).json({ error: errorMsg, msg: "Token verification failed." });
    }
};

module.exports = {
    authMiddleware
};
