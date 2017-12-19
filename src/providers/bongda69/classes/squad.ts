import { FirebaseObject } from "../../firebase/classes/firebase-object";
import { Player } from "./player";

export class Squad extends FirebaseObject {
    /**ID của squad này */
    id: string;
    /**ID câu lạc bộ của squad này*/
    club_id: string;
    /**Danh sách cầu thủ */
    players: Array<Player>;
}