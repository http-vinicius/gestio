import { z } from 'zod';

export const validationSchema = z
  .object({
    email: z.string().email({ message: 'Insira um email válido ' }),
    senha: z.string().min(6, { message: 'Senha Obrigatória' }).max(20),
  })
  .required();

export type LoginFormValues = z.infer<typeof validationSchema>;
