import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Data, dataToPush } from '../data';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent implements OnInit {
  // data$: Observable<any> | undefined;
  data$: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.data$ = this.apiService.getData().subscribe(data => {
      console.log(data);
      this.data$ = data;
    });
  }

  public postData(postData: any) {
    this.apiService.postData(postData);
  }

}
