import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-caplist',
  templateUrl: './caplist.component.html',
  styleUrls: ['./caplist.component.css']
})
export class CaplistComponent implements OnInit {

  constructor(public apiService:ApiService) { }

   public totalCap : any =[];
   public smallCap: any = [];
   public largeCap: any = [];

  ngOnInit(): void {
    setInterval(()=>{
     this.getList();   
    },1000)
  }

  getList(){  
     this.apiService.getList().subscribe((data:any)=>{
        this.totalCap = data;
        this.smallCap = data.value.filter((item:any)=> item['isSmallCap'] === 'Y')
                                  .sort((a:any,b:any) => a.currentValue - b.currentValue).slice(0,10);

        this.largeCap = data.value.filter((item:any)=> item['isSmallCap'] === 'N')
                                  .sort((a:any,b:any) => a.currentValue - b.currentValue).slice(0,10);
    });
  }

}
