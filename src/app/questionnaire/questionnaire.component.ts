import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuestionnaireResponse } from '../questionnaire';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  //regarder si un questionnaire dispo, si oui lafficher
  //apiUrlPatient = 'https://fhir.alliance4u.io/api/questionnaire/65003ac27a32ea001909459f';//'https://fhir.alliance4u.io/api/questionnaire?status=active';
  apiUrlPatient = 'https://fhir.alliance4u.io/api/questionnaire?status=active';
  apiData: any;
  questionnaireRep: QuestionnaireResponse = new QuestionnaireResponse();
  apiUrlQuestionnaireRep = 'https://fhir.alliance4u.io/api/questionnaire-response'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let idPatient="64f1fba11baf0c0018445640";

    this.http.get(this.apiUrlPatient).subscribe((data : any) => {
        let idMedecin= data.publisher;
        this.apiData=data;
        this.apiData.status="retired"  //desactivé le questionnaire une fois répondu
        this.questionnaireRep.questionnaire = data.id;
        console.log(data.id)
        this.questionnaireRep.status="in-progress";
        this.questionnaireRep.id = Math.floor(Math.random() * 10000000000000).toString();
        this.questionnaireRep.author.identifier.value=data.publisher;
        this.questionnaireRep.source.identifier.value=idPatient
        this.questionnaireRep.source.id=idPatient

        this.questionnaireRep.item = [
          {
              "linkId": "1",
              "answer": [
                  {
                      "valueInteger": 6
                  }
              ]
          },
          {
              "linkId": "2",
              "answer": [
                  {
                      "valueBoolean": true,
                  }
              ]
          },
          {
              "linkId": "3",
              "answer": [
                  {
                      "valueBoolean": true
                  }
              ]
          },
          {
              "linkId": "4",
              "answer": [
                  {
                      "valueBoolean": false
                  }
              ]
          }
      ];

      console.log(this.questionnaireRep)
        
      });
  }

  updateValue(event: MatRadioChange,index:number ){
    if(event.value == "oui") {
      this.questionnaireRep.item[index].answer[0].valueBoolean = true
      console.log(this.questionnaireRep)
    } else if (event.value == "non") {
      this.questionnaireRep.item[index].answer[0].valueBoolean = false
      console.log(this.questionnaireRep)
    }
  }

  updateValueSlider(event: Event,index:number): void {
    // Récupérer la valeur du curseur à partir de l'événement
    const sliderValue = (event.target as HTMLInputElement).value;
    this.apiData.item[index].value = sliderValue;
    this.questionnaireRep.item[0].answer[0].valueInteger = parseInt(sliderValue);
    console.log(this.questionnaireRep)
  }




  //let dataRep ="";

  onButtonClick() { 
    console.log("event clic"); 
   /* let items: any;
   
    for(let itemQ of this.apiData.item){
      let answerQR : any;
      switch(itemQ.type){
        case "itemQ.type = 'boolean'":
          //itemQ.type=
      }
      let itemQR ={
        linkId :itemQ.linkId,
        text : itemQ.text,
        answer : answerQR
      }
      // ajouter itemQR dans la liste "items"
    }

    let questionnaireResponse = {
      questionnaire : this.apiData,
      status : "completed",
      item : items
    }
    console.log("questionnaireResponse",questionnaireResponse)*/
    console.log(this.questionnaireRep)
    var httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    this.http.post<QuestionnaireResponse>(this.apiUrlQuestionnaireRep, this.questionnaireRep, httpoptions).subscribe((data) => {
      console.log('successfully Added')
    })
  } 



  
}