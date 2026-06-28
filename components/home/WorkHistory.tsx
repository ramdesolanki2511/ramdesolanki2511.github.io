const workHistory = [
  {
    company: "Ionicwebs (Remote)",
    duration: "Apr 2024 - Present",
    role: "Full Stack Developer",
    description:
      "Building modern web applications using React.js, Next.js, Node.js, Express.js, MongoDB and TypeScript. Developing SaaS products, AI-powered applications, admin dashboards, and business websites for clients worldwide.",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    company: "Nolte FZE (Remote)",
    duration: "Jun 2022 - Mar 2024",
    role: "Senior Frontend Developer",
    description:
      "Developed enterprise-grade eCommerce solutions and corporate websites. Worked closely with UI/UX designers, backend teams, and stakeholders to deliver responsive, high-performance user interfaces.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "SCSS",
      "Magento",
      "GraphQL",
    ],
  },
  {
    company: "Commerce Pundit",
    duration: "Apr 2015 - May 2022",
    role: "Senior Frontend Developer",
    description:
      "Built and maintained eCommerce stores for international clients. Developed reusable UI components, optimized website performance, and collaborated with cross-functional teams.",
    skills: [
      "Magento",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "WordPress",
    ],
  },
  {
    company: "Rlogical Techsoft",
    duration: "Nov 2010 - Apr 2015",
    role: "Web Designer & Frontend Developer",
    description:
      "Started career as a web designer and gradually transitioned into frontend development. Created responsive websites, landing pages, and CMS-based solutions for clients across multiple industries.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Photoshop",
      "WordPress",
    ],
  },
];

export default function WorkHistory() {
  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Work History
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            15+ years of experience building modern websites,
            enterprise applications, and eCommerce platforms for
            startups, agencies, and global businesses.
          </p>
        </div>

        <div className="relative border-l border-gray-700 ml-3">

          {workHistory.map((job, index) => (
            <div
              key={index}
              className="mb-14 ml-8 relative"
            >
              <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-blue-600 border-4 border-[#0f172a]" />

              <div className="bg-[#000f2e] rounded-2xl p-7 border border-gray-800 hover:border-blue-600 transition">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                  <div className="flex flex-col md:flex-row items-center">
                    <h3 className="text-2xl font-semibold">
                      {job.role}
                    </h3>

                    <p className="text-blue-600 mt-1 ml-2">
                      {job.company}
                    </p>
                  </div>

                  <span className="text-sm text-gray-400">
                    {job.duration}
                  </span>

                </div>

                <p className="text-white text-left mt-3">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-3">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 hover:opacity-75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}