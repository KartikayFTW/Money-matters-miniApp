// schemas/signUpSchema.js
const z = require('zod');

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports = signInSchema;
