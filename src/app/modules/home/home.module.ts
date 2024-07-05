import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeService } from 'src/app/services/home.service';
import { CommonModule } from '@angular/common';
import { VideoFormatComponent } from 'src/app/extra/video-format.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    VideoFormatComponent,
  ],
  providers:[HomeService]
})
export class HomeModule { }
