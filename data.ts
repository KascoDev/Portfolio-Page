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
    image_path: "/images/Food.JPG",
    deployed_url: "https://food-for-the-soul.vercel.app/",
    github_url: "https://github.com/KascoDev/FOOD-FOR-THE-SOUL",
    category: ["react & next"],
    key_techs: ["Next.js", "Contentful", "CMS"],
  },
  {
    name: "Sales Rep. Performance Monitor",
    image_path: "/images/Sales-Rep-Monitor.JPG",
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
    image_path: "/images/Sales Analysis.JPG",
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
    image_path: "/images/Admin-dashboard.JPG",
    deployed_url: "https://kascodev.github.io/ChartJs-Admin-Dashboard/",
    github_url: "https://github.com/KascoDev/ChartJs-Admin-Dashboard",
    category: ["data viz"],
    description:
      "The admin dashboard was build using HTML, CSS, Javascript and Chart.js. The project enabel the admin to have a bird's eye view of his/her business",
    key_techs: ["Javascript", "Chart.js", "Data Analysis", "HTML/CSS"],
  },

  {
    name: "tinDog",
    image_path: "/images/tinDog.JPG",
    deployed_url: "https://kascodev.github.io/TindDog/",
    github_url: "https://github.com/KascoDev/TindDog",
    category: [],
    description:
      "This is like a tinder for dogs. It was created using HTML, CSS and Bootstarp 5",
    key_techs: ["HTML", "CSS", "Bootstrap 5"],
  },

  {
    name: "SpaceX Capstone Project",
    image_path: "/images/SpaceX-Capstone-Project.JPG",
    deployed_url:
      "https://docs.google.com/presentation/d/1tRVbKWMxo-oVC2TqTxdwvTw_njxoNk80/edit?usp=sharing&ouid=115711840025056245722&rtpof=true&sd=true",
    github_url:
      "https://github.com/KascoDev/IBM-DataScience-SpaceX-Capstone-Project",
    category: ["python"],
    description:
      "This is IBM Data Science Course capstone project, In which I assume the role of a Data Scientist working for a new Space rocket company called SpaceY and would like to compete with SpaceX founded by Allon Musk. My job is to determine the cost of each launch and to predict if a launch programm will be successful or not. I have to do this by gathering information about Space X and creating an interactive dashboards for my team. I also determine if SpaceX will reuse it's booster rockets after each launch. I will use Data analysis and Data Science methodologies as well as training a machine learning model using publicly available information to predict if SpaceX will reuse the first stage rocket booster.",
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
    image_path: "/images/machine-learning-project1.JPG",
    deployed_url: "",
    github_url: "https://github.com/KascoDev/Machine_Learning_Modeling",
    category: ["python"],
    description:
      "In this notebook I try to analyze classification algorithms in machine learning.  I load the dataset using python Pandas library package, and apply the necessary algorithms to find the optimal classification algorithm for the dataset I used. ",
    key_techs: ["Python", "Pandas", "ML"],
  },
];
