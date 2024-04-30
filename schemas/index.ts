import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "Por favor, insira uma nova senha",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Por favor, insira uma nova senha",
      path: ["newPassword"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Mínimo de 6 caracteres requeridos",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
  password: z.string().min(1, {
    message: "Por favor, insira uma senha",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
  password: z.string().min(6, {
    message: "Pelo menos 6 caracteres requeridos",
  }),
  name: z.string().min(1, {
    message: "Por favor, insira um nome",
  }),
});
