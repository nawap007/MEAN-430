import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PublicRoutingModule, routedComponents } from './public-routing';

@NgModule({
  imports: [PublicRoutingModule, 
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule],
  declarations: [routedComponents]
})
export class PublicModule {}