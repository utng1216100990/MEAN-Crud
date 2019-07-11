export class Book {
//Constructor
    constructor(_id = '', name = '', autor = '', editorial = '', date = '') {
        this._id = _id;
        this.name = name;
        this.autor = autor;
        this.editorial = editorial;
        this.date = date;
    }

    _id: string;
    name: string;
    autor: string;
    editorial: string;
    date: string;

}
