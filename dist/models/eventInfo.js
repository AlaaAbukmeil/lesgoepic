"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventInfo = void 0;
class eventInfo {
    constructor(_id, name, location, date, cost, image, display, shortDescription, description, questions, notes, stripe, timeslots, googleMaps, order) {
        this._id = _id;
        this.name = name;
        this.location = location;
        this.date = date;
        this.cost = cost;
        this.image = image;
        this.display = display;
        this.shortDescription = shortDescription;
        this.description = description;
        this.questions = questions;
        this.notes = notes;
        this.stripe = stripe;
        this.timeslots = timeslots;
        this.googleMaps = googleMaps;
        this.order = order;
    }
}
exports.eventInfo = eventInfo;
