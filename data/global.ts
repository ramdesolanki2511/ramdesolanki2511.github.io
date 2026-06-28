type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/"
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Resume",
    path: "/static/resume/Ramde_Solanki_Full_Stack_Developer_Resume.pdf"
  }
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false
        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false
        }
      ]
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/ramdesolanki2511",
          icon: `/static/icons/github-f.svg`,
          leavesWebsite: true
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ramde-solanki/",
          icon: `/static/icons/linkedin-f.svg`,
          leavesWebsite: true
        },
        {
          name: "Email",
          link: "mailto:ramdesolanki2511@gmail.com",
          icon: `/static/icons/mail-f.svg`,
          leavesWebsite: true
        }
      ]
    }
  ]
};
