"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retriveObjName_1 = require("./retriveObjName");
class main {
    static async start(conn) {
        console.log('sono nel main');
        var objects = await retriveObjName_1.default.getObjsName(conn);
        console.log('sono nel main', objects);
    }
    ;
}
exports.default = main;
//# sourceMappingURL=main.js.map