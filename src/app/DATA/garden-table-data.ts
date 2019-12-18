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
  { key: "sowindoors", title: "Sow Indoors" },
  { key: "sowoutdoors", title: "Sow Outdoors" },
  { key: "lastsow", title: "Last Sowing" },
  { key: "sunexposure", title: "Sun Exposure" },
  { key: "soilph", title: "Soil pH" },
  { key: "isActive", title: "Planted" }
  // { key: "imgUrl", title: "Image" }
];

export const data = [
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Lettuce",
    variety: "Red Leaf",
    sowindoors: "Mid January",
    sowoutdoors: "Late February",
    lastsow: "Early October",
    sunexposure: "Partly Sunny",
    soilph: "6-7",
    isActive: false
  },
  {
    imgUrl: "https://i.imgur.com/GLqxxnn.png",
    family: "Lettuce",
    variety: "Red Leaf",
    sowindoors: "Mid January",
    sowoutdoors: "Late February",
    lastsow: "Early October",
    sunexposure: "Partly Sunny",
    soilph: "6-7",
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
