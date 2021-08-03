import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'capdetail',
  templateUrl: './capdetail.component.html',
  styleUrls: ['./capdetail.component.css']
})
export class CapdetailComponent implements OnInit {
  @Input('capDetail')item:any;  // Declare Input parameter, fatch input value and assign in to item variable
  constructor() { }

  ngOnInit(): void {
  }
}
