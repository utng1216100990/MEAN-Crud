import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  selectedBook: Book;
  books: Book[];
  readonly URL_API = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) {
    this.selectedBook = new Book();  
   }

   getBooks() {
    return this.http.get(this.URL_API);
  }

  postBook(Book: Book) {
    return this.http.post(this.URL_API, Book);
  }

  putBook(Book: Book) {
    return this.http.put(this.URL_API + `/${Book._id}`, Book);
  }

  deleteBook(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
