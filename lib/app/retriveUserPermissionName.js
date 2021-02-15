"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class retriveUserPermissionName {
    static async retrieveUserPermissions(conn) {
        let permissionName = new Array();
        const describeResult = await conn.describe('UserPermissionAccess');
        await describeResult.fields.forEach(element => {
            if (element.name.startsWith('Permissions'))
                permissionName.push(element.name.replace('Permissions', ''));
        });
        console.log('All permissionName: ', permissionName);
        return permissionName;
    }
}
exports.default = retriveUserPermissionName;
//# sourceMappingURL=retriveUserPermissionName.js.map