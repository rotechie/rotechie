import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-leisure-programming",
  templateUrl: "./leisure-programming.component.html",
  styleUrls: ["./leisure-programming.component.scss"]
})
export class LeisureProgrammingComponent implements OnInit {
  programmingValue: string = "";
  programmingLanguage: string = "";
  typeOfInterview: string = "";
  constructor() {}

  ngOnInit() {}
}
