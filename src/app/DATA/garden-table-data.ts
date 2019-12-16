import { Columns } from "ngx-easy-table";

export interface Vegetable {
  family: string;
  variety: string;
  isActive: boolean;
  firstsowdate?: string;
  lastsowdate?: string;
  sowlocation?: string;
  imgUrl?: string;
}

export const columns: Columns[] = [
  { key: "family", title: "Family" },
  { key: "variety", title: "Variety" },
  { key: "firstsowdate", title: "First Sow Date" },
  { key: "lastsowdate", title: "Last Sow Date" },
  { key: "environment", title: "Environment" },
  { key: "isActive", title: "Planted" }
  // { key: "imgUrl", title: "Image" }
];

export const data = [
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Lettuce",
    variety: "Cherokee Purple",
    firstsowdate: "February",
    lastsowdate: "December",
    environment: "Sow undercover",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Eggplant",
    variety: "Sungold",
    firstsowdate: "March",
    lastsowdate: "May",
    environment: "Sow indoors",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Kale",
    variety: "Cherokee Purple",
    firstsowdate: "March",
    lastsowdate: "August",
    environment: "Sow outdoors",
    isActive: false
  },

  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Onion",
    variety: "Cherokee Purple",
    firstsowdate: "March",
    lastsowdate: "May",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Garlic",
    variety: "Cherokee Purple",
    firstsowdate: "September",
    lastsowdate: "June",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Leeks",
    variety: "Cherokee Purple",
    firstsowdate: "March",
    lastsowdate: "July",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Broccoli",
    variety: "Cherokee Purple",
    firstsowdate: "April",
    lastsowdate: "August",
    isActive: false
  }
];
