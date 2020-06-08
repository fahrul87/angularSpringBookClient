import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:any;

  // constructor(private Http:HttpClient) { }

  // ngOnInit(): void {
  //   let respone = this.Http.get("http://localhost:8080/findAllBooks");
  //   respone.subscribe((data)=>this.books=data);
  // }

  // new way
  constructor(private service:BookService){}

  ngOnInit(): void {
    this.books=this.service.getBooks().subscribe(data=>this.books=data);
  }

}
