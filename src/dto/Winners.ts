export default class Winners {
    id: number;
    wins: number;
    time: number;

    constructor(id: number, wins: number, time: number, name: string) {
        this.id = id;
        this.wins = wins;
        this.time = time;
    }
}