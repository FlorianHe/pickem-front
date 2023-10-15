import { Ban } from "./ban"
import { Pick } from "./pick"
import { Drake } from "./drake"
import { Team } from "./team"
import { Pentakill } from "./pentakill"
import { BO } from "./bO"

export class Side {
    constructor(public id: number, 
        public bO: BO,
        public team: Team,
        public ban: Ban[],
        public pick: Pick[],
        public drake : Drake[],
        public pentakill: Pentakill[],
        public baronSteal: number,
        public duration: string) {}
}