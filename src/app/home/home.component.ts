import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { IntroComponent } from '../intro/intro.component';
import { MaincontentComponent } from '../maincontent/maincontent.component';
import { ProjectComponent } from '../project/project.component';
import { BottomComponent } from '../bottom/bottom.component';
import { PanditComponent } from '../pandit/pandit.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, IntroComponent, MaincontentComponent,ProjectComponent,BottomComponent,PanditComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
