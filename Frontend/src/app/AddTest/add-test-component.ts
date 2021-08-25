import { Component , OnInit } from '@angular/core';
import { AddTestService } from './add-service';
import { Test } from './test';
import {Router} from '@angular/router';

@Component({
    selector: 'add-test',
    templateUrl: './add-test-component.html'
})
export class AddTestComponent implements OnInit
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
   test:Test=new Test(0,new Date(),'','',0);

   public constructor(private addtestService: AddTestService, private router :Router){}
   public insertTest():void
   {
       this.addtestService.insertTest(this.test).subscribe();
       var a = confirm("New test details are successfully added! You can check the details and re-direct to this page by clicking 'OK' or click 'Cancel' to go back to home!");
      if(a==true)
      {
        this.router.navigate(['/Gettests']);
      } 
      else
      {
       this.router.navigate(['/AdminHome']);
      }
   } 

   ngOnInit()
   {
      //this.getTest();
   }

}