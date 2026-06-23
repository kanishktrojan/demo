import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Angular in Action',
      author: 'Jeremy Wilken',
      description: 'A practical guide to building applications with Angular framework'
    },
    {
      id: 2,
      title: 'Learning RxJS',
      author: 'Anna Kowalska',
      description: 'Understanding reactive programming with RxJS operators and observables'
    },
    {
      id: 3,
      title: 'TypeScript Handbook',
      author: 'Microsoft',
      description: 'The official guide to TypeScript language features and usage patterns'
    }
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addBook(book: Book): void {
    book.id = this.books.length + 1;
    this.books.push(book);
  }
}
