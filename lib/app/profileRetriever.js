"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class profileRetriever {
    static async retrieveProfile(conn, profileNames, profileMap) {
        //const profileMap = new Map();
        console.log('Retrieve profiles in retriever: ' + profileNames);
        await conn.metadata.readSync('Profile', profileNames, function (err, retrievedMetadata) {
            if (err) {
                console.error("Error has occured: " + err);
            }
            if (Array.isArray(retrievedMetadata)) { //if the Read function returns an array of profile
                retrievedMetadata.forEach(element => {
                    //console.log("Retrieved: " + element.fullName);
                    profileMap.set(element.fullName, element);
                });
            }
            else { //if the Read function returns only one profile
                profileMap.set(retrievedMetadata.fullName, retrievedMetadata);
            }
        });
        //console.log(profileMap);
        return profileMap;
    }
    static async retrieveProfileNames(conn) {
        console.log('Retrieve profile names');
        let profileNames = new Array();
        var types = [{ type: 'Profile', folder: null }];
        const profileList = await conn.metadata.list(types, conn.version);
        await profileList.forEach(element => {
            //console.log("Found: " + element.fullName);
            profileNames.push(element.fullName);
        });
        return profileNames;
    }
}
exports.default = profileRetriever;
//# sourceMappingURL=profileRetriever.js.map