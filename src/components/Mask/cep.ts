export const zipCodeMask = (cep: string) => {
  return cep.replace(/(\d{5})(\d{2})/, "$1-$2");
};
