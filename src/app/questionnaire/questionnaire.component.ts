import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  apiUrl = 'https://fhir.alliance4u.io/api/patient';
  apiData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((data) => {
      this.apiData = data;
    });
  }
}
