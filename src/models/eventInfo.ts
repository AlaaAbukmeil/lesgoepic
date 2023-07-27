export class eventInfo {
    constructor(
        public _id: string,
<<<<<<< HEAD
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
=======
        public name: string | undefined,
        public location: string | undefined,
        public date: string | undefined,
        public cost: string | undefined,
        public image: string | undefined,
        public display: string | undefined,
        public shortDescription: string | undefined,
        public description: string | undefined,
        public questions: string,
        public notes: string | undefined,
        public stripe: string | undefined,
        public timeslots: string,
        public googleMaps: string | undefined,
        public order: string | undefined
>>>>>>> master
    ) { }
}
