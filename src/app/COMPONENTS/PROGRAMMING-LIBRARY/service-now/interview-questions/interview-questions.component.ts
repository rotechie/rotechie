import { Component, OnInit, Input } from "@angular/core";
import {
  ServiceNow,
  snowInterviewQuestions
} from "../../../../DATA/servicenow-interview-questions";

@Component({
  selector: "app-interview-questions",
  templateUrl: "./interview-questions.component.html",
  styleUrls: ["../../programming-library-main.scss"]
})
export class InterviewQuestionsComponent implements OnInit {
  @Input() category: string;
  public snowInterviewQuestions: ServiceNow[] = [];
  public sortedInterviewQuestionsAll: any = [];
  public sortedInterviewQuestionsScripting: any = [];
  public sortedInterviewQuestionsAdministration: any = [];
  public sortedInterviewQuestionsTraining: any = [];
  public questionCounter: number = 0;
  // public category: string = "";
  public ega_start_administrative_questions: any;
  public ega_start_scripting_questions: any;
  public ega_start_training_questions: any;
  public ega_start_all_questions: any;
  public ega_start_questions: any;

  ngOnInit(): void {
    this.snowInterviewQuestions = snowInterviewQuestions;

    this.ega_start_questions = () => {
      this.sortedInterviewQuestionsAll = [];
      this.sortedInterviewQuestionsScripting = [];
      this.sortedInterviewQuestionsAdministration = [];
      this.sortedInterviewQuestionsTraining = [];

      snowInterviewQuestions.forEach(element => {
        if (element.category[0]) {
          this.sortedInterviewQuestionsAll.push(element);
        }
        if (element.category[0] == "administration") {
          this.sortedInterviewQuestionsScripting.push(element);
        }
        if (element.category[0] == "scripting") {
          this.sortedInterviewQuestionsAdministration.push(element);
        }
        if (element.category[0] == "training") {
          this.sortedInterviewQuestionsTraining.push(element);
        }
      });
    };
    this.ega_start_questions();
    console.log(this.sortedInterviewQuestionsAll);
  }

  //   this.ega_start_administrative_questions = () => {
  //     this.sortedInterviewQuestions = [];
  //     snowInterviewQuestions.forEach(element => {
  //       if (element.category[0] == "all") {
  //         this.sortedInterviewQuestions.push(element);
  //       }
  //     });
  //   };
  //   this.ega_start_scripting_questions = () => {
  //     this.sortedInterviewQuestions = [];
  //     snowInterviewQuestions.forEach(element => {
  //       if (element.category[0] == "scripting") {
  //         this.sortedInterviewQuestions.push(element);
  //       }
  //     });
  //   };
  //   this.ega_start_all_questions = () => {
  //     this.sortedInterviewQuestions = [];
  //     snowInterviewQuestions.forEach(element => {
  //       if (element.category[0] == "administration") {
  //         this.sortedInterviewQuestions.push(element);
  //       }
  //     });
  //   };
  //   this.ega_start_all_questions = () => {
  //     this.sortedInterviewQuestions = [];
  //     snowInterviewQuestions.forEach(element => {
  //       if (element.category[0] == "training") {
  //         this.sortedInterviewQuestions.push(element);
  //       }
  //     });
  //   };
  // }
}
