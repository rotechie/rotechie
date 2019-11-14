import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "rotechie";
  name: string;
  constructor() {
    this.name = "Enea";
  }
}
