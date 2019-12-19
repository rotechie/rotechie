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
    imgUrl: "../assets/images/vegetables/redleaflettuce.jpg",
    info:
      "Lettuce is cool-season crop that grows well in the spring and fall in most regions. Lettuce seedlings will even tolerate a light frost. Sow any time soils are above 40°F. Seeds germinate best at 55 to 65°F and will emerge in only 7 to 10 days. Seeds should be planted ¼-½ inch deep and thinned when plants have 3 to 4 true leaves. Partial shade is important in the summer to prevent lettuce from bolting. Consider sowing underneath plants such as tomatoes or corn to make use of their shade.",
    info2:
      "Fertilize 3 weeks after transplanting or when leaves are about 3 to 4 inches tall. Lettuce prefers soil that is high in organic material, with plenty of compost and a steady supply of nitrogen to keep if growing fast. Use a slow-release fertilizer.",
    family: "Lettuce",
    variety: "Red Leaf",
    sowindoors: "Mid January",
    sowoutdoors: "Late February",
    lastsow: "Early October",
    sunexposure: "Partial Sun",
    soilph: "6-7",
    isActive: false
  },
  {
    imgUrl: "../assets/images/vegetables/cherokeepurpletomato.jpg",
    info:
      "Cherokee Purple tomato plants are indeterminate, which means the plants will continue to grow and produce tomatoes until the first frost in autumn. Like most tomatoes, Cherokee Purple tomatoes grow in nearly any climate that provides plenty of sunlight and three to four months of warm, dry weather. Soil should be rich and well drained.",
    info2:
      "Dig in a generous amount of compost or well-rotted manure before planting. Planting is also the time to use a slow-release fertilizer. Thereafter, feed the plants once every month throughout the growing season. Allow 18 to 36 inches (45-90 cm.) between each tomato plant. If necessary, protect young Cherokee Purple tomato plants with a frost blanket when nights are chilly. You should also stake the tomato plants or provide some type of sturdy support. Water the tomato plants whenever the top 1 to 2 inches (2.5-5 cm.) of soil feels dry to the touch. Never allow the soil to become either too soggy or too dry. Uneven moisture levels can cause cracked fruit or blossom end rot. A thin layer of mulch will help keep the soil evenly moist and cool.",
    family: "Tomato",
    variety: "Cherokee Purple",
    sowindoors: "Late January",
    sowoutdoors: "Early March",
    lastsow: "Early August",
    sunexposure: "Full Sun",
    soilph: "6.2-6.8",
    isActive: false
  },
  {
    imgUrl: "../assets/images/vegetables/lacinatokale.jpg",
    info:
      "A cold-hardy vegetable, kale leaves sweeten after frost. In northern regions, leave a few plants in the garden to harvest after the snow flies. Space 12 to 24 inches apart, depending on type. Keep soil consistently moist throughout the growing season. Aim for 1 to 1.5 inches of water per week through rainfall or irrigation.",
    info2:
      "Watch for outbreaks of gray-green cabbage aphids, which often gather in clusters within the folds of frilly kale leaves. Treat small problems with insecticidal soap. Pick off and discard badly infested leaves.",
    family: "Kale",
    variety: "Lacinato",
    sowindoors: "Late September",
    sowoutdoors: "Late August",
    lastsow: "Late October",
    sunexposure: "	Full Sun to Partial Shade",
    soilph: "5.5-6.8",
    isActive: true
  },
  {
    imgUrl: "../assets/images/vegetables/sungoldtomatoes.jpg",
    info:
      "'Sungold' has an exceptionally high sugar content, making its attractive, golden-orange fruit irresistibly sweet and juicy. Large yields deliver loads of delicious fruit (each about 1/2 oz.) that are ideal for salads or a tasty snack. When fully ripe it has a tendency to crack which can make it a bit messy to handle, but it doesn't affect its outstanding flavor.",
    info2:
      "Sungold tomatoes are indeterminate, which means the plants will continue to grow and produce tomatoes until the first frost in autumn. Plant seeds 1/4 inch deep. For plants, plant them deeper than in the pot. Plant them just below the first set of leaves. Prune by cutting out suckers (auxillary shoots between the stems and the leaves) to produce larger fruit. Fruit also ripens earlier since the sun can reach it more easily.",
    family: "Tomato",
    variety: "Sun Gold",
    sowindoors: "Late January",
    sowoutdoors: "Early March",
    lastsow: "Early August",
    sunexposure: "Full Sun",
    soilph: "5.5-6.8",
    isActive: false
  },
  {
    imgUrl: "../assets/images/vegetables/favabean.jpg",
    info:
      "Fava bean, actually a vetch, is an erect, leafy, winter or spring annual legume, growing from 2 to 6 feet tall. One or more thick, unbranchedstems grow from the base of the plant.The fava bean plant produces 6- to 8-inch seed pods that contain four to six flat seeds. The flattened appearance of the seeds gave the beans their other common name: broad beans.",
    info2:
      "Best stand establishment is obtained by planting 1 to 3 inches deep (to moisture) into a firm, wellprepared seedbed, using a drill set to 30-inch rows or a common corn planter. The distance between plants in the row should be approximately 6 inches",
    family: "Legume",
    variety: "Fava Bean",
    sowindoors: "Early September",
    sowoutdoors: "Early September",
    lastsow: "Early November",
    sunexposure: "Full Sun",
    soilph: "4.5-8.3",
    isActive: false
  }
];
