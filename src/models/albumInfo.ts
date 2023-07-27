export class albumInfo {
    constructor(
        public _id: string,
        public name: string | undefined,
        public date: string | undefined,
        public image: string | undefined,
        public driveLink: string,
        public order: string | undefined
    ) { }
}
