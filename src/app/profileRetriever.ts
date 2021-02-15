//import * as sftypes from '@salesforce/ts-types/lib/index';
import * as sfcore from '@salesforce/core/lib/connection';
import * as sfmeta from '@Types/jsforce/api/metadata';

export default class profileRetriever{ 
    public static async retrieveProfile(conn : sfcore.Connection, profileNames : string[], profileMap){

        //const profileMap = new Map();
    
        console.log('Retrieve profiles in retriever: ' + profileNames);
    
        await conn.metadata.readSync('Profile', profileNames, function(err, retrievedMetadata : sfmeta.MetadataInfo | sfmeta.MetadataInfo[]) {
            if (err) { console.error("Error has occured: " + err); }
            if(Array.isArray(retrievedMetadata)){ //if the Read function returns an array of profile
                retrievedMetadata.forEach(element => {
                    //console.log("Retrieved: " + element.fullName);
                    profileMap.set(element.fullName, element);
                });
            }
            else{ //if the Read function returns only one profile
                profileMap.set(retrievedMetadata.fullName, retrievedMetadata);
            }
        });
        
        //console.log(profileMap);
    
        return profileMap;
    }
    
    public static async retrieveProfileNames(conn :sfcore. Connection){
        console.log('Retrieve profile names');
        let profileNames: string[] = new Array<string>();
        var types = [{type: 'Profile', folder: null}];
        const profileList = await conn.metadata.list(types, conn.version);
    
        await profileList.forEach(element => {
            //console.log("Found: " + element.fullName);
            profileNames.push(element.fullName);
        });
    
        return profileNames;
    }
}