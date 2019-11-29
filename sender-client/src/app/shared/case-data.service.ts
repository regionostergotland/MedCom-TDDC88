/**
 * Service for storing local data 
 * @author Philip Kantola <phika529@student.liu.se>
 */

import { Injectable } from '@angular/core';
import { Case } from '../models/case';

/**
 * Service for storing and sharing 
 * case data between components
 */
@Injectable({
  providedIn: 'root'
})

export class CaseDataService {

  /** The case data*/
  caseData: Case;

  /**
   * Creates a instance of CaseDataService
   * and sets caseData to new Case
   */
  constructor() {
        this.caseData = new Case();    
  }

  /**
  * Gets the current data for the case
  * @returns The case data
  */
  getCase() {
    return this.caseData;
  }
 
  /**
 * Method that will be used to clear images.
 */

  private removeImages: () => void;

  /**
 * method for fetching and setting the clear images method from card-image
 * to removeImages
 */

getMethod(fn: () => void) {

  this.removeImages = fn;

}


  /**
   * Overwrites the data the user has specified
   * in front and summary page 
   */
  clearUserData(){
    this.caseData.user.name = "";
    this.caseData.user.email = "";
    this.caseData.user.phone = "";
    this.removeImages();
    

    
  }

}


