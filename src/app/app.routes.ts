import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

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

  // RESUME PAGE
  {
    path: 'resume',
    component: ResumeComponent
  }

];
