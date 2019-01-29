import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { AlertService, AuthenticationService } from '../_services';
import { QuestionnaireService } from '../_services/questionnaire.service';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    
    currentUser: User;
    users: User[] = [];
    json: any = {};
    constructor(private userService: UserService,
                private questionnaireService: QuestionnaireService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
     
       
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadQuestions();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }
    loadQuestions(): any {
        debugger;
        this.json = this.questionnaireService.getQuestionnaire(1);
    }
    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            debugger;
            this.users = users; 
        });
    }
}