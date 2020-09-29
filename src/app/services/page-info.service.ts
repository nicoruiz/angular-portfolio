import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageInfo } from "../interfaces/page-info.interface";
import { WorkMember } from "../interfaces/workmember.interface";

@Injectable({
  providedIn: "root",
})
export class PageInfoService {
  infoUrl = "assets/data/data-page.json";
  workteamUrl = "https://angular-portfolio-7afee.firebaseio.com/workteam.json";
  pageInfo: PageInfo = {};
  constructor(private http: HttpClient) {
    this.getInfo();
    this.getWorkteam();
  }

  private getInfo(): void {
    this.http
      .get<PageInfo>(this.infoUrl)
      .subscribe((res) => (this.pageInfo = res));
  }

  private getWorkteam(): void {
    this.http
      .get<Array<WorkMember>>(this.workteamUrl)
      .subscribe((res) => (this.pageInfo.workteam = res));
  }
}
