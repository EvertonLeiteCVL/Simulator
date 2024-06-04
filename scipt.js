var item1 = {
  codigoItem: "001",
  descricao: 'Computador Desktop Intel Core i5',
  valor: 2399.00,
  tipo: 'computador',
  nome: 'Computador intel Core i5',
  disponivel: false,
  quantidade: 0
};

var item2 = {
  codigoItem: "002",
  descricao: 'Laptop Ultrabook Intel Core i7',
  valor: 4799.00,
  tipo: 'laptop',
  nome: 'Laptop ultrabook intel core i7',
  disponivel: true,
  quantidade: 2
};

var item3 = {
  codigoItem: "003",
  descricao: 'Monitor LED 24 polegadas Full HD',
  valor: 799.90,
  tipo: 'monitor',
  nome: 'Monitor LED 24 polegadas Full HD',
  disponivel: true,
  quantidade: 7
};

var item4 = {
  codigoItem: "004",
  descricao: 'Teclado Mecânico Gamer RGB',
  valor: 299.00,
  tipo: 'teclado',
  nome: 'Teclado Mecânico Gamer RGB',
  disponivel: true,
  quantidade: 3
};

var item5 = {
  codigoItem: "005",
  descricao: 'Mouse Óptico Sem Fio',
  valor: 79.90,
  tipo: 'mouse',
  nome: 'Mouse Óptico Sem Fio',
  disponivel: true,
  quantidade: 8
};

// Define a lista dos itens no sistema
var itens = [item1, item2, item3, item4, item5];

// Funcção lista de itens disponiveis 
function itensDisponiveis(itens) {
  var mensagem = "Itens Disponíveis:\n";
  for (var i = 0; i < itens.length; i++) {
    if (itens[i].disponivel) {
      mensagem += itens[i].codigoItem + "  "  
               + itens[i].descricao + " - R$ " 
               + itens[i].valor.toFixed(2).replace('.', ',')+ " - " 
               + itens[i].quantidade + "\n";
    }
  }
  alert(mensagem); 
}
var listaDeLancamentos = [];

   // Registrar item de venda 
function registrarItemVenda() {
  itensDisponiveis(itens); 
  var itemAdicionado = prompt("Digite o código do produto:");

  for (var i = 0; i < itens.length; i++) {
    if (itemAdicionado == itens[i].codigoItem) {
      var quantidadeItem = parseInt(prompt("Digite a quantidade vendida do item:"));
      if (quantidadeItem > itens[i].quantidade) {
        alert("Quantidade insuficiente do item em estoque.");
      } else {
        itens[i].quantidade -= quantidadeItem; 
  // Atualiza a quantidade de intem em estoque
        listaDeLancamentos.push({
          codigo: itens[i].codigoItem,
          nome: itens[i].descricao,
          preco: itens[i].valor,
          quantidade: quantidadeItem
        });
        alert("Item adicionado com sucesso!");
        return; // sair da funçao
      }
    }
  }
  
  // Caso o codigo do item for invalido mostrar alerta de erro.
  alert("Atenção! Código do Item inválido. Por favor tente novamente!!");
}

// Função para imprimir nota fcsal

function imprimeNotaFiscal() {
  var empresa = "Télos NF";
  var cnpj = "12.345.678/0001-90";
  var endereco = "Rua das Flores, 123";
  var cidade = "Rio de Janeiro";
  var data = new Date().toLocaleDateString(); // Current date
  var numero = parseInt(Math.random() * (50 - 1) + 1); // Random invoice number

  var mensagem = `
               NOTA FISCAL                
  Empresa: ${empresa}
  CNPJ: ${cnpj}
  Endereço: ${endereco}
  Cidade: ${cidade}
  Data: ${data}
  Número: ${numero}

  ---------------------------------------------

  Qtd | Item | Valor (R$)`;

  var total = 0;
  for(var i = 0; i < listaDeLancamentos.length; i++) {
    var item = listaDeLancamentos[i];
    mensagem += `\n  ${item.quantidade} | ${item.nome} | ${item.preco.toFixed(2).replace('.', ',')}`;
    total += item.preco * item.quantidade;
  }

  mensagem += `
  
  ---------------------------------------------

  TOTAL: R$ ${total.toFixed(2).replace('.',',')}`;

  alert(mensagem);         
};

// Função iniciar uma nova venda
function iniciarNovaVenda() {
  // Limpar a list devenda para nova venda.
  listaDeLancamentos = [];
  alert("Iniciar uma nova venda");
  registrarItemVenda();
}

// Loop do menu
while (true) {
  var opcao = prompt("Selecione a opção desejada no menu correspondente ao número:\n 1 - Visualizar Itens cadastrados;\n 2 - Lançar venda do Item;\n 3 - Imprimir nota fiscal;\n 4 - Iniciar uma nova venda;\n 5 - Sair");

  switch (opcao) {
    case "1":
      itensDisponiveis(itens);
      break;
    case "2":
      registrarItemVenda();
      break;
    case "3":
      imprimeNotaFiscal();
      break;
    case "4":
      iniciarNovaVenda();
      break;
    case "5":
      alert("finalizando Sistema...");
      break;
    default:
      alert("Atenção! Opção Inexistente, Por favor tente novamente");
  }

  if (opcao === "5") {
    break;
  }
}
