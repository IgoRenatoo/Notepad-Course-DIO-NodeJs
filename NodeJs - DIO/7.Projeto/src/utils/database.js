// Função de conexão do banco de dados!
export async function connectDatabase(dataName){
  let x = {
    1 :`Conectado ao Banco de dados: ${dataName}`
  }
  return x;  
}
export async function disconnectDatabase(){
  console.log('Bando desconectado!')
}