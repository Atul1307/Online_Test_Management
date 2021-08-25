import { Component , OnInit } from '@angular/core';
import { DeleteTestService } from './delete-service';
import { Test } from './test';
import {Router} from '@angular/router';
@Component({
    selector: 'delete-test',
    templateUrl: './delete-test-component.html'
})
export class DeleteTestComponent implements OnInit
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
   public constructor(private deletetestService: DeleteTestService,  private router :Router){}
   public deleteTest() : void
   {
      var r = confirm("Are you sure to delete test permanently?");
      if(r==true)
      {
      this.deletetestService.deleteTest(this.test.testId).subscribe();
      this.router.navigate(['/Gettests']);
      }
      else
      {
       alert("Operation Canceled");
       this.router.navigate(['/AdminHome']);
      }
   }
   public getTestDetails():void
   {
        //this.test = this.testService.getTest(1);
       if(this.test.testId >0 && this.test.testId <= 2)
       {
       this.deletetestService.getTestDetails(this.test.testId).subscribe(data => this.test=data );
        }
       else
       {
        alert("The Test Id is not within the range. Check 'Help(Test Details)' and try again!");
        this.router.navigate(['/Gettests']);
       }
   }

  
   ngOnInit()
   {
      //this.deleteTest();
   }
}