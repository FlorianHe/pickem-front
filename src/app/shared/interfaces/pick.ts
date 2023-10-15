import { Champion } from "./champion"
import { Player } from "./player"

export interface Pick {
    id : number
    champion: Champion
    player : Player
}