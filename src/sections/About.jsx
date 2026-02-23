import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying ahead with the latest technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto relative px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground ">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a passionate Web Developer who loves building web
                applications and exploring new technologies. I enjoy writing
                clean code and creating interfaces that users enjoy using.
              </p>

              <p>
                I’m a passionate Web Developer specializing in React, Angular,
                Node.js, Express, Tailwind CSS, and the MERN stack. I enjoy
                breaking down complex problems into simple solutions,
                continuously learning new technologies, and improving my skills
                through hands-on projects. I’m comfortable working in
                collaborative environments and aim to deliver high-quality user
                experiences.
              </p>

              <p>
                When I’m not coding, I enjoy exploring new tech, learning from
                the developer community, and working on personal projects.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foregroun">
                "My mission is to grow as a developer by learning every day,
                building useful products, and contributing to impactful digital
                solutions."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl animate-fade-in hover:scale-110 transition-all duration-700"
                style={{
                  animationDelay: `${(i + 1) * 1000}ms`,
                }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-md text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
