import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Sugarautoparts",
    desc: "Sugar Auto Parts is a dedicated online marketplace built exclusively for the automotive parts industry.",
    img: `/static/projects/sugarautoparts.png`,
    link: "https://www.sugarautoparts.com/",
    tags: ["React", "NextJS", "CSS", "Context", "Socket.io"]
  },
  {
    id: 1,
    title: "Craiglinke",
    desc: "Craig Linke is a boutique, Adelaide based building and interior design company. We specialise in architectural builds and custom renovation projects",
    img: `/static/projects/craiglinke.png`,
    link: "https://craiglinke.com.au/",
    tags: [
      "React",
      "NextJS",
      "Context",
      "HTML",
      "CSS",
      "Javascript",
      "AWS Cognito"
    ]
  },
  {
    id: 2,
    title: "Studioband",
    desc: "strategic brand and design agency helping ambitious organisations scale with distinction and build enduring competitive advantage",
    img: `/static/projects/studioband.png`,
    link: "https://www.studioband.com.au/",
    tags: ["React", "CSS", "Javascript", "Redux", "Groomet", "Bulma"]
  },
  {
    id: 3,
    title: "The Building Company",
    desc: "create homes that elevate the everyday and redefine what it means to live well",
    img: `/static/projects/thebuildingcompany.png`,
    link: "https://thebuildingcompany.net/",
    tags: ["React", "TailwindCSS", "Javascript"]
  },
  {
    id: 4,
    title: "Enkaytech",
    desc: "Create apps that our customers love, help their businesses grow, and enable their employees to thrive.",
    img: `/static/projects/enkaytech.png`,
    link: "https://enkaytech.com/",
    tags: ["React", "NextJs", "Javascript"]
  },
  {
    id: 5,
    title: "ionicwebs",
    desc: "provide a complete range of digital services designed to meet every aspect of our clients’ goals.",
    img: `/static/projects/ionicwebs.png`,
    link: 'https://ionicwebs.com/',
    tags: ["React", "Javascript", "Redux", "HTML"]
  },
  {
    id: 6,
    title: "Banking Platform",
    desc: "Banking Platform with multiple react apps for Landing app, Authentication app, Transaction app, Foundation app, and separate React apps for other banking operations in the Main app.",
    img: `/static/projects/banking.jpg`,
    tags: [
      "React",
      "Javascript",
      "Micro Frontend",
      "Shared Components",
      "Docker",
      "Material UI"
    ]
  },
  {
    id: 7,
    title: "Shoppr",
    desc: "Product is a Customer Science Platform that provides the often-missing holistic customer view to e-commerce sellers and empowers them to reach out to the right customers with the right product at right time.",
    img: `/static/projects/shoppr.jpg`,
    link: "shoppr.ai",
    tags: [
      "React",
      "Javascript",
      "Redux",
      "Ant-Design",
      "React Google Charts",
      "ReCharts"
    ]
  },
  {
    id: 8,
    title: "Covid-19-Global-Dashboard",
    desc: "COVID-19 Global | India - Get Real-time coronavirus updates for India and global. Analytics of all the affected countries with the number of confirmed, recovered, deaths, and active cases.",
    img: `/static/projects/covid19.jpg`,
    link: "#",
    github: "https://github.com/ramdesolanki2511/Covid-19-Global-Dashboard",
    tags: ["React", "Javascript", "React Google Charts", "Node", "ReCharts"]
  },
  {
    id: 9,
    title: "Restaurant App",
    desc: "The restaurant CRUD app is a sample project with CRUD operations built with ant-design, bootstrap4, and ReactJs.",
    img: `/static/projects/restaurant.jpg`,
    link: "#",
    github: "https://github.com/ramdesolanki2511/restaurant-app",
    tags: ["React", "Javascript", "Bootstrap"]
  },
  {
    id: 10,
    title: "Would You Rather",
    desc: "Project is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”.",
    img: `/static/projects/wouldyou.jpg`,
    link: "#",
    github: "https://github.com/ramdesolanki2511/would-you-rather",
    tags: ["React", "Javascript"]
  },
  {
    id: 11,
    title: "Favourite Location Tracker",
    desc: "Project is a web app that lets a user make a list of favorite locations. Users can add a favorite location to the list by selecting a location from the map and adding the details of that location.",
    img: `/static/projects/favoritelocation.jpg`,
    github: "https://github.com/ramdesolanki2511/favorite-location-tracker",
    tags: ["React", "Javascript", "Map"]
  },
  {
    id: 12,
    title: "Embedded-react-widget",
    desc: "Embedded React Widget to deploy on your website.",
    img: `/static/projects/widget.jpg`,
    github: "https://github.com/ramdesolanki2511/embedded-react-widget",
    tags: ["React", "Javascript"]
  }
];

export const allTags: string[] = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
