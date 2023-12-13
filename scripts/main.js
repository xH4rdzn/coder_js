function entradaPeso() {
  const peso = Number(prompt('Digite seu peso em KG(75): '));
  return peso;
}

function entradaAltura() {
  const altura = Number(prompt('Digite sua altura em metros(1.83):'));
  return altura;
}

const calculaIMC = (peso, altura) => {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
};

const exibeResultado = (imc) => console.log(`Seu imc é de: ${imc}`);

exibeResultado(calculaIMC(entradaPeso(), entradaAltura()));
