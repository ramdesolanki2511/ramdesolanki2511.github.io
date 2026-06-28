import Heading from "@/components/designs/Heading";
import Page from "@/components/utility/Page";
import Contact from "@/components/contact";

export const metadata = {
  title: "Get in Touch - Connect with Me - Ramde Solanki",
  description:
    "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond.",
  alternates: {
    canonical: "https://ramdesolanki2511.github.io/projects"
  },
  openGraph: {
    title: "Get in Touch - Connect with Me - Ramde Solanki",
    description:
      "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond.",
    url: "https://ramdesolanki2511.github.io/projects"
  },
  twitter: {
    title: "Get in Touch - Connect with Me - Ramde Solanki",
    description:
      "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond.",
    url: "https://ramdesolanki2511.github.io/projects"
  }
};

function designs() {
  return (
    <Page
      currentPage="Contact"
      meta={{
        desc: "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond."
      }}
    >
      <Heading />
      <Contact />
    </Page>
  );
}

export default designs;
