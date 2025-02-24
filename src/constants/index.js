import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  nLight,
  run,
  opensource,
  download,

  empower,
  decision,
  //inter,

  discordBlack,
  facebook,
  instagram,
  telegram,
  twitter,

  // heroIcons
  file02,
  plusSquare,
  homeSmile,
  searchMd,

  notification1,
  notification2,
  notification3,
  notification4,

  // Company logos
  aws,
  google,
  openstack,

  cloudapps,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "features",
    url: "#features",
  },
  {
    id: "3",
    title: "Releases",
    url: "https://github.com/Ardhi-OWM/landing-page/releases/",
  },
  {
    id: "4",
    title: "Blogs",
    url: "#blogs",
  },
  {
    id: "5",
    title: "Sign in",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Ardhi App",
    url: "#login",
    onlyMobile: true,
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [aws, google, openstack];



export const collabText =
  "Fetch geodata directly from Geosdata URLs or connect scripts running on your cloud platform.";
export const collabText2 =
  "From cloud workflows to boardroom decisions, Ardhi bridges the gap - Visualize, Share, and Decide with Geodata Made Simple.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Import Data",
    text: collabText,
  },
  {
    id: "1",
    title: "Data Flexibility",
  },
  {
    id: "2",
    title: "Accessibility and Ease of Use",
  },
  {
    id: "3",
    title: "Auto-Visualize",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "AWSs",
    icon: aws,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Google",
    icon: google,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Cloud Apps",
    icon: cloudapps,
    width: 34,
    height: 35,
  },
  {
    id: "3",
    title: "Openstack",
    icon: openstack,
    width: 36,
    height: 28,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Instant Visualization, Zero Effort",
    text: "Automatically convert URLs, cloud scripts, and geodata into interactive maps. No coding required—Ardhi handles the heavy lifting.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: run,
    imageUrl: nLight,
  },
  {
    id: "1",
    title: "Convert & Download GeoData into Multiple Formats",
    text: "Transform one data format into another e.g. GeoJson, GeoTIFF, CSV etc, and download it using our Ardhi Converter.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: download,
    imageUrl: nLight,
    light: true,
  },
  {
    id: "2",
    title: "Empower Stakeholders, Not Just Developers",
    text: "Share maps via a simple link. Let teams explore layers, filter data, and export insights—no GIS expertise or coding needed. ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: empower,
    imageUrl: nLight,
  },
  {
    id: "3",
    title: "Open Source and Customizable",
    text: "Access and modify the source code to tailor the software to your specific needs. Contribute to the community and enhance the platform. ",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: opensource,
    imageUrl: nLight,
    light: true,
  },
  {
    id: "4",
    title: "Smarter Decisions, Faster",
    text: "Turn complex spatial data into clear visual stories. Accelerate feedback loops and align teams on actionable outcomes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: decision,
    imageUrl: nLight,
    light: true,
  },
];

export const socials = [
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: instagram,
    url: 'https://www.linkedin.com/company/ardhi-analytics/',
  },
 /*  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: 'https://ardhi.de/',
  },
 {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: 'https://ardhi.de/',
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: 'https://ardhi.de/',
  }, */ 
];
