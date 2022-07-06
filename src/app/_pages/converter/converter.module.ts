import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { ConverterRoutingModule } from './converter-routing.module';



@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    CommonModule,
    ConverterRoutingModule
  ]
})
export class ConverterModule { }
