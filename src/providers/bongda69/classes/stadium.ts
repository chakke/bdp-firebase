import { FirebaseEnum } from "../../firebase/classes/firebase-enum";


import { FirebaseObject } from "../../firebase/classes/firebase-object";


export class Stadium extends FirebaseObject {
    /**id của Sân */
    id: string;
    /**Tên của sân */
    name: string;
    /**Logo của sân */
    logo: string;
    /**Ảnh bìa của sân */
    cover: string;
    /**Mô tả sân */
    description: string;
    /**Địa chỉ sân */
    address: string;
    /**Tọa độ lat của sân */
    lat: number;
    /**Tọa độ lng của sân */
    lng: number;
    /**số lượng sân */
    number_stadiums: number;
    /**id của bản đồ sân */
    map_id: string;
    /**Đường dây nóng */
    hotlines: Array<string>;
    /**Loại sân, xem thêm statium_types */
    types: Array<number>;
}