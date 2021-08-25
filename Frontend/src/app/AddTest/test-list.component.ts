import { Component , OnInit} from '@angular/core';
import { AddTestService } from './add-service';
import { Test } from './test';
@Component({
   selector: 'test-list',  
   templateUrl: './test-list.component.html'
})
export class TestListComponent implements OnInit
{
    customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['←', '→'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
    tests:Test[];
    public constructor(private addtestService: AddTestService){}
    public getTests():void
    {
       this.addtestService.getTests().subscribe(data => this.tests=data);
    }
    ngOnInit(){}
}