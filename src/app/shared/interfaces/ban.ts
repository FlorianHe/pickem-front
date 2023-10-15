import { Champion } from "./champion"
import { Team } from "./team"

export interface Ban {
    id: number
    champion: Champion
    team: Team
}