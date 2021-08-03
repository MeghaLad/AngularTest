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
    },60000) // one minute time interval
  }

  getList(){  
     this.apiService.getList().subscribe((data:any)=>{
        this.totalCap = data;
        // filter data with small and Large 
        // Select top 10 data
        // Sort data by Current Value
        this.smallCap = data.value.filter((item:any)=> item['isSmallCap'] === 'Y').slice(0,10)
                                  .sort((a:any,b:any) => a.currentValue - b.currentValue);

        this.largeCap = data.value.filter((item:any)=> item['isSmallCap'] === 'N').slice(0,10)
                                  .sort((a:any,b:any) => a.currentValue - b.currentValue);
    });
  }

}
