/*Na função cadastrar, o consultor (usuário) insere os dados do cliente manualmente. Esses dados são armazenados
no Local Storage do navegador para serem utilizados depois. Cada cadastro de cliente gera um objeto clienteCadastro. Os objetos
são armazenados dentro de um array  chamado cadastroDePedido.
Novos cadastros são inseridos utilizando push*/


function cadastrar(){
    let cadastroDePedido = JSON.parse(localStorage.getItem('cliente') || '[]');
    let clienteCadastro = {
        nomeDoCliente: document.getElementById('cadastroCliente').value,
        codigoDoCliente: document.getElementById('codigoCliente').value,
        localCliente: document.getElementById('enderecoCliente').value,
        contatoCliente: document.getElementById('emailCliente').value,
        valorPedidoCliente: document.getElementById('valorPedido').value,
    }
    
cadastroDePedido.push(clienteCadastro)
dadosStorage('cliente', cadastroDePedido)

}

/*A função adiciona chave e valor coletado no Local Storage */

function dadosStorage(chave, valor ){
    localStorage.setItem(chave, JSON.stringify(valor))

}

// A função retorna dados coletados no Local Storage

function dadosStorage(chave){
    return JSON.parse(localStorage.getItem(chave))
}

let recebidoClient = document.getElementById('recebidoCliente')

/* A função recebe dados e retorna um array map com
duas chaves e valores respectivos para serem utilizados */

function recebidos(){
    
    let recDados = dadosStorage('cliente')
    let dadosRec = recDados.map(cliente => {
        return {
            nome: cliente.nomeDoCliente,
            valor: cliente.valorPedidoCliente
        }
    })
    return dadosRec
}

/* A função exibe os dados coletados em outra página. Nela são criadas novas variáveis que receberão
dados que foramm recolhidos.
*/


function exibirRecebidos(){
    let receb = recebidos()
    let clienteNome = document.getElementById('clienteNome')
    let valorPedCliente  = document.getElementById('valorPedCliente')

    console.log(receb)

    clienteNome.innerHTML = receb ? receb[3].nome : 'cliente nao encontrado'
    valorPedCliente.innerHTML = receb ? receb[3].valor : 'cliente nao encontrado'

}
// A função é chamada

exibirRecebidos()

//A função aprova() envia os dados para página de cliente e deixa o campo verde.

function aprova(){

}
/*A função reprova envia os dados para a lateral do campo e serão armazenados como listas.
O campo fica vermelho */
function reprova(){

}
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
