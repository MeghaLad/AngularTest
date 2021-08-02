import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'capdetail',
  templateUrl: './capdetail.component.html',
  styleUrls: ['./capdetail.component.css']
})
export class CapdetailComponent implements OnInit {
  @Input('capDetail')item:any;
  constructor() { }

  ngOnInit(): void {
  }
}
