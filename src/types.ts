import { z } from "zod";
import { formSchema } from "./schema";

export type FormProps = z.infer<typeof formSchema>;
export type AddressProps = {
  bairro: string;
  uf: string;
  localidade: string;
  logradouro: string;
  complemento: string;
};
