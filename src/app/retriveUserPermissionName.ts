



export default class retriveUserPermissionName{ 
    public static async  getNames(conn) {
       try{
        let permissionName = [];
        await conn.sobject("UserPermissionAccess").describe(function(err, metadata){
            if(err){ return console.error(err); }
            console.log('Label: ' + metadata.label);
            console.log('Number of Fields: ' + metadata.fields.length);
            metadata.fields.forEach(element => {
                if(element.name.startsWith('Permissions'))
                    permissionName.push(element.name.replace('Permissions', ''));
            });
        });
        console.log('All permissionName: ', permissionName);
        return permissionName;
       }catch(err) {
        console.error(err);
       } 
        
    };
}
