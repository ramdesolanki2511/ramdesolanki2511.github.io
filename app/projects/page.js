import Heading from "@/components/projects/Heading";
import More from "@/components/projects/More";
import Page from "@/components/utility/Page";
import Projects from "@/components/projects/Projects";

export const metadata = {
  title: "Projects - Ramde Solanki",
  description:
    "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
  alternates: {
    canonical: "https://ramdesolanki2511.github.io/projects"
  },
  openGraph: {
    title: "Projects - Ramde Solanki",
    description:
      "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
    url: "https://ramdesolanki2511.github.io/projects"
  },
  twitter: {
    title: "Projects - Ramde Solanki",
    description:
      "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
    url: "https://ramdesolanki2511.github.io/projects"
  }
};

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects."
      }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
