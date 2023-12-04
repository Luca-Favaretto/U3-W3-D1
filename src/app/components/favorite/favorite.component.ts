import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/module/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  favoriteProducts!: Product[];
  cartProducts!: Product[];
  constructor(private prodSrv: ProductService) {}

  ngOnInit(): void {
    this.favoriteProducts = this.prodSrv.favoriteProducts;
  }

  removeFavorite(id: number) {
    this.prodSrv.removeFavorite(id);
    this.favoriteProducts = this.prodSrv.favoriteProducts;
  }
  addCart(id: number) {
    this.prodSrv.addCart(id);
    this.cartProducts = this.prodSrv.cartProducts;
    console.log(this.cartProducts);
  }
}
