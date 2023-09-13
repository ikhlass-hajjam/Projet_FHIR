import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  //regarder si un questionnaire dispo, si oui lafficher
  apiUrlQuestionnaire = 'https://fhir.alliance4u.io/api/questionnaire/4';//'https://fhir.alliance4u.io/api/questionnaire?status=active';
  apiUrlReponse='https://fhir.alliance4u.io/api/questionnaire-response';
  apiData: any;
  idPatient="64f1fba11baf0c0018445640";
  questionnaireId="";
  repondu:String[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get(this.apiUrlQuestionnaire).subscribe((data : any) => {
        let idMedecin= data.publisher;

        if(this.repondu.includes(data.id)){
          this.apiData="Pas de nouveau formulaire";
        }else{
          this.repondu.push(data.id);
        
          console.log(idMedecin);
  
  
          this.apiData=data;
        }
              
      });
  }

  onButtonClick() { 
    console.log("event clic"); 
    //lire les reponses renseignées
    //formater le type questionnaire-reponse
    //envoyer la reponse
    
    /*
    let data="";
    this.http.post(this.apiUrlReponse, data);
    */
  } 
}
