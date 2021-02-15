"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retriveObjName_1 = require("./retriveObjName");
const retriveUserPermissionName_1 = require("./retriveUserPermissionName");
const profileRetriever_1 = require("./profileRetriever");
const tabFix_1 = require("./tabFix");
// import * as sfmeta from '@Types/jsforce/api/metadata';
class main {
    static async start(conn) {
        console.log('sono nel main');
        var objectsName = await retriveObjName_1.default.getObjsName(conn);
        let userPermissionName = await retriveUserPermissionName_1.default.retrieveUserPermissions(conn);
        console.log('objectsName', objectsName);
        console.log('userPermissionName', userPermissionName);
        let profileMtd = await profileRetriever_1.default.retriveProfileMTD(conn);
        profileMtd = await tabFix_1.default.fix(profileMtd);
        console.log('Profiles: ', profileMtd);
    }
    ;
}
exports.default = main;
//# sourceMappingURL=main.js.map