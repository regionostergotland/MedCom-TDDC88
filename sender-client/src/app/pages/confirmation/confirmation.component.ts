/**
 * Confirmation Component
 * @version 1.0
 * @author Alexander Anserud <alean378@student.liu.se>
 */

/* Imports */
import { Component, OnInit } from "@angular/core";
import { CaseDataService } from "app/shared/case-data.service";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {
  pageHeader: String;

  constructor(public dataService: CaseDataService) {}

  /**
   * The text attributes for the card
   */
  private formTitle: String;
  private formDescription: String;
  private importantContent: String;
  private content: String;

  clearData() {
    this.dataService.clearUserData();
  }

  ngOnInit() {
    this.pageHeader = "Ärendebekräftelse";
    this.formTitle = "Ditt ärende har skickats!";
    this.formDescription =
      "Brännskadejouren har nu tagit emot ditt ärende. Om du vill lägga till information till ärendet, klicka på “Komplettera ärende”.";
    this.importantContent = "Kom ihåg att spara ditt ärendenummer!";
    this.content = "Det behövs för att kunna se ditt ärende senare.";
  }
}
