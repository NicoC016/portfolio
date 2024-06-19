import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './extra/footer.component';
import { NavbarComponent } from './extra/navbar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './core/firebase';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterComponent,
    NavbarComponent,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
