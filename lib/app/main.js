"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retriveObjName_1 = require("./retriveObjName");
const retriveUserPermissionName_1 = require("./retriveUserPermissionName");
class main {
    static async start(conn) {
        console.log('sono nel main');
        var objectsName = await retriveObjName_1.default.getObjsName(conn);
        var userPermissionName = await retriveUserPermissionName_1.default.getNames(conn);
        console.log('objectsName', objectsName);
        console.log('userPermissionName', userPermissionName);
    }
    ;
}
exports.default = main;
//# sourceMappingURL=main.js.map