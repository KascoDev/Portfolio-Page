import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaChartBar } from "react-icons/fa";
import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineConsoleSql,
} from "react-icons/ai";
import { FcComboChart } from "react-icons/fc";
import { SiPython } from "react-icons/si";
import { BsBarChartFill } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: SiPython,
    title: "Data Analytics Using python and R",
    about:
      "Preparing, processing, analyzing, and sharing data for thoughtful action using <b>R and RStudio</b>, <b>Tidyvarse & ggplot2</b>, <b>R-Markdown</b>, <b>Pandas</b>, <b>Numpy</b>, <b>Matplotlib & Seaborn</b>, <b>Streamlit</b>, libraries",
  },
  {
    Icon: FaChartBar,
    title: "Data Visualization",
    about:
      "Competent in <b>Tableau</b>, <b>Power BI</b>, <b>Chart.js</b>, <b>NivoChart.js</b>, <b>ggplot2</b>, <b>Matplotlib & Seaborn</b>. I can design various data visualizations, such as visual dashboards and charts which help bring data to life",
  },
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Building a Beautiful and scalable SPA using <b>HTML</b>, <b>CSS( Tailwind CSS & Bootstrap 5)</b> and <b>React.js & Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handling databases, server, <b>REST API</b> using <b>Express </b> & other popular frameworks like <b>Node.js</b>",
  },
  {
    Icon: BiBookContent,
    title: "Content Management System (CMS)",
    about:
      "Managing CMS's such as <b>Contentful</b>, <b>Strapi</b> and <b>Sanity</b>",
  },
  {
    Icon: AiOutlineConsoleSql,
    title: "SQL & NoSQL",
    about:
      "Querying <b>SQL</b> data which can then be used for further Analysis, profitient in <b>mongoDB</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "Developing robust  REST API using <b>Node & Express</b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "Agile Project Management",
    about:
      "Creating effective <b>project artifacts, planning & execution</b> throughout the various phase of a project using the principles of <b>Agile management & Scrum</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python, R and RStudio",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript/Typescript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "HTML and CSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap and Tailwind CSS",
    level: "60",
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
    name: "Node and Express js",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Chart js",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Tableau and Power BI",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Asana",
    level: "50",
  },
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
    description:
      "This app contains a collection of delicious food. I use contentful as a backend tool for my content management ",
    image_path: "/images/Food.JPG",
    deployed_url: "https://food-for-the-soul.vercel.app/",
    github_url: "https://github.com/KascoDev/FOOD-FOR-THE-SOUL",
    category: ["react & next"],
    key_techs: ["Next.js", "Contentful", "CMS"],
  },
  {
    name: "Fullstack Ecommerce Website",
    description:
      "This web app is a complete ecommerce web app with sanity as backend for content and stripe for payment and checkout",
    image_path: "/images/ecommerce.JPG",
    deployed_url: "https://fullstack-ecommerce-sanity-stripe.vercel.app/",
    github_url: "https://github.com/KascoDev/fullstack-ecommerce-sanity-stripe",
    category: ["react & next"],
    key_techs: ["Next.js", "Sanity", "CMS"],
  },
  {
    name: "Sales Rep. Performance Monitor",
    image_path: "/images/Sales-Rep-Monitor.JPG",
    deployed_url:
      "https://public.tableau.com/app/profile/dimowo.okasime/viz/SalesRep_PerformanceMonitor/Dashboard1",
    github_url: "",
    category: ["tableau", "data viz"],
    description:
      "This DataViz. consist of a Dashboard and different types of charts including a bar chart, bubble chart, a scatter plot and more. This is a Descriptive Sales Rep. Performance Monitor Dashboard",
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
    name: "HR Dashboard",
    image_path: "/images/Power BI HR Dashboard.JPG",
    deployed_url:
      "https://app.powerbi.com/links/kqqv_R4Q8-?ctid=e224727e-cd06-4c3e-9eaa-20f20db500ad&pbi_source=linkShare&bookmarkGuid=dc107669-fc8c-42bb-81c5-0a257b394214",
    github_url: "",
    category: ["power BI", "data viz"],
    description: "The dashboard is an analysis of the workfore of a company",
    key_techs: ["Power BI", "Data Analysis", "Data Visualization"],
  },

  {
    name: "Admin Dashboard",
    image_path: "/images/Admin-dashboard.JPG",
    deployed_url: "https://kascodev.github.io/ChartJs-Admin-Dashboard/",
    github_url: "https://github.com/KascoDev/ChartJs-Admin-Dashboard",
    category: ["data viz"],
    description:
      "This admin dashboard was build using HTML, CSS, Javascript and Chart.js. The project enabel the admin to have a bird's eye view of his/her business",
    key_techs: ["Javascript", "Chart.js", "Data Analysis", "HTML/CSS"],
  },

  {
    name: "tinDog",
    image_path: "/images/tinDog.JPG",
    deployed_url: "https://kascodev.github.io/TindDog/",
    github_url: "https://github.com/KascoDev/TindDog",
    category: [],
    description:
      "This is like tinder web app for dogs. It was created using HTML, CSS and Bootstarp 5",
    key_techs: ["HTML", "CSS", "Bootstrap 5"],
  },

  {
    name: "SpaceX Project",
    image_path: "/images/SpaceX-Capstone-Project.JPG",
    deployed_url:
      "https://docs.google.com/presentation/d/1tRVbKWMxo-oVC2TqTxdwvTw_njxoNk80/edit?usp=sharing&ouid=115711840025056245722&rtpof=true&sd=true",
    github_url:
      "https://github.com/KascoDev/IBM-DataScience-SpaceX-Capstone-Project",
    category: ["python"],
    description:
      "This is IBM Data Science Course capstone project, In which I assume the role of a Data Scientist working for a new Space rocket company called SpaceY and would like to compete with SpaceX founded by Allon Musk. My job is to determine the cost of each launch and to predict if a launch programm will be successful or not. I have to do this by gathering information about Space X and creating an interactive dashboards for my team. I also determine if SpaceX will reuse it's booster rockets after each launch. I use Data analysis and Data Science methodologies as well as training a machine learning model using publicly available information to predict if SpaceX will reuse the first stage rocket booster.",
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
    name: "Machine-Learning-Project ",
    image_path: "/images/machine-learning-project1.JPG",
    deployed_url: "",
    github_url: "https://github.com/KascoDev/Machine_Learning_Modeling",
    category: ["python"],
    description:
      "In this notebook I try to analyze classification algorithms in machine learning.  I load the dataset using python Pandas library package, and apply the necessary algorithms to find the optimal classification algorithm for the dataset I used. ",
    key_techs: ["Python", "Pandas", "ML"],
  },
];
