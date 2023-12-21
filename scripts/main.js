let opcao = '';
do {
  opcao = parseInt(
    prompt(
      'Escolha uma das opções abaixo:\n1 - Tabuada de um número qualquer\n2 - Sair',
    ),
  );

  switch (opcao) {
    case 1:
      let num = parseFloat(
        prompt('Digite um número para ter sua tabuada até x10: '),
      );
      if (num === 0) {
        alert('A tabuada do 0 todos os valores são iguais a 0');
        continue;
      }
      for (let i = 0; i <= 10; i++) {
        alert(`${num} x ${i} = ${num * i}`);
      }
      break;
    case 2:
      alert('Encerrando o programa...');
      break;
    default:
      alert('Opção inválida. Escolha novamente.');
      break;
  }
} while (opcao !== 2);
