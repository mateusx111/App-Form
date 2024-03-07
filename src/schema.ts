import { z } from "zod";
import { subYears, parseISO, isBefore } from "date-fns";

export const formSchema = z
  .object({
    fullname: z
      .string()
      .min(1, "Nome obrigatório")
      .max(100, "Nome muito longo"),
    documentNumber: z
      .string()
      .min(1, "O CPF é obrigatório")
      .transform((value) => value.replace(/\D/g, "")),

    birthdate: z.string().refine(
      (value) => {
        const birthdayDate = parseISO(value);
        const today = new Date();
        const legalAgeDate = subYears(today, 18);
        return isBefore(birthdayDate, legalAgeDate);
      },
      {
        message: "Você deve ser maior de idade para continuar.",
      },
    ),
    phoneNumber: z
      .string()
      .min(11, "Contato obrigatório")
      .transform((value) => value.replace(/\D/g, "")),
    motherName: z.string().min(1, "O nome da Mãe é obrigatório"),
    address: z.object({
      zipCode: z
        .string()
        .min(9, "CEP obrigatório")
        .transform((value) => value.replace(/[^0-9]/g, "")),
      state: z.string().min(1, "Selecione o Estado").max(2),
      city: z.string().min(1, "Selecione a Cidade"),
      street: z.string().min(1, "Informe a Rua"),
      district: z.string().min(1, "Informe o Bairro"),
      number: z.string().min(1, "Informe o Número da Casa"),
      complement: z.string().optional(),
    }),
    minimumWage: z.string().transform((value) => {
      return parseFloat(value);
    }),
    educationLevel: z.enum(
      [
        "Ensino_Fundamental_Completo",
        "Ensino_Médio_Completo",
        "Ensino_Superior_Completo",
      ],
      {
        required_error: "Voce precisa informar o seu nível de escolaridade.",
      },
    ),
    email: z.string().min(1, "Email obrigatório").email("Email inválido"),
    password: z
      .object({
        mainPassword: z
          .string()
          .min(10, "A senha precisa ter no mínimo 10 caracteres"),
        confirmPassword: z.string(),
      })
      .refine((data) => data.mainPassword === data.confirmPassword, {
        message: "As senhas precisam ser iguais",
        path: ["confirmPassword"],
      }),
  })
  .transform((field) => ({
    ...field,
  }));
