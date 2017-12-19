import { FirebaseEnum } from "../../firebase/classes/firebase-enum";


import { FirebaseObject } from "../../firebase/classes/firebase-object";


export class StadiumType extends FirebaseEnum { }


export class Stadium extends FirebaseObject {
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
    number_stadiums: number;
    map_id: string;
    hotlines: Array<string>;
    type_ids: Array<string>;
}