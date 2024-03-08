import { zipCodeMask } from "@/components/Mask/cep";
import { formSchema } from "../utils/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import axios from "axios";
import { z } from "zod";

import { FormProps, AddressProps } from "../utils/types";
import { useCallback, useEffect } from "react";

export const useCep = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      fullname: "",
      documentNumber: "",
      birthdate: "",
      phoneNumber: "",
      motherName: "",
      address: {
        zipCode: "",
        state: "",
        city: "",
        street: "",
        district: "",
        number: "",
        complement: "",
      },
      minimumWage: Number(),
      email: "",
      password: {
        mainPassword: "",
        confirmPassword: "",
      },
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    alert(JSON.stringify(data, null, 2));
  }
  const zipCode = form.watch("address.zipCode");

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  const handleSetData = useCallback(
    (data: AddressProps) => {
      form.setValue("address.state", data.uf);
      form.setValue("address.city", data.localidade);
      form.setValue("address.district", data.bairro);
      form.setValue("address.street", data.logradouro);
      form.setValue("address.complement", data.complemento);
    },
    [form],
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`,
      );

      handleSetData(data);
    },
    [handleSetData],
  );

  useEffect(() => {
    form.setValue("address.zipCode", zipCodeMask(zipCode));

    if (zipCode.length !== 9) return;
    handleFetchAddress(zipCode);
  }, [handleFetchAddress, zipCode, form.setValue, form]);

  return {
    form,
    onSubmit,
    handleFormSubmit,
  };
};
