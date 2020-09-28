import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PageInfo } from "../interfaces/page-info.interface";

@Injectable({
  providedIn: "root",
})
export class PageInfoService {
  infoUrl = "assets/data/data-page.json";
  constructor(private http: HttpClient) {}

  getInfo(): Observable<PageInfo> {
    return this.http.get<PageInfo>(this.infoUrl);
  }
}
