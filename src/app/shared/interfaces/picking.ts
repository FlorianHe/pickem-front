import { Champion } from "./champion";

export interface Picking {
    pick : Champion
    unpick: Champion | null
}