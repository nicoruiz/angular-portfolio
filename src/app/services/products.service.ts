import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  baseUrl = "https://angular-portfolio-7afee.firebaseio.com";
  loading = true;
  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http
      .get(`${this.baseUrl}/products_idx.json`)
      .subscribe((res: Product[]) => {
        this.products = res;
        console.log(res);
        this.loading = false;
      });
  }
}
