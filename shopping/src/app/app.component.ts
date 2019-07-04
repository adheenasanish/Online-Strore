import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Shopping';
  result = [];
  products = [];
  cart = [];
  addToCart = function(item){
    alert(item.name + " was added to cart for $" + item.price);
    this.cart.push(item);
  }
  constructor(private http: HttpClient)
  {

  }
 
  ngOnInit() : void {
    interface Product{
      name : string;
      category :string;
      price : number;
      picture:string;

    }

    this.http.get<Product>('https://localhost:44313/api/Products').subscribe(data => {
      for(let i in data) this.result.push(data[i]);
    })
  }

}
