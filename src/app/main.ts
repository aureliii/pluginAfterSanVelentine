import  retriveObjName  from "./retriveObjName";
import  retriveUserPermissionName  from "./retriveUserPermissionName";
import profileRetriever from "./profileRetriever";
import tabFix from "./tabFix";
import userPermissionFix from "./userPermissionFix";
import objectPermissionFix from "./objectPermissionFix";
import * as sfcore from '@salesforce/core/lib/connection';
// import * as sfmeta from '@Types/jsforce/api/metadata';

export default class main {
    public static async  start(conn : sfcore.Connection){
    
    	console.log('sono nel main');
	 	var objectsName = await retriveObjName.getObjsName(conn);
     	let userPermissionName = await retriveUserPermissionName.retrieveUserPermissions(conn);
     	console.log('objectsName',objectsName);
     	console.log('userPermissionName', userPermissionName);

		let profileMtd = await profileRetriever.retriveProfileMTD(conn);
		profileMtd = await tabFix.fix(profileMtd);
		profileMtd = await userPermissionFix.fix(profileMtd,userPermissionName);
		profileMtd = await objectPermissionFix.fix(profileMtd,objectsName);
		

		console.log('Profiles: ', profileMtd);
   	};
}