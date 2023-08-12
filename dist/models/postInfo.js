"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postInfo = void 0;
class postInfo {
    constructor(_id, name, date, caption, images, coverImage, order) {
        this._id = _id;
        this.name = name;
        this.date = date;
        this.caption = caption;
        this.images = images;
        this.coverImage = coverImage;
        this.order = order;
    }
}
exports.postInfo = postInfo;
