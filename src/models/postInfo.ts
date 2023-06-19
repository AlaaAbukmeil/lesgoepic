export class postInfo {
    constructor(
        public _id: string,
        public name: string | null,
        public date: string | null,
        public caption: string | null,
        public images: string[] | null,
        public coverImage: string | null,
        public order: string | null

    ) { }
}
