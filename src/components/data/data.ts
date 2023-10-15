// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import Youtube from "../assets/shoppingcard.png";
import MovieApp from "../assets/reduxfilmler.png"
import Portfolio from "../assets/pizza.png"
import Twitter from "../assets/porfolio.png"

export const data: TypeMyData[] = [
  {
    id: 1,
    title: "TS - MyPortfolio",
    img_url: `${Twitter}`,
    link: "https://myportfolioo-seven.vercel.app/",
    gitHub: "https://github.com/msamet07/myportfolioo",
  },
  {
    id: 2,
    title: "React Pizza",
    img_url: `${Portfolio}`,
    link: "https://effervescent-beijinho-073b66.netlify.app/",
    gitHub: "https://github.com/msamet07/s7pizza",
  },
  {
    id: 3,
    title: "Redux Favori Filmler",
    img_url: `${MovieApp}`,
    link: "https://meek-cactus-586a90.netlify.app/movies",
    gitHub: "https://github.com/msamet07/filmler",
  },
  {
    id: 4,
    title: "React - ShoppingCard",
    img_url: `${Youtube}`,
    link: "https://shopping-card-ym6x.vercel.app/",
    gitHub: "https://github.com/msamet07/shopping-card",
  },
 
//   {
//     id: 5,
//     title: "React - Spotify Clone",
//     img_url: `${Spotify}`,
//     link: "https://funny-biscochitos-75c85c.netlify.app/",
//     gitHub: "https://github.com/hilaldeniz1/spotify-clone",
//   },
//   {
//     id: 6,
//     title: "JS - Gmail Clone",
//     img_url: `${Gmail}`,
//     link: "https://gmail-clonnee.netlify.app/",
//     gitHub: "https://github.com/hilaldeniz1/gmail-clone",
//   },

//   {
//     id: 7,
//     title: "JS - Recipe APP",
//     img_url: `${Recipe}`,
//     link: "https://luminous-longma-3a91ac.netlify.app/",
//     gitHub: "https://github.com/hilaldeniz1/food-app",
//   },
//   {
//     id: 8,
//     title: "JS | Map APP",
//     img_url: `${MapApp}`,
//     link: "https://amazing-daifuku-7da670.netlify.app//",
//     gitHub: "https://github.com/hilaldeniz1/radar-toolkit",
//   },

//   {
//     id: 9,
//     title: "React | NasaSpace APP",
//     img_url: `${NasaSpace}`,
//     link: "https://reactjs-nasa-app.netlify.app",
//     gitHub: "",
//   },
//   {
//     id: 10,
//     title: "React | Recibe APP",
//     img_url: `${RecibeApp}`,
//     link: "https://reactjs-recibe-app.netlify.app",
//     gitHub: "",
//   },
];

export const listNavBar: TypeNavbar[] = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];
