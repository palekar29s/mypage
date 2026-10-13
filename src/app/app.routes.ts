import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { MylifeComponent } from './mylife/mylife.component';
import { NewwwwComponent } from './newwww/newwww.component';

export const routes: Routes = [

 
 {
   path: '',
  redirectTo: 'home',
   pathMatch: 'full'
 },

  // HOME PAGE
  {
    path: 'home',
    component: HomeComponent
  },

  //MY LIFE
  {
    path: 'mylife',
    component: MylifeComponent
  },

  // RESUME PAGE
  {
    path: 'resume',
    component: ResumeComponent
  },

  {
    path: 'neww',
    component: NewwwwComponent
  }

];
