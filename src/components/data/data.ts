// This file contains the data for the projects and navbarbar items.
import { TypeMyData, TypeNavbar } from "./Models";
import Youtube from "../assets/shoppingcard.png";
import MovieApp from "../assets/reduxfilmler.png"
import Portfolio from "../assets/pizza.png"
import Twitter from "../assets/porfolio.png"
import Spotify from "../assets/Spotify.png"

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
 
  {
    id: 5,
    title: "React - Redux Uyg.",
    img_url: `${Spotify}`,
    link: "https://react-redux-tailwind.vercel.app/",
    gitHub: "https://github.com/msamet07/ReactReduxTailwind",
  },
//   {
//     id: 6,
//     title: "JS - Gmail Clone",
//     img_url: `${Gmail}`,
//     link: "https://g",
//     gitHub: "https://githu",
//   },

//   {
//     id: 7,
//     title: "JS - Recipe APP",
//     img_url: `${Recipe}`,
//     link: "https://lu",
//     gitHub: "https://git",
//   },
//   {
//     id: 8,
//     title: "JS | Map APP",
//     img_url: `${MapApp}`,
//     link: "https://ama",
//     gitHub: "https://",
//   },

//   {
//     id: 9,
//     title: "React | NasaSpace APP",
//     img_url: `${NasaSpace}`,
//     link: "https://,
//     gitHub: "",
//   },
//   {
//     id: 10,
//     title: "React | Recibe APP",
//     img_url: `${RecibeApp}`,
//     link: "http",
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
