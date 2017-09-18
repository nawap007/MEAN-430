import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminRoutingModule, routedComponents } from './admin-routing';

@NgModule({
  imports: [AdminRoutingModule, 
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule],
  declarations: [routedComponents]
})
export class AdminModule {}