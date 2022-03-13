import { Component, OnInit } from '@angular/core';
import { Category,categories } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  categories = categories;
  constructor() { }
  
  ngOnInit(): void {
  }

}
