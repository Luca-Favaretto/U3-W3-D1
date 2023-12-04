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
  constructor(private prodSrv: ProductService) {}

  ngOnInit(): void {
    this.favoriteProducts = this.prodSrv.favoriteProducts;
  }
}
