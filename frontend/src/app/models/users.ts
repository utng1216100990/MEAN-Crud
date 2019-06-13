export class Users {

    constructor(_id = '', name = '', surname = '', address = '', phone = 0,
    email = '', occupation = '') {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.occupation = occupation;
    }

    _id: string;
    name: string;
    surname: string;
    address: string;
    phone: number;
    email: String;
    occupation: String;
}
