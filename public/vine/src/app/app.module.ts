import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HomeComponent} from "./components/Home/home.component";
import {ContactComponent} from "./components/Contact/contact.component";
import {AppRoutingModule} from "./modules/app-routing.module";
import {AboutComponent} from "./components/About/about.component";
import {SkillsComponent} from "./components/Skills/skills.component";
import {MyworkComponent} from "./components/MyWork/mywork.component";

import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, HomeComponent, ContactComponent, AboutComponent, SkillsComponent, MyworkComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpModule,  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQtuMEFP3bm9_k-S-Y-Lv-9dXPK7daZ0o'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
