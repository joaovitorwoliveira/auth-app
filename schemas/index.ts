import * as z from "zod";

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
