import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../module/product';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  url = environment.apiURL;
  products!: Product[];
  favoriteProducts: Product[] = [];
  cartProducts: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<ProductResponse>(this.url);
  }

  addCart(id: number) {
    const productToAdd: Product = this.products.filter(
      (product) => product.id === id
    )[0];
    this.cartProducts.push(productToAdd);
  }

  addFavorite(id: number) {
    const productToAdd: Product = this.products.filter(
      (product) => product.id === id
    )[0];
    console.log(productToAdd);
    this.favoriteProducts.push(productToAdd);
  }
  removeFavorite(id: number) {
    this.favoriteProducts = this.favoriteProducts.filter(
      (elem) => elem.id !== id
    );
    console.log(this.favoriteProducts);
  }
}
