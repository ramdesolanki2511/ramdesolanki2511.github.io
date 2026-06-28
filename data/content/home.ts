type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name?: string;
  job?: string;
};

export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" }
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
  },
  {
    title: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    style: { filter: "invert(1)" }
  },
  {
    title: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
  },
  {
    title: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  {
    title: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
  },
  {
    title: "Magento",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg"
  },
  {
    title: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    style: { filter: "invert(1)" }
  },
  {
    title: "Material UI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
  },
  {
    title: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
  },
  {
    title: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
  },
  {
    title: "GitLab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "My work stands out due to its attention to detail, user-centric design, and seamless functionality, resonating with users' needs."
  },
  {
    quote:
      "Clients appreciate the innovative solutions, intuitive interfaces, and consistent quality I bring to every project."
  },
  {
    quote:
      "With a focus on user satisfaction, my work consistently earns positive feedback and fosters long-term engagement."
  }
];
