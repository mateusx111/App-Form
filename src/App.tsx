import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { InputMasked } from "./components/Mask/inputMask";
import { useCep } from "./hooks/useCep";

export default function ProfileForm() {
  const { form, onSubmit } = useCep();

  return (
    <div className="flex min-h-screen flex-col items-center bg-custom-bg-100 font-noto text-custom-white-100">
      <div className="mt-[52px] flex w-[760px] items-center justify-items-center bg-white">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mb-[57px] mt-[44px] flex w-full flex-col items-center "
          >
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Nome Completo
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="Cauê Ian Benedito Araújo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className=" text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documentNumber"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    CPF
                  </FormLabel>
                  <FormControl>
                    <InputMasked
                      mask="999.999.999-99"
                      placeholder="000.000.000-00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthdate"
              render={({ field }) => (
                <FormItem className=" mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Data de Nascimento
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[17px]"
                      placeholder="00/00/0000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Contato
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="(67) 98951-81186"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Nome da Mãe
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="Josefa Isabela"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.zipCode"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    CEP
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="79105-568"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.state"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Estado
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="rounded">
                      <SelectTrigger className="h-[56px] rounded-[8px] p-[16px] text-[16px]">
                        <SelectValue placeholder="Selecione o seu Estado" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AP">AP</SelectItem>
                      <SelectItem value="PA">PA</SelectItem>
                      <SelectItem value="MT">MT</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Cidade
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="rounded">
                      <SelectTrigger className="h-[56px] rounded-[8px] p-[16px] text-[16px]">
                        <SelectValue placeholder="Selecione a sua cidade" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Santana">Santana</SelectItem>
                      <SelectItem value="Macapá">Macapá</SelectItem>
                      <SelectItem value="Oiapoque">Oiapoque</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.street"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Endereço
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="Rua Amarilis"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.district"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Bairro
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="Residencial nelson Trad"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.number"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Número
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="314"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.complement"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Complemento
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[17px]"
                      placeholder="Opcional"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="caue_ian_araujo@sobraer.com.br"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minimumWage"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Renda Mensal
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      placeholder="R$ 800,00"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="educationLevel"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <div className="text-[12px] font-semibold">Escolaridade</div>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="my-4 space-y-5 pl-4"
                    >
                      <FormItem className=" flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Ensino_Fundamental_Completo" />
                        </FormControl>
                        <FormLabel className="input-radio">
                          Ensino Fundamental Completo
                        </FormLabel>
                      </FormItem>
                      <FormItem className=" flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Ensino_Médio_Completo" />
                        </FormControl>
                        <FormLabel className="input-radio">
                          Ensino Médio Completo
                        </FormLabel>
                      </FormItem>
                      <FormItem className=" flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Ensino_Superior_Completo" />
                        </FormControl>
                        <FormLabel className="input-radio">
                          Ensino Superior Completo
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password.mainPassword"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password.confirmPassword"
              render={({ field }) => (
                <FormItem className="mt-[32px] flex w-[564px] flex-col gap-[8px]">
                  <FormLabel className="text-[12px] font-semibold">
                    Confirmar senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-[56px] rounded-[8px] border border-custom-white-200 p-[16px] text-[16px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-normal" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className=" mt-8 flex  w-[564px] gap-[16px]">
                  <Switch aria-readonly />
                  <div className="space-y-0.5 text-[16px]">
                    <FormDescription>Ver Senha</FormDescription>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-8 h-[56px] w-[564px] gap-[10px] rounded-[8px] bg-custom-purple-200 p-4 text-[16px] font-light hover:bg-custom-purple-100"
            >
              Cadastrar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
