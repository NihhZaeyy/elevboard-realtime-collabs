import { z } from "zod";

export const credentialRegisterSchema = z
  .object({
    email: z.email(),
    username: z.string(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
        "Password must include uppercase, lowercase, number, and symbol"
      ),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Password dont't match",
    path: ["confirm"],
  });
