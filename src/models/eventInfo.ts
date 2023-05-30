export class eventInfo {
    constructor(
        public _id: string,
        public name: string | null,
        public location: string | null,
        public date: string | null,
        public cost: string | null,
        public image: string | null,
        public display: string | null,
        public shortDescription: string | null,
        public description: string | null,
        public questions: string | null,
        public notes: string | null,
        public stripe: string | null,
        public timeslots: string | null,
        public googleMaps: string | null,
        public order: string | null
    ) { }
}
