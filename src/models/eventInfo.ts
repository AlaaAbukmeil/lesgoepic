export class eventInfo {
    constructor(
        public _id: string,
        public name: string,
        public location: string | undefined,
        public date: string | undefined,
        public cost: string | undefined,
        public image: string | undefined,
        public display: string | undefined,
        public shortDescription: string | undefined,
        public description: string | undefined,
        public meetingUpDetails: string | undefined,
        public questions: string,
        public notes: string | undefined,
        public stripe: string | undefined,
        public timeslots: string,
        public googleMaps: string | undefined,
        public order: string | undefined
    ) { }
}
