import jsPDF from "jspdf";
import logo from "./imageDataUrl";
export function formatTimestamp(timestampString: string) {
  let timestamp: number = parseInt(timestampString);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateObject = new Date(timestamp);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based
  const date = String(dateObject.getDate()).padStart(2, "0");
  const dayOfWeek = days[dateObject.getDay()];
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");
  return `${year}/${month}/${date} (${dayOfWeek}) ${hours}:${minutes}`;
}

export function downloadReciept(eventName: string, response: any) {
  const commonKeys = [
    "name",
    "email",
    "whatsApp",
    "paymentMethod",
    "eventCost",
    "eventMeetingUpDetails",
    "eventName",
    "eventImage",
    "timeslot",
    "userEventId",
    "eventDate",
    "submissionTime",
  ];
  let responseKeys = Object.keys(response);
  responseKeys = responseKeys.filter(
    (element) => !commonKeys.includes(element)
  );

  const doc = new jsPDF();
  doc.setFontSize(15);
  doc.text(`${eventName}`, 50, 30);
  doc.addImage(logo, "JPEG", 15, 15, 25, 25);
  let height = 60;
  doc.setFontSize(15);
  doc.text(`Name: ${response.name}`, 15, height);
  height += 15;
  doc.text(`Email: ${response.email}`, 15, height);
  height += 15;
  doc.text(`WhatsApp Number: ${response.whatsApp}`, 15, height);
  height += 15;
  let payment = "";
  if (response.paymentMethod == "cash") {
    payment = `Cash - ` + response.timeslot;
  } else {
    payment = response.paymentMethod;
  }
  doc.text(`Event Date: ${response.eventDate}`, 15, height);
  height += 15;
  doc.text(`Event Cost: ${response.eventCost}`, 15, height);
  height += 15;
  doc.text(
    `Credit Obtained by the event: ${response.eventCost / 10}`,
    15,
    height
  );
  height += 15;
  doc.text(`Payment Method: ${payment}`, 15, height);
  height += 15;
  for (let index = 0; index < responseKeys.length; index++) {
    const element = responseKeys[index];

    let line = 100;
    let elementLength = element.length;
    doc.text(`${element}:`, 15, height);
    height += 15;

    let dummy = response[element];
    let chunkSize = 50;

    for (let i = 0; i < dummy.length; i += line) {
      let chunk = dummy.slice(i, i + line);
      doc.text(`${chunk}`, 15, height);
      height += 15;
    }
  }
  doc.text(
    `Submission Time: ${formatTimestamp(response.submissionTime)}`,
    15,
    height
  );
  doc.save(`${eventName}.pdf`);
}
