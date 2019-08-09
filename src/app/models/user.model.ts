export class User {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    businessRating: number[] = [];
    cropsRating: number[] = [];
    friends: string[] = [];
    messangers: string[] = [];
    notifications: object = {};
    crops: string[] = [];
    watchList: string[] = [];
    offers: string[] = [];
    offersSent: string[] = [];
    socket: null;

}