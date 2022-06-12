import { z } from 'zod';

interface Passwords {
  password: string;
  confirmPassword: string;
}

const areEqualPassword = ({ password, confirmPassword }: Passwords) => password === confirmPassword;

const errorMessage = {
  message: "Passwords don't match",
  path: ['confirmPassword'],
}

export const createUserValidation = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine(areEqualPassword, errorMessage);


export const updateUserValidation = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine(areEqualPassword, errorMessage);
