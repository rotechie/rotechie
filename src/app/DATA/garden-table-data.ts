import { Columns } from "ngx-easy-table";

export interface Vegetable {
  family: string;
  variety: string;
  isActive: boolean;
  sowdate?: string;
  lastsowdate?: string;
  imgUrl?: string;
}

export const columns: Columns[] = [
  { key: "family", title: "Family" },
  { key: "variety", title: "Variety" },
  { key: "sowdate", title: "Sow in" },
  { key: "lastsowdate", title: "Last month to sow" },
  { key: "isActive", title: "Active" }
];

export const data = [
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Tomato",
    variety: "Cherokee Purple",
    sowdate: "March",
    lastsowdate: "May",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Eggplant",
    variety: "Sungold",
    sowdate: "March",
    lastsowdate: "May",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Kale",
    variety: "Cherokee Purple",
    sowdate: "March",
    lastsowdate: "August",
    isActive: false
  },

  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Onion",
    variety: "Cherokee Purple",
    sowdate: "March",
    lastsowdate: "May",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Garlic",
    variety: "Cherokee Purple",
    sowdate: "September",
    lastsowdate: "June",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Leeks",
    variety: "Cherokee Purple",
    sowdate: "March",
    lastsowdate: "July",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Broccoli",
    variety: "Cherokee Purple",
    sowdate: "April",
    lastsowdate: "August",
    isActive: false
  }
];
