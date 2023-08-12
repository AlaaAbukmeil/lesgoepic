"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EventDetailsSubCard(eventDetails) {
    let notes = eventDetails["notes"];
    let notesSeprated = [];
    if (notes) {
        notesSeprated = notes.split("/");
    }
    return (<div className="cardFormRegistration col-lg-3 col-xs-12 col-sm-12 card-2">
        <article>
          <p className="example-right formDescription">
            {eventDetails["shortDescription"]}
          </p>
        </article>
        <iframe title="map" src={eventDetails["googleMaps"]} width="100%" height="" border-radius="12px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <ol className="name">
          {notesSeprated.map((note, index) => (<li key={index}>{note}</li>))}
        </ol>
      </div>);
}
exports.default = EventDetailsSubCard;
