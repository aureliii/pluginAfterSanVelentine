"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var js2xmlparser = require("js2xmlparser");
var dirname = './main/default/profiles/';
var format = require('xml-formatter');
class writeprofile {
    static async write(orgMeta) {
        try {
            for (const k of orgMeta.keys()) {
                let metadataProfile = orgMeta.get(k);
                metadataProfile["@"] = { "xmlns": "http://soap.sforce.com/2006/04/metadata" };
                var options = {
                    declaration: {
                        "encoding": "UTF-8"
                    }
                };
                var xml = js2xmlparser.parse("Profile", metadataProfile, options);
                fs.writeFile(dirname + metadataProfile.fullName + '.profile-meta.xml', format(xml, { collapseContent: true }), function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log('profili updated!');
                    }
                });
            }
            return orgMeta;
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.default = writeprofile;
//# sourceMappingURL=writeprofile.js.map