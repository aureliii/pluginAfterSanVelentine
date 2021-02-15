import  retriveObjName  from "./retriveObjName";
import  retriveUserPermissionName  from "./retriveUserPermissionName";


export default class main {
    public static async  start(conn){
    
     console.log('sono nel main');
     var objectsName = await retriveObjName.getObjsName(conn);
     var userPermissionName = await retriveUserPermissionName.getNames(conn);
     console.log('objectsName',objectsName);
     console.log('userPermissionName',userPermissionName);
       
   };
   
 }
 