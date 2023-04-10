function gerarCpf() {
  const cpfNumbers = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

  const firstDigit = calcularDigitoVerificador(cpfNumbers);
  cpfNumbers.push(firstDigit);

  const secondDigit = calcularDigitoVerificador(cpfNumbers);
  cpfNumbers.push(secondDigit);

  return cpfNumbers.join('');
}

function calcularDigitoVerificador(cpfNumbers) {
  let soma = cpfNumbers.reduce((acc, value, index) => {
    const peso = cpfNumbers.length + 1 - index;
    return acc + (value * peso);
  }, 0);

  const resto = soma % 11;

  return (resto < 2) ? 0 : (11 - resto);
}

export default gerarCpf;
