import { Component, OnInit } from "@angular/core";
import { Columns, Config, DefaultConfig } from "ngx-easy-table";
import { Vegetable, data } from "../../../DATA/garden-table-data";
@Component({
  selector: "app-garden-table",
  templateUrl: "./garden-table.component.html",
  styleUrls: ["./garden-table.component.scss"]
})
export class GardenTableComponent implements OnInit {
  public configurationAdvanced: Config;
  public columns: Columns[];
  public data: Vegetable[] = [];

  ngOnInit(): void {
    this.columns = [
      { key: "family", title: "Family" },
      { key: "variety", title: "Variety" },
      { key: "sowdate", title: "Sowing Schedule" },
      { key: "lastsowdate", title: "Last Sow Date" },
      { key: "isActive", title: "Planted" }
    ];

    this.configurationAdvanced = { ...DefaultConfig };
    this.configurationAdvanced.orderEnabled = true;
    this.configurationAdvanced.searchEnabled = true;
    this.configurationAdvanced.threeWaySort = true;
    this.configurationAdvanced.rows = 4;
    this.data = data;
  }
}