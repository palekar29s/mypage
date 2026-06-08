import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
selectedCertificate: string | null = null;

openCertificate(image: string) {
  this.selectedCertificate = image;
}

closeCertificate() {
  this.selectedCertificate = null;
}
}
