import { Injectable } from '@angular/core';
import { CaseDataService } from './case-data.service';
import { CaseNrService} from './case-nr.service';
import { Case } from '../models/case';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  /** The case data*/
  private case: Case;
  /** The case number*/
  caseNr: string;
  /** The upload path for the case*/
  uploadPath: string;
  uploadFolder: string;
  /** The YAML-file to store case data and to be uploaded to FileCLoud*/
  ymlFile: File;
  /** Another YAML-file to store case data and to be uploaded to FileCLoud(specific formatting)*/
  ymlPatientForm: File;

  /**
   * Creates a instance of UploadService
   * and sets case to another case retrieved from CaseDataService.
   */
  constructor(public dataService: CaseDataService, private caseNrService: CaseNrService, private httpService: HttpService) {
    this.case = this.dataService.getCase();
  }

  /**
   * Fetches data from case and generates a YAML-file containing the data. Then the YAML-file
   * together with the added images gets uploaded to FileCloud.
   *
   * @returns Nothing is returned.
   */
  async startUpload(token) {
    this.caseNr = this.caseNrService.getCaseNr(this.case.user.phone);
    this.dataService.getCase().caseNr = this.caseNr;
    this.uploadFolder = this.caseNr;

    this.generateYML();

    //TODO: Make sure that userLogin() is succesfull before the other once are done.
    console.log("Starting login with token: ", token)
    const result = await this.httpService.userLogin(token);
    console.log("RESULTS FROM LOGIN: ", result)
    const result1 = await this.httpService.createFolder(this.uploadPath, token);
    console.log("Result from createFolder:" , result)

    this.httpService.postFile(this.ymlFile, this.uploadFolder, token);
    //for (var image of this.case.images) {
    //  this.httpService.postFile(image.file, this.uploadPath);
    //}
  }

  //TODO or remove?
  realUpload() {

  }

  /**
   * Generates a YAML-file containing the data that is stored to the case object.
   *
   * @returns Nothing is returned.
   */
  generateYML() {
    var content = "Case number: " + this.caseNr + "\r\n"
      + "Name: " + this.case.user.name + "\r\n"
      + "Email: " + this.case.user.email + "\r\n"
      + "Phone: " + this.case.user.phone + "\r\n";
    this.ymlFile = new File([content], this.caseNr + ".yml");
  }

  /**
   * Generates a YAML-file containing the data that is stored to the case object and formatted in a specific way.
   *
   * @returns Nothing is returned.
   */

  generatePatientFormYML() {
    var content = "Patientinformation för ärende: " + this.caseNr + "\r\n"
      + "Namn: " + this.case.patientInfo[0] + "\r\n"
      + "Personnummer: " + this.case.patientInfo[1] + "\r\n"
      + "Kommentarer: " + "\r\n" + this.case.patientInfo[2] + "\r\n"  + "\r\n";

    for(let i=0; i<this.dataService.getCase().patientForm.length; i++){
      var yesNoString = "Svar: Nej";
      if(this.dataService.getCase().patientForm[i].value) {
        var yesNoString = "Svar: Ja";
      }
      var str2: string = i+1 + ". " + this.dataService.getCase().patientForm[i].question + "\r\n" + yesNoString + "\r\n" + "\r\n";
      var content = content.concat(str2);
    }
    this.ymlPatientForm = new File([content], "patientformulär-" + this.dataService.getCase().caseNr + ".yml");
    console.log(this.ymlPatientForm);

    this.httpService.userLogin("nothing");
    //this.httpService.postFile(this.ymlPatientForm, this.dataService.getCase().caseNr);
  }

}
