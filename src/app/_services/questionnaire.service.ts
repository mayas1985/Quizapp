import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class QuestionnaireService {
  apiURL: string = "https://rhhqhuo834.execute-api.us-east-1.amazonaws.com/prod/questionnaires/1/questionnaire";
  saveQuestionnaire: string ="https://rhhqhuo834.execute-api.us-east-1.amazonaws.com/prod/answers/1/answer";

  constructor(private http: HttpClient) { }

  public getQuestionnaire(qid: number) {
    return this.http.get<any>(this.apiURL);
  }

  public savequestionnaireAndSendEmail(questionniareObj:object){
    return this.http.post<any>(this.saveQuestionnaire,{questionnaire:questionniareObj});
  }
}