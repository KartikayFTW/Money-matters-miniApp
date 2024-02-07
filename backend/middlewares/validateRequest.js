// middlewares/validateRequest.js
const validateRequest = (schema) => (req, res, next) => {
    try {
      schema.safeParse(req.body);
      next();
    } catch (err) {
        return res.status(400).json({
            error: "VALIDATION_ERROR",
            msg: "Validation error",
            errors: result.error.issues, 
          });
    }
  };

module.exports = validateRequest
  