export class customerSignupInfo {
    constructor(
        public username: string,
        public email: string,
        public ageGroup: string,
        public password: string,

    ) { }
}
export class customerLoginInfo {
    constructor(
        public email: string,
        public password: string,

    ) { }
}

export class customerInfo {
    constructor(
        public email: string,
        public username: string,
        public password: string,
        public ageGroup: string,
        public eventIds: string[],
        public eventNames: string[],
        public responses: string[],
        public credit: number

    ) { }
}

export class customerEventInfo{
    constructor(
        public email: string,
        public username: string,
        public responses: customerResponse[],
        public credit: number

    ) { }
}

class customerResponse{
    constructor(
        public name: string,
        public email: string,
        public whatsApp: string,
        public paymentMethod: string,
        public eventCost: number,
        public eventMeetingUpDetails: string,
        public eventName: string,
        public eventImage: string,

    ) { }
}


