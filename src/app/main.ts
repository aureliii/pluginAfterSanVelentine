import  retriveObjName  from "./retriveObjName";
import  retriveUserPermissionName  from "./retriveUserPermissionName";
import profileRetriever from "./profileRetriever";
import * as sfcore from '@salesforce/core/lib/connection';
import * as sfmeta from '@Types/jsforce/api/metadata';

export default class main {
    public static async  start(conn : sfcore.Connection){
    
    	console.log('sono nel main');
	 	var objectsName = await retriveObjName.getObjsName(conn);
     	let userPermissionName = await retriveUserPermissionName.retrieveUserPermissions(conn);
     	console.log('objectsName',objectsName);
     	console.log('userPermissionName', userPermissionName);

		let profileNames = await profileRetriever.retrieveProfileNames(conn);

		var profileList = new Map<String, sfmeta.MetadataInfo>();
		var i, j, tempArray, chunk = 10;
        for (i=0, j=profileNames.length; i<j; i += chunk) {
			tempArray = profileNames.slice(i,i+chunk);
			console.log("temArray len: " + tempArray.length);
            await profileRetriever.retrieveProfile(conn, tempArray, profileList);
            console.log("profileList len: " + profileList.size);
		}
		console.log('Profiles: ', profileList);
   	};
}