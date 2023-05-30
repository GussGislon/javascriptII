/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

const listaMensagens = []

function adicionarMensagem(apelido, mensagem) {
  listaMensagens.push({
    "apelido": apelido,
    "mensagem": mensagem,
  }
  )
}

function formatarMensagens() {
  let htmlData = ""
  for (let i = 0; i < listaMensagens.length; i++) {
    let item = listaMensagens[i]
    htmlData += `
    <div class="chat-message">
      <span class="chat-message-apelido">
        ${item.apelido}
      </span>
      <span class="chat-message-item">
        ${item.mensagem}
      </span>
    </div>
    `
  }
  return htmlData
}

function atualizarHTML() {
  const novaMensagem = document.getElementById("chat-messages")
  novaMensagem.innerHTML = formatarMensagens()
}

function commitMessageClickHandler() {
  const inputMensage = document.getElementById("message-input")
  if(inputMensage.value.trim().length==0){
    inputMensage.focus()
    return 
  }
  adicionarMensagem("GussGislon :", inputMensage.value)
  atualizarHTML()
  inputMensage.value = ""
}

// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------