const imoveis = []
let opcao = ""

do {
  opcao = parseInt(prompt("Bem-vindo(a) ao cadastro de imóveis" + 
  "\nTotal de imóveis: " + imoveis.length +
  "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  ))

  switch (opcao) {
    case 1:
      const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ")
      imovel.quartos = prompt("Informe a quantidade de quartos que possuem no imovel: ")
      imovel.banheiros = prompt("Informe a quantidade de banheiros que possuem no imóvel: ")
      imovel.garagem = prompt("O imóvel possui garagem ? (Sim/Nao)")

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
        "\n Proprietário: " + imovel.proprietario +
        "\n Quartos: " + imovel.quartos +
        "\n Banheiros: " + imovel.banheiros +
        "\n Possui garagem?: " + imovel.garagem
      )

      if (confirmacao) {
        imoveis.push(imovel)
        alert("Imóvel salvo com sucesso")
      } else {
        alert("Voltando ao menu!")
      }
      break
    case 2:
      for(let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " + (i + 1) + 
          "\nProprietário: " + imoveis[i].proprietario +
          "\nQuartos: " + imoveis[i].quartos +
          "\nBanheiros: " + imoveis[i].banheiros +
          "\nPossui garagem?: " + imoveis[i].garagem
        )
      }
      break
    case 3:
      alert("Encerrando...")
      break
    default:
      alert("Opção Inválida!")
  }
} while (opcao !== 3)