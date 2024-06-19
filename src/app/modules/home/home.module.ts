import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeService } from 'src/app/services/home.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers:[HomeService]
})
export class HomeModule { }
