export class Show {
    constructor (
        public name: string,
        public date: string,
        public venue: string,
        public description: string,
        public price: number,
        public soldOut: boolean,
        public id: number
    ) { }
}
