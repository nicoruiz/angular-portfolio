import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PageInfo } from "src/app/interfaces/page-info.interface";
import { PageInfoService } from "src/app/services/page-info.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(public service: PageInfoService) {}

  ngOnInit() {}
}
