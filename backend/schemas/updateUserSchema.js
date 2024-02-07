const z= require("zod");
const updateUserSchema = z.object({

    firstName:z.string().min(1).trim().optional(),
    lastName:z.string().min(1).trim().optional(),
    password:z.string().min(6).optional()
})
module.exports = updateUserSchema;