import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class QuestionnaireService {
    constructor(private http: HttpClient) { }
    getQuestionnaire(qid: Number):any{
       let obj = {
        title: "",
        showProgressBar: "top",
        pages: [
          {
            elements: [
              {
                type: "text",
                inputMask: "phone",
                popupdescription: "Your phone number"
              },
              
              {
                type: "radiogroup",
                name: "Select any one of the following",
                renderAs: "prettycheckbox",
                choices: ["I like C#", "I like C++", "I like Java"]
              },
              {
                type: "dropdown",
                renderAs: "select2",
                choicesByUrl: {
                  url: "https://restcountries.eu/rest/v1/all"
                },
                name: "countries",
                title: "Please select the country you have arrived from:"
              }
             
              
            ]
          },
          {
            questions: [
                {
                    type: "sortablelist",
                    name: "Most Used Programming",
                    title: "Most Used Programming langauge",
                    isRequired: true,
                    colCount: 0,
                    choices: ["C#", "Java", "C++", "Cobol", "Pascal"]
                  },
                  {
                    name: "date",
                    type: "datepicker",
                    inputType: "date",
                    title: "Your favorite date:",
                    dateFormat: "mm/dd/yy",
                    isRequired: true
                  },
              
              {
                type: "rating",
                name: "satisfaction",
                title: "How satisfied are you with the Product?",
                mininumRateDescription: "Not Satisfied",
                maximumRateDescription: "Completely satisfied"
              },
              {
                type: "rating",
                name: "recommend friends",
                visibleIf: "{satisfaction} > 3",
                title:
                  "How likely are you to recommend the Product to a friend or co-worker?",
                mininumRateDescription: "Will not recommend",
                maximumRateDescription: "I will recommend"
              },
              {
                type: "comment",
                name: "suggestions",
                title: "What would make you more satisfied with the Product?"
              },
              {
                type: "signaturepad",
                name: "sign",
                title: "Please enter your signature"
              }
            ]
          },
          {
            questions: [
              {
                type: "radiogroup",
                name: "price to competitors",
                title: "Compared to our competitors, do you feel the Product is",
                choices: [
                  "Less expensive",
                  "Priced about the same",
                  "More expensive",
                  "Not sure"
                ]
              },
              {
                type: "radiogroup",
                name: "price",
                title: "Do you feel our current price is merited by our product?",
                choices: [
                  "correct|Yes, the price is about right",
                  "low|No, the price is too low for your product",
                  "high|No, the price is too high for your product"
                ]
              },
              {
                type: "multipletext",
                name: "pricelimit",
                title: "What is the... ",
                items: [
                  {
                    name: "mostamount",
                    title: "Most amount you would every pay for a product like ours"
                  },
                  {
                    name: "leastamount",
                    title: "The least amount you would feel comfortable paying"
                  }
                ]
              }
            ]
          },
          {
            questions: [
              {
                type: "text",
                name: "email",
                title:
                  'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
              }
            ]
          }
        ]
      };
           return obj;
    }
}