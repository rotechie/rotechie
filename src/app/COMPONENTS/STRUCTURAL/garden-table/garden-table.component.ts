import { Component, OnInit } from "@angular/core";
import { Columns, Config, DefaultConfig } from "ngx-easy-table";
import { Vegetable, data } from "../../../DATA/garden-table-data";

@Component({
  selector: "app-garden-table",
  templateUrl: "./garden-table.component.html",
  styleUrls: ["./garden-table.component.scss"]
})
export class GardenTableComponent implements OnInit {
  public modal: boolean = false;
  public modalTitle: any;
  public modalImage: any;
  public modalBody: String;
  public modalBody2: String;
  public configurationAdvanced: Config;
  public columns: Columns[];
  public data: Vegetable[] = [];

  constructor() {
    // this.modal = false;
    this.columns = [
      { key: "family", title: "Family" },
      { key: "variety", title: "Variety" },
      { key: "sowindoors", title: "Sow Indoors" },
      { key: "sowoutdoors", title: "Sow Outdoors" },
      { key: "lastsow", title: "Last Sowing" },
      { key: "sunexposure", title: "Sun Exposure" },
      { key: "soilph", title: "Soil pH" },
      { key: "isActive", title: "STATUS" }
    ];
  }

  ngOnInit(): void {
    this.configurationAdvanced = { ...DefaultConfig };
    this.configurationAdvanced.orderEnabled = true;
    this.configurationAdvanced.searchEnabled = true;
    this.configurationAdvanced.threeWaySort = true;
    this.configurationAdvanced.rows = 4;
    this.data = data;
  }

  onEvent(event: { event: string; value: any }): void {
    let row = event.value.row;

    this.modalTitle = row.variety + " " + row.family;
    this.modalImage = row.imgUrl;
    this.modalBody = row.info;
    this.modalBody2 = row.info2;
  }

  openModal(): void {
    if ("this.modal === 'false'") {
      this.modal = true;
    } else {
      this.modal = false;
    }
  }

  hideModal(): void {
    this.modal = false;
  }
}
