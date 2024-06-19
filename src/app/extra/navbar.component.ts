import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports:[CommonModule],
    template: `
    <nav>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white" aria-expanded="false" (click)="show()">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <span (click)="scrollTo('headerHome')" [ngClass]="{'bg-gray-900': headerHome}" class="rounded-md px-3 py-2 text-sm font-medium text-white" aria-current="page">Inicio</span>
                  <span (click)="scrollTo('sectionAboutMe')" [ngClass]="{'bg-gray-900': sectionAboutMe}" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sobre mi</span>
                  <span (click)="scrollTo('mySkills')" [ngClass]="{'bg-gray-900': mySkills}"  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Mis skills</span>
                  <span (click)="scrollTo('portfolio')" [ngClass]="{'bg-gray-900': portfolio}" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Notas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  [hidden]="!showMobile" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <span (click)="scrollTo('headerHome')" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Inicio</span>
            <span (click)="scrollTo('sectionAboutMe')" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Sobre mi</span>
            <span (click)="scrollTo('mySkills')" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Mis skills</span>
            <span (click)="scrollTo('portfolio')" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Notas</span>
          </div>
        </div>
    </nav>
    `,
})
export class NavbarComponent {
  public showMobile:boolean = false;
  public headerHome: boolean = true;
  public sectionAboutMe! :boolean;
  public mySkills! :boolean;
  public portfolio! :boolean;
  scrollTo(parameter:string ){
    this.headerHome = false;
    this.sectionAboutMe = false;
    this.mySkills = false;
    this.portfolio = false;
    //@ts-ignore
    this[parameter] = true;
    const element:HTMLElement | null = document.getElementById(parameter);
    element?.scrollIntoView({behavior: 'smooth',block:'start', inline:'nearest'});
    return this.show(); 
  }

  show(){ 
    if(window.navigator.userAgent.includes('mobile'))this.showMobile = !this.showMobile;
  }

}
