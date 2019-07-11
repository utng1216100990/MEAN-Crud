import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { NgForm } from '@angular/forms';
import { Book } from '../../models/book';
//Variable M
declare var M: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  addBook(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.bookService.putBook(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getBooks();
          M.toast({html: 'Actualizado correctamente'});
        });
    } else {
      this.bookService.postBook(form.value)
      .subscribe(res => {
        this.getBooks();
        this.resetForm(form);
        M.toast({html: 'Guardado correctamente'});
      });
    }
  }

  getBooks() {
    this.bookService.getBooks()
      .subscribe(res => {
        this.bookService.books = res as Book[];
      });
  }

  editBook(invoice: Book) {
    this.bookService.selectedBook = invoice;
  }

  deleteBook(_id: string, form: NgForm) {
    if(confirm('¿Desea eliminarlo?')) {
      this.bookService.deleteBook(_id)
        .subscribe(res => {
          this.getBooks();
          this.resetForm(form);
          M.toast({html: 'Eliminado correctamente'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.bookService.selectedBook = new Book();
    }
  }

}
