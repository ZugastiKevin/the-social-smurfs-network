import { Component, OnInit } from '@angular/core';
import { SmurfsService } from '../smurfs.service';

@Component({
  selector: 'app-list-smurfs',
  templateUrl: './list-smurfs.component.html',
  styleUrls: ['./list-smurfs.component.sass']
})
export class ListSmurfsComponent implements OnInit {
  listOfSmurfs:any;

  constructor(private service: SmurfsService) {}

  ngOnInit(): void {
    this.service.getSmurfs().subscribe(response => {
      this.listOfSmurfs = response;
      console.log(response)
    });
  };
};
