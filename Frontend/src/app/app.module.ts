import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './UserDashboard';
import { HomeComponent } from './HomePage';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { QuestionComponent } from './Question';
import { QuestionService } from './Question/question-service';
import { InsertComponent } from './Insert';
import { InsertService } from './Insert/insert-service';
import { UpdateComponent } from './Update';
import { UpdateService } from './Update/update-service';
import { QuestionListComponent } from './Question';
import { FormQuizComponent } from './Question';
import { AddTestService } from './AddTest/add-service';
import { AddTestComponent } from './AddTest';
import { TestListComponent } from './AddTest';
import { UpdateTestService } from './UpdateTest/update-service';
import { UpdateTestComponent } from './UpdateTest';
import { DeleteTestService } from './Test/delete-service';
import { DeleteTestComponent } from './Test';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    WelcomeComponent,
    ContactComponent,
    AboutComponent,
    QuestionListComponent,
    QuestionComponent,
    FormQuizComponent,
    UpdateComponent,
    UserComponent,
    AddTestComponent,
    TestListComponent,
    UpdateTestComponent,
    DeleteTestComponent,
    InsertComponent
  ],
  imports: [
    HttpClientModule, 
    BrowserModule,
    FormsModule, 
    LoginModule,
    AppRoutingModule
  ],
  providers: [QuestionService,InsertService, UpdateService, AddTestService, UpdateTestService, DeleteTestService],
  bootstrap: [AppComponent],
  exports: [ QuestionComponent , QuestionListComponent, InsertComponent, FormQuizComponent, UpdateComponent, UserComponent, AddTestComponent,
    TestListComponent, UpdateTestComponent, DeleteTestComponent]
})
export class AppModule { }
