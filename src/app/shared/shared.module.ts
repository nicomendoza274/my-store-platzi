import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';

import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { VowelsToNumbersPipe } from './pipes/vowels-to-numbers.pipe';
import { ImgComponent } from '../shared/components/img/img.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    VowelsToNumbersPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReversePipe,
    TimeAgoPipe,
    VowelsToNumbersPipe,
  ]
})
export class SharedModule { }
