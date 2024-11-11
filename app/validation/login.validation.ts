import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(5, "username must contain at least 5 characters")
    .refine((value) => !/\d+/g.test(value), "Invalid Username"),
  password: z
    .string()
    .min(8, "password must contain at least 8 characters")
    .refine(
      (value) =>
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(value),
      "Invalid Password"
    ),
});
