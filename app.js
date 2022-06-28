// O array pedidosCadastrados recebe um objeto a cada click cadastrar

//A função cadastrar cria um objeto que recebe o valor de cada input e o atribui a uma propriedade desse objeto. Ao final, adiciona o objeto criado de cadastro ao array de pedidosCadastrados

//Cada elemento adicionado ao array pedidosCadastrados é enviado para o localStorage para ser armazenado

let pedidosCadastrados = []

function buscarCep() {
    let cepCadastro = document.getElementById('cepCliente')
    let cep = cepCadastro.value.replace('-', '')
    console.log(cep)

    let url = `http://viacep.com.br/ws/${cep}/json/`

    fetch(url)
    .then(response => response.json())
    .then(dados => {
        document.querySelector('#ruaCliente').value = dados.logradouro
        document.querySelector('#bairroCliente').value = dados.bairro
        document.querySelector('#cidadeCliente').value = dados.localidade
        document.querySelector('#ufCliente').value = dados.uf
        document.querySelector('#numeroCliente').focus()
    })
}


function cadastrar() {

    
    let cadastroCliente = document.getElementById('cadastroCliente').value
    let codigoCliente = document.getElementById('codigoCliente').value
    let cepCliente = document.getElementById('cepCliente').value
    let ruaCliente = document.getElementById('ruaCliente').value
    let numeroCliente = document.getElementById('numeroCliente').value
    let bairroCliente = document.getElementById('bairroCliente').value
    let cidadeCliente = document.getElementById('cidadeCliente').value
    let ufCliente = document.getElementById('ufCliente').value
    let emailCliente = document.getElementById('emailCliente').value
    let valorPedido = document.getElementById('valorPedido').value


    let cadastroDePedidoECliente = {
        cadastroCliente: cadastroCliente,
        codigoCliente: codigoCliente,
        cepCliente: cepCliente, 
        ruaCliente: ruaCliente,
        numeroCliente: numeroCliente, 
        bairroCliente: bairroCliente, 
        cidadeCliente: cidadeCliente, 
        ufCliente: ufCliente,
        emailCliente: emailCliente, 
        valorPedido: valorPedido
    }

    // Fazer verificação de que todos os campos estão preenchidos antes de adicionar ao array. Se estiverem preenchidos o cadastro é adicionado, se não, uma mensagem de erro aparece para corrigir os dados

    if (cadastroCliente && codigoCliente && cepCliente && ruaCliente && numeroCliente && bairroCliente && cidadeCliente && ufCliente && emailCliente && valorPedido) {
        pedidosCadastrados.push(cadastroDePedidoECliente)
        // Após adicionar o objeto ao array, limpar os inputs
        function limparInput() {
            let input1 = document.getElementById('cadastroCliente').value=''
            let input2 = document.getElementById('codigoCliente').value=''
            let input3 = document.getElementById('cepCliente').value=''
            let input4 = document.getElementById('ruaCliente').value=''
            let input5 = document.getElementById('numeroCliente').value=''
            let input6 = document.getElementById('bairroCliente').value=''
            let input7 = document.getElementById('cidadeCliente').value=''
            let input8 = document.getElementById('ufCliente').value = ''
            let input9 = document.getElementById('emailCliente').value=''
            let input10 = document.getElementById('valorPedido').value=''
            
        }
        limparInput()

    } else {
        alert('[ERRO] Verifique os dados digitados e tente novamente')
    }
}


// Após ser enviado ao localStorage, esses dados serão acessados em outra página, a SOLICITAÇÕES. Na página de solicitações, apenas alguns dados serão exibidos.


function exibirCadastro() {
    let caixaAprovaReprova = cadastroRecebido()

}
exibirCadastro