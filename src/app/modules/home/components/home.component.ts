import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from 'src/app/extra/footer.component';
import { DataModel } from 'src/app/models/dataHome.model';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild('sectionAboutMe')sectionAboutMe!:ElementRef;
  public data: DataModel[] = [];
  public showLoading = false;
  

  constructor(
    public homeService:HomeService,
  ){}

  ngOnInit() {
    this.showLoading = true;
    FooterComponent.DataEmmit.subscribe(res=>{
      this.data = res;
      this.showLoading = false;
    })
  }

  
  scrollTo(parameter:any){
    //@ts-ignore
    return this[parameter].nativeElement.scrollIntoView({behavior: 'smooth'}, false)
  }

  getWidthLogo(url:any){
    return url.includes('instagram') || url.includes('x') || url.includes('canva') || url.includes('picsart') || url.includes('tiktok')
  }
}
