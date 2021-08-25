import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './login/register.component';
import { UserComponent } from './UserDashboard';
import { HomeComponent } from './HomePage';
import { WelcomeComponent } from './welcome/welcome.component';
import {ContactComponent} from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormQuizComponent } from './Question';
import { QuestionComponent } from './Question';
import { QuestionListComponent } from './Question';
import { InsertComponent } from './Insert';
import { UpdateComponent } from './Update';
import { TestListComponent } from './AddTest';
import { AddTestComponent } from './AddTest';
import { DeleteTestComponent } from './Test';
import { UpdateTestComponent } from './UpdateTest';


const routes: Routes = [
  {path: '',component: WelcomeComponent },
  {path: 'getlogin', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 { path: 'User', component:UserComponent},
 { path: 'AdminHome', component: HomeComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'about', component: AboutComponent },
 { path: 'Question', component: QuestionComponent },
 { path: 'QuestionList', component: QuestionListComponent },
 { path: 'Quiz', component: FormQuizComponent },
 { path: 'Insert', component: InsertComponent },
 { path: 'Update', component: UpdateComponent },
 { path: 'Addtest', component: AddTestComponent},
 { path: 'Gettests', component: TestListComponent},
 { path: 'Deletetest', component: DeleteTestComponent},
 { path: 'Gettest', component: UpdateTestComponent},
 { path: 'Updatetest', component:UpdateTestComponent},];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
