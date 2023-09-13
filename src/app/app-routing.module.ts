import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'questionnaire', component: QuestionnaireComponent },
  // ... d'autres routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
