import { z } from 'zod';

export const validationSchema = z
  .object({
    nome: z.string().min(1, { message: 'Nome é Obrigatório' }).max(50),
    sobrenome: z.string().min(1, { message: 'Nome é Obrigatório' }).max(50),
    email: z.string().email({ message: 'Insira um email válido' }),
    senha: z.string().min(1, { message: 'Senha Obrigatória' }).max(20),
  })
  .required();

export type LoginFormValues = z.infer<typeof validationSchema>;
