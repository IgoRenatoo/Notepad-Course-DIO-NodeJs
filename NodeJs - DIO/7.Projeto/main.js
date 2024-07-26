import { connectDatabase , disconnectDatabase } from "./src/utils/database.js";
(async function main(){
  let dataBase = await connectDatabase('SQLite');
  console.log('Status concluído ~>',dataBase[1])   
})()
