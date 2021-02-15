import * as sfcore from '@salesforce/core/lib/connection';
export default class profileRetriever {
    static retrieveProfile(conn: sfcore.Connection, profileNames: string[], profileMap: any): Promise<any>;
    static retrieveProfileNames(conn: sfcore.Connection): Promise<string[]>;
}
