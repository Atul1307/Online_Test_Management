import { Component , OnInit } from '@angular/core';
import { UpdateTestService } from './update-service';
import { Test } from './test';
import {Router} from '@angular/router';
@Component({
    selector: 'update-test',
    templateUrl: './update-test-component.html'
})
export class UpdateTestComponent implements OnInit
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

   public constructor(private updatetestService: UpdateTestService, private router :Router){}
   public updateTest():void
   {
       this.updatetestService.updateTest(this.test).subscribe();
       var r=confirm("Test details modified!To check the modified and redirect to this page click on 'OK' or click on 'Cancel' to reach home page");
      if(r==true)
      {
        this.router.navigate(['/Gettests']);
      }
     else
      {
       this.router.navigate(['/AdminHome']);
      }
   } 
   public getTestDetails():void
   {
        //this.test = this.testService.getTest(1);
       if(this.test.testId >0 && this.test.testId <= 2)
       {
       this.updatetestService.getTestDetails(this.test.testId).subscribe(data => this.test=data );
       }
       else
       {
        alert("The Test Id is not within the range. Check 'Help(Test Details)' and try again!");
        this.router.navigate(['/Gettests']);
       }
   }
   ngOnInit()
   {
      //this.getTest();
   }

}