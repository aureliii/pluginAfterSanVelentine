"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retriveObjName_1 = require("./retriveObjName");
const retriveUserPermissionName_1 = require("./retriveUserPermissionName");
const profileRetriever_1 = require("./profileRetriever");
class main {
    static async start(conn) {
        console.log('sono nel main');
        var objectsName = await retriveObjName_1.default.getObjsName(conn);
        let userPermissionName = await retriveUserPermissionName_1.default.retrieveUserPermissions(conn);
        console.log('objectsName', objectsName);
        console.log('userPermissionName', userPermissionName);
        let profileNames = await profileRetriever_1.default.retrieveProfileNames(conn);
        var profileList = new Map();
        var i, j, tempArray, chunk = 10;
        for (i = 0, j = profileNames.length; i < j; i += chunk) {
            tempArray = profileNames.slice(i, i + chunk);
            console.log("temArray len: " + tempArray.length);
            await profileRetriever_1.default.retrieveProfile(conn, tempArray, profileList);
            console.log("profileList len: " + profileList.size);
        }
        console.log('Profiles: ', profileList);
    }
    ;
}
exports.default = main;
//# sourceMappingURL=main.js.map