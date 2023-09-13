import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  //regarder si un questionnaire dispo, si oui lafficher
  apiUrlPatient = 'https://fhir.alliance4u.io/api/questionnaire?status=active';
  apiData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let idPatient="64f1fba11baf0c0018445640";
    
    this.http.get(this.apiUrlPatient).subscribe((data : any) => {
        let idMedecin= data[0].publisher;
        console.log(idMedecin);
        this.apiData=data;      
      });
    } 
  }
