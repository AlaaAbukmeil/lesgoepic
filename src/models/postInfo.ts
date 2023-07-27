export class postInfo {
    constructor(
        public _id: string,
        public name: string,
        public date: string,
        public caption: string,
        public images: string[],
        public coverImage: string,
        public order: string

    ) { }
}
