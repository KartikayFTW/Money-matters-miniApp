// schemas/signUpSchema.js
const z = require('zod');

const signUpSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string().min(6),
});

module.exports = signUpSchema;
