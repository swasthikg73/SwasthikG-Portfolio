const experience = [
  {
    period: "Apr 2025 - Present",
    role: "Jr Web Developer",
    company: "Folkslogic Technologies",
    description:
      "Executed manual testing on web applications to validate functionality, usability, and requirement compliance.",
    technologies: [
      "Angular",
      "Typescript",
      "Postgresql",
      "Node.js",
      "Express.js",
    ],
    current: true,
  },

  {
    period: "Oct 2024 - Mar 2025",
    role: "Software Testing engineer",
    company: "Folkslogic Technologies",
    description:
      "Executed manual testing on web applications to validate functionality, usability, and requirement compliance.",
    technologies: [
      "API Testing",
      "Postman",
      "Manual Testing",
      "TestCases",
      "Functional Testing",
      "Redmine",
      "Agile",
    ],
    current: false,
  },

  {
    period: "June 2024 - Sep 2024",
    role: "Testing Intern",
    company: "Folkslogic Technologies",
    description:
      "Executed manual testing on web applications to validate functionality, usability, and requirement compliance.",
    technologies: [
      "Manual Testing",
      "Functional",
      "Regression",
      "Smoke",
      "Test Case Design & Execution",
      "Bug Tracking (Redmine)",
      "SDLC & STLC, Agile / Scrum Methodology",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute w-96 h-96 bg-primary/5 blur-3xl left-1/4 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}

        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm font-medium 
          tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2
            className="text-secondary-foreground font-bold text-4xl
          md:text-5xl mt-4 mb-6 animate-fade-in animation-delay-100
          ">
            Experience that
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Started by testing software, now building it — a journey driven by
            curiosity and love for the tech.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="timiline-glow absolute left-0 md:left-1/2
          top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:translate-x-1/2
          shadow-[0_0_25px_rgba(32,178,166,0.5)]"
          />

          <div className="space-y-2 ">
            {experience.map((exp, ixd) => (
              <div
                key={ixd}
                className="animate-fade-in grid md:grid-cols-2"
                style={{
                  animationDelay: `${(ixd + 1) * 150}ms`,
                }}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2  w-3 h-3 bg-primary rounded-full -translate-x-1/3 ring-4 ring-background z-10 ">
                  {exp.current && (
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                  )}
                </div>
                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${ixd % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className="glass p-6 rounded-2xl border border-primary/30">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-sm font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${ixd % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
