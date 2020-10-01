import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductDescription } from 'src/app/interfaces/product-description.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent implements OnInit {
  product: ProductDescription;
  loading = true;
  id: string;
  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productService.getProductById(params['id'])
        .subscribe((prod: ProductDescription) => {
          this.product = prod;
          this.id = params['id'];
          this.loading = false;
        });
    });
  }
}
