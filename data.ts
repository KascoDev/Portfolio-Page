import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js & Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks like <b>Node.js</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "HTML and CSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React and Next Js",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "SQL and NoSQL",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap and Tailwind CSS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "D3 js, Chart js and Tableau",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "CLI",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "GIT/GITHUB",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Jupiter Lab",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Vs Code",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Vercel",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Contentful",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Sanity",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Heroku",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "50",
  },
];

export const projects: IProject[] = [
  {
    name: "Food website",
    description: "This app contains a collection of delicious food",
    image_path: "/images/food.jpg",
    deployed_url: "https://food-for-the-soul.vercel.app/",
    github_url: "https://github.com/KascoDev/FOOD-FOR-THE-SOUL",
    category: ["react & next"],
    key_techs: ["Next.js", "Contentful", "CMS"],
  },
  {
    name: "Sales Rep. Performance Monitor",
    image_path: "/images/Sales-Rep-Monitor.jpg",
    deployed_url:
      "https://public.tableau.com/app/profile/dimowo.okasime/viz/SalesRep_PerformanceMonitor/Dashboard1",
    github_url: "",
    category: ["tableau", "data viz"],
    description:
      "This DataViz. consist of a Dashboard and different types of charts including a bar chart, bubble chart, a scatter plot and more. This is a Descriptive Sales Rep. Performance Monitor Dashboard. Part 9 of this tutorial covers how to create a dashboard in Tableau; specifically, we look at how to add visuals (tiled and floating), how to add images & text/titles, and finally how to format & adjust the layout. ",
    key_techs: ["Tableau", "Data Analysis", "Data Visualization"],
  },

  {
    name: "Sales Analysis",
    image_path: "/images/Sales Analysis.jpg",
    deployed_url:
      "https://public.tableau.com/app/profile/dimowo.okasime/viz/SalesCustomerAnalysis_16506516411430/Dashboard1",
    github_url: "",
    category: ["tableau", "data viz"],
    description:
      "This DataViz. consist of a Dashboard and different types of charts including a butterfly chart, a donut chart, a scatter plot and more. This is a Descriptive Sales Analysis Dashboard.",
    key_techs: ["Tableau", "Data Analysis", "Data Visualization"],
  },

  {
    name: "Admin Dashboard",
    image_path: "/images/admin-dashboard.jpg",
    deployed_url: "https://kascodev.github.io/ChartJs-Admin-Dashboard/",
    github_url: "https://github.com/KascoDev/ChartJs-Admin-Dashboard",
    category: ["data viz"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["Javascript", "Chart.js", "Data Analysis", "HTML/CSS"],
  },

  {
    name: "tinDog",
    image_path: "/images/tinDog.jpg",
    deployed_url: "https://kascodev.github.io/TindDog/",
    github_url: "https://github.com/KascoDev/TindDog",
    category: [],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["HTML", "CSS", "Bootstrap 5"],
  },

  {
    name: "SpaceX Capstone Project",
    image_path: "/images/SpaceX-Capstone-Project.jpg",
    deployed_url:
      "https://docs.google.com/presentation/d/1tRVbKWMxo-oVC2TqTxdwvTw_njxoNk80/edit?usp=sharing&ouid=115711840025056245722&rtpof=true&sd=true",
    github_url:
      "https://github.com/KascoDev/IBM-DataScience-SpaceX-Capstone-Project",
    category: ["python"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: [
      "Python",
      "SQL",
      "Pandas",
      "Matplotlib",
      "Folium",
      "ML",
      "Data Analysis",
    ],
  },
  {
    name: "Machine-Learning-Project1 ",
    image_path: "/images/machine-learning-project1.jpg",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/KascoDev/Machine_Learning_Modeling",
    category: ["python"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: ["Python", "Pandas", "ML"],
  },
];
