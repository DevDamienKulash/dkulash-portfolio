import geowatch from "../assets/geowatch.jpg"; 
import financeImg from "../assets/finance.jpg";
import weatherdeskImg from "../assets/weatherdesk.jpg";
import ZombieIMG from "../assets/Zombie.jpg";


export const projects = [
  {
    title: "GeoWatch",
    blurb:
      "Real-time earthquake monitoring web app built with React, TypeScript, and Mapbox GL JS. Clusters events and color-codes by severity for quick risk awareness.",
    tags: ["React", "TypeScript", "Mapbox GL", "API"],
    img: geowatch,  
    demo: "https://geowatch.netlify.app/",
    repo: "https://github.com/DevDamienKulash/geowatch",
  },
  {
    title: "Personal Finance Tracker",
    blurb:
      "Minimalist, responsive tracker to record income/expenses, filter by month/type/category, and visualize spending totals.",
    tags: ["React", "JavaScript", "Tailwind", "LocalStorage"],
    img: financeImg,
    demo: "https://finance-tracker-azure-ten.vercel.app/",
    repo: "https://github.com/DevDamienKulash/Finance-Tracker",
  },
  {
    title: "WeatherDesk",
    blurb:
      "Borderless Windows weather widget built with WPF (.NET 8). Auto-detects location and displays a clean 7-day forecast with monochrome icons.",
    tags: ["C#", "WPF", ".NET 8", "API"],
    img: weatherdeskImg,
    demo: "#",
    repo: "https://github.com/DevDamienKulash/WeatherDesk",
  },
  { title: "Zombie Survival Game",
    blurb:
      "A fast-paced, top-down zombie shooter built in Unity 6 for WebGL. This project showcases my skills in C# gameplay programming, AI navigation, object pooling, and UI/UX design.",
    tags: ["C#", "Unity6", "Cinemachine", "Itch.io"],
    img: ZombieIMG,
    demo: "https://devdamienkulash.itch.io/web-zombie-game",
    repo: "https://github.com/DevDamienKulash/zombie-topdown-webgl", },
  { title: "Coming Soon", placeholder: true },
  { title: "Coming Soon", placeholder: true },
];
