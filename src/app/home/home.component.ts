import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,CommonModule],
}) 


export class HomeComponent {
  constructor(private router: Router) {}
  sousMenu: boolean = false;

  redirectToQuestionnaire() {
    this.router.navigate(['/questionnaire']);
  }
  AfficheSousMenu(){
    this.sousMenu =true;
    console.log('coucocu')
  }
  
  @Input()
  color: ThemePalette;

}

