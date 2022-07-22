import Database from 'simplest.db'; 
import { RawKey } from 'simplest.db/lib/typings/base';


export interface DBmodel {
    color: string,
    value: string
}


export const db = new Database.JS0N({path: './db.json'});

