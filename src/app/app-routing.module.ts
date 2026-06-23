import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
