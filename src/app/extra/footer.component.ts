import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { DataModel } from '../models/dataHome.model';
import { HomeService } from '../services/home.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faDirections, faMailBulk } from '@fortawesome/free-solid-svg-icons'


@Component({
    selector: 'app-footer',
    standalone: true,
    imports:[CommonModule, FontAwesomeModule],
    template: `
      <footer class="footer footer--bg" *ngFor="let item of data">
        <div class="container-portfolio text-center">
          <h1 class="footer__title">{{item.name}}</h1>
          <ul class="footer__contact-information"*ngFor="let contact of item.informationContact" >
            <li><a href="tel:{{contact.phone}}"><fa-icon class="p-1" [icon]="faPhone"></fa-icon>{{contact.phone}}</a></li>
            <li><a href="mailto:{{contact.mail}}"><fa-icon [icon]="faMailBulk"></fa-icon> {{contact.mail}}</a></li>
            <li><a><fa-icon [icon]="faDirection"></fa-icon> {{item.direction}}</a></li>
            <li><a href="{{contact.linkedn}}" target="_blank"><fa-icon [icon]="faLinkedn"></fa-icon></a></li>
          </ul>
        </div>
        <hr style="border: 0;border-top: 1px solid #525B60;display:block;margin-top: 40px;">
        <div class="container-portfolio text-center">
          <p class="footer__paragraph">Copyright &copy; {{yearToday}}, All Rights Reserved.</p>
        </div>
      </footer>
  `,
})
export class FooterComponent implements OnInit {
  constructor( public homeService: HomeService) {
  };
  public yearToday!:String;
  public data: DataModel[] = [];
  public faLinkedn =  faLinkedin;
  public faPhone = faPhone;
  public faDirection = faDirections;
  public faMailBulk = faMailBulk;
  static DataEmmit:EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    this.getData();
    this.yearToday = new Date().getFullYear().toString();
  }
  async getData(){
    await this.homeService.getData().then(res=>{
      this.formatObject(res);
      FooterComponent.DataEmmit.emit(this.data);
    });
  }

  formatObject(data:any){
    data.forEach((element:any, index:number) => {
      const dataNew: DataModel = {
        imagePresentation:element.imagePresentation.stringValue,
        aboutMe: element.aboutMe.stringValue,
        age: element.age.stringValue,
        direction: element.direction.stringValue,
        job: element.job.stringValue,
        name: element.namePerson.stringValue,
        skill: element.skills.arrayValue.values.map((res: any) => ({
          name: res.mapValue.fields.name.stringValue,
          rate: res.mapValue.fields.rate.stringValue,
          urlImageLogo: res.mapValue.fields.urlImageLogo.stringValue,
        })),
        skillInformation: element.skillInformation.stringValue,
        informationContact: element.informationContact.arrayValue.values.map((res:any)=> ({
          mail: res.mapValue.fields.mail.stringValue,
          linkedn: res.mapValue.fields.linkedn.stringValue,
          phone: res.mapValue.fields.phone.stringValue,
        })),
        notes: element.notes.arrayValue.values.map((res: any) => ({
          urlImage: res.mapValue.fields.urlImage.stringValue,
          urlNota: res.mapValue.fields.urlNota.stringValue,
          title: res.mapValue.fields.title.stringValue,
        })),
      };
      this.data.push(dataNew);
    });
  }

}
