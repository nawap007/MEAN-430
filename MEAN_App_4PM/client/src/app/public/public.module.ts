import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PublicRoutingModule, routedComponents } from './public-routing';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';

@NgModule({
  imports: [PublicRoutingModule, 
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule],
  declarations: [routedComponents, UnauthorizeComponent]
})
export class PublicModule {}