import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { categories, Category } from '../categories';
import { Dress, dresses } from '../dresses';
import { healthes } from '../healthes';
import { picks } from '../picks';
import { toys } from '../toys';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  category : Category | undefined;

  dresses = dresses;
  healthes = healthes;
  picks = picks;
  toys = toys;
  constructor(private route: ActivatedRoute) {
  }
  myfunc(dress: Dress){
    if(!dress.is_liked){
          dress.likes=dress.likes + 1;
          dress.is_liked = true;
    }
    else{
         dress.likes = dress.likes - 1;
         dress.is_liked = false;
    }
  };
  
  remove(redress: Dress,index: number){
    if(index===1) this.dresses = this.dresses.filter(dress => dress.id !== redress.id);
    else if(index===2) this.healthes = this.healthes.filter(health => health.id !==redress.id);
    else if(index===3) this.picks = this.picks.filter(pick => pick.id !== redress.id);
    else this.toys = this.toys.filter(toy => toy.id !== redress.id);
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

  // Find the product that correspond with the id provided in route.
    this.category = categories.find(category => category.id === categoryIdFromRoute);
  }
}
