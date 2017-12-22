import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { AppRoutingModule } from './app.routing';
import { UserService } from './services/user.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
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
