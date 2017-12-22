import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CreateComponent } from './users/create.component';
import { AppRoutingModule } from './app.routing';
import { UserService } from './services/user.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
