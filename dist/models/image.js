"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.image = void 0;
class image {
    constructor(fieldname, originalname, encoding, mimetype, path, filename) {
        this.fieldname = fieldname;
        this.originalname = originalname;
        this.encoding = encoding;
        this.mimetype = mimetype;
        this.path = path;
        this.filename = filename;
    }
}
exports.image = image;
