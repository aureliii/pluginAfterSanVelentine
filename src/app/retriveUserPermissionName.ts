import * as sfcore from '@salesforce/core/lib/connection';

export default class retriveUserPermissionName{ 

    public static async retrieveUserPermissions(conn : sfcore.Connection) {
        let permissionName: string[] = new Array<string>();
        const describeResult = await conn.describe('UserPermissionAccess');

        await describeResult.fields.forEach(element => {
            if(element.name.startsWith('Permissions'))
                permissionName.push(element.name.replace('Permissions', ''));
        });

        console.log('All permissionName: ', permissionName);
        return permissionName;
    }
}
