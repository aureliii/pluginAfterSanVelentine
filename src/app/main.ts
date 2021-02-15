import  retriveObjName  from "./retriveObjName";

export default class main {
    public static async  start(conn){
    
     console.log('sono nel main');
     var objects = await retriveObjName.getObjsName(conn);
     console.log('sono nel main',objects);
       
   };
   
 }
 