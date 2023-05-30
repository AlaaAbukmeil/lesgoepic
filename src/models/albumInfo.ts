export class albumInfo {
    constructor(
        public _id: string,
        public name: string | null,
        public date: string | null,
        public image: string | null,
        public driveLink: string | null,
        public order: string | null
    ) { }
}
