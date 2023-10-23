import { Champion } from "./champion";

export interface Winrate {
    champion : Champion
    totalGame : number
    victory : number
    defeat : number
    winrate : number
}