import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  showDescriptions = false;
  newTitle = '';
  newAuthor = '';
  newDescription = '';
  message = '';
  searchTerm = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().pipe(
      map(books => books.filter(book =>
        book.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      ))
    ).subscribe(data => {
      this.books = data;
    });
  }

  toggleDescriptions(): void {
    this.showDescriptions = !this.showDescriptions;
  }

  addBook(): void {
    if (this.newTitle && this.newAuthor) {
      const book: Book = {
        id: 0,
        title: this.newTitle,
        author: this.newAuthor,
        description: this.newDescription
      };
      this.bookService.addBook(book);
      this.message = '"' + this.newTitle + '" has been added.';
      this.newTitle = '';
      this.newAuthor = '';
      this.newDescription = '';
      this.loadBooks();
    }
  }

  onSearch(): void {
    this.loadBooks();
  }
}
