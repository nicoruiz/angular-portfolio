import { Component, OnInit } from '@angular/core';
import { PageInfo } from 'src/app/interfaces/page-info.interface';
import { PageInfoService } from 'src/app/services/page-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  info: PageInfo = {};

  constructor(public pageInfoService: PageInfoService) { }

  ngOnInit() {
    this.pageInfoService.getInfo().subscribe(info => this.info = info);
  }

}
