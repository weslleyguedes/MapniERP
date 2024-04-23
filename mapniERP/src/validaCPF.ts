const validaCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]/g, ''); // Remove todos os caracteres não numéricos

  if (cpf.length !== 11) {
      return false; // CPF deve ter exatamente 11 dígitos
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = soma % 11;
  const digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;

  // Verifica se o primeiro dígito verificador está correto
  if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
      return false;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  const digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;

  // Verifica se o segundo dígito verificador está correto
  if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
  }

  // CPF válido se passou por todas as verificações
  return true;
}

export default validaCPF
