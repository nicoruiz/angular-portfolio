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
  filteredProducts: Product[] = [];
  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.baseUrl}/products_idx.json`)
        .subscribe((res: Product[]) => {
          this.products = res;
          this.loading = false;
          resolve();
        });
    });
  }

  public getProductById(id: string) {
    return this.http.get(`${this.baseUrl}/products/${id}.json`);
  }

  public searchProduct(value: string) {
    if (this.products.length === 0) {
      this.getProducts().then(() => {
        this.filterProducts(value);
      });
    } else {
      this.filterProducts(value);
    }
  }

  private filterProducts(value: string) {
    this.filteredProducts = this.products.filter(
      (product) =>
        product.titulo.toLowerCase().includes(value.toLowerCase()) ||
        product.categoria.toLowerCase().includes(value.toLowerCase())
    );
  }
}
