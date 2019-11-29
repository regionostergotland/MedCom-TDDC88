/**
 * Card Form
 * Card layout for a form
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from '@angular/core';

import { CaseDataService } from '../../../shared/case-data.service';
import { User } from '../../../models/user';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})





/* Component Class Holder */
export class CardTableComponent implements OnInit {

    user: User;
    checkboxes: Array<{question: string, storedValue: boolean, value: boolean, complementary?: string, complementaryFormData?: string[]}> = [];
    private card_content = `                    <div class="col-md-12 px-1">
                        
                        <div class="form-group editable card-table">
                            <label>Namn</label>
                            <p [hidden]="saveButton1">{{user.name}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Ditt namn" [(ngModel)]="user.name" value="{{user.name}}">
                            <label>Email</label>
                            <p [hidden]="saveButton1">{{user.email}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Email" [(ngModel)]="user.email" value="{{user.email}}">
                            <label>Telefon</label>
                            <p [hidden]="saveButton1">{{user.phone}}</p>
                            <input [hidden]="!saveButton1" type="text" class="form-control" placeholder="Telefon" [(ngModel)]="user.phone" value="{{user.phone}}">
                         
                        </div>

                    </div>`;

    saveButton1=false;
    patientInfo: string[] = [];
    date =  new FormControl(new Date());
    constructor(public dataService: CaseDataService) {

    this.user = this.dataService.getCase().user;

    this.checkboxes = this.dataService.getCase().patientForm;
    this.patientInfo = this.dataService.getCase().patientInfo;
    
    this.date = this.dataService.getCase().dateofArrival;

    }

    userForm: FormGroup;
    ngOnInit() {
        this.userForm = new FormGroup({
            'patientComments': new FormControl(this.patientInfo[0]),
            'hourArrival': new FormControl(this.patientInfo[1]),
            'minArrival': new FormControl(this.patientInfo[2])
        });
    }

    setCheckboxes(checkboxId: number, setBoolean: boolean, event: any) {
        this.checkboxes[checkboxId].value = setBoolean;
        this.checkboxes[checkboxId].storedValue = false;
        this.dataService.getCase().patientForm = this.checkboxes;
        if (event.target.checked) {
            this.checkboxes[checkboxId].storedValue = true;
        }
    }

    checkBoxFormsChanged(i: number, event: any, indexOfcomplementaryFormData: number) {

        console.log(i + " -- " + indexOfcomplementaryFormData + " -- " + event.target.value);
        this.checkboxes[i].complementaryFormData[indexOfcomplementaryFormData] = event.target.value;
        this.dataService.getCase().patientForm = this.checkboxes;
      }


      textFormChanged() {
        this.dataService.getCase().patientInfo[0] = this.userForm.get('patientComments').value;
        this.dataService.getCase().patientInfo[1] = this.userForm.get('hourArrival').value;
        this.dataService.getCase().patientInfo[2] = this.userForm.get('minArrival').value;
      }

      dateChange(event: any){
        this.date = event.target.value;
        this.dataService.getCase().dateofArrival = event.target.value;
      }

}




