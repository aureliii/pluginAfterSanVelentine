"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var fs = require('fs');
// var parser = require('xml2json');
// const path = require('path');
const templatestruct_1 = require("./templatestruct");
var jsonTemplate;
var myMap = new Map();
myMap.set('apexClass', "classAccesses");
myMap.set('field', "fieldPermissions");
myMap.set('flow', "flowAccesses");
myMap.set('layout', "layoutAssignments");
myMap.set('object', "objectPermissions");
myMap.set('tab', "tabVisibilities");
myMap.set('name', "userPermissions");
class tabFix {
    static async fix(metadata) {
        try {
            //  let data = fs.readFileSync(path.resolve(__dirname, './ProfileTemplate.xml'));
            jsonTemplate = templatestruct_1.default.getTemplate(); //JSON.parse(parser.toJson(data, {reversible: false}));
            //     console.log('template ',jsonTemplate);
            //     console.log(JSON.stringify(jsonTemplate));
            for (const k of metadata.keys()) {
                let metadataProfile = metadata.get(k);
                for (var key of myMap.keys()) {
                    var object = metadataProfile[myMap.get(key)];
                    if (typeof object !== 'undefined' && typeof jsonTemplate["Profile"][key] !== 'undefined' && jsonTemplate["Profile"][key]) {
                        var objectFiltered = object.filter(function (value, index, arr) {
                            return jsonTemplate["Profile"][key].indexOf(value[key]) < 0;
                        });
                        metadataProfile[myMap.get(key)] = objectFiltered;
                    }
                }
                metadata.set(k, metadataProfile);
            }
            console.log('ho fatto il remuve from template');
            return metadata;
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = tabFix;
//# sourceMappingURL=tabFix.js.map