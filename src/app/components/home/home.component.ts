import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, ProductResponse } from 'src/app/module/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] | undefined;
  list: ProductResponse | undefined;
  sub!: Subscription;
  favoriteProducts!: Product[];
  cartProducts!: Product[];
  constructor(private prodSrv: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.sub = this.prodSrv.getProducts().subscribe((result) => {
      this.list = result;
      this.products = result.products;
      this.prodSrv.products = this.products;
      console.log(this.prodSrv.products);
    });
  }
  addFavorite(id: number) {
    this.prodSrv.addFavorite(id);
    this.favoriteProducts = this.prodSrv.favoriteProducts;
    console.log(this.favoriteProducts);
  }
  addCart(id: number) {
    this.prodSrv.addCart(id);
    this.cartProducts = this.prodSrv.cartProducts;
    console.log(this.cartProducts);
  }
}
