import { Component, OnInit } from "@angular/core";
import { spawn } from "child_process";

@Component({
  selector: "app-leisure-programming",
  templateUrl: "./leisure-programming.component.html",
  styleUrls: ["./leisure-programming.component.scss"]
})
export class LeisureProgrammingComponent implements OnInit {
  programmingValue: string = "";
  codeblock1: string =
    "export class LeisureProgrammingComponent implements OnInit { <div> {{dick}} </div> }";
  constructor() {}

  ngOnInit() {}
}
