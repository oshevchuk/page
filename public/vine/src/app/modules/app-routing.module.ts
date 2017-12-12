/**
 * Created by Oshevchuk on 25.09.2017.
 * http://oshevchuk2016.16mb.com/
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../components/Home/home.component";
import {ContactComponent} from "../components/Contact/contact.component";
import {AboutComponent} from "../components/About/about.component";
import {SkillsComponent} from "../components/Skills/skills.component";
import {MyworkComponent} from "../components/MyWork/mywork.component";


const routes:Routes=[
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'contact', component: ContactComponent, pathMatch: 'full'},
    {path: 'about', component: AboutComponent, pathMatch: 'full'},
    {path: 'skills', component: SkillsComponent, pathMatch: 'full'},
    {path: 'mywork', component: MyworkComponent, pathMatch: 'full'},
    {path: '', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export  class AppRoutingModule{}