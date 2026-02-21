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
                I'm a passionate Web Developer Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Harum illo corrupti veritatis
                neque suscipit, minus, reprehenderit et alias sit commodi
                consequuntur delectus sint ullam animi. Aliquid consequuntur
                pariatur sed culpa?.
              </p>

              <p>
                I specilaize in react, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cumque, ipsa? Nostrum voluptates reprehenderit
                corrupti aperiam doloribus soluta, corporis illo excepturi minus
                officia odit suscipit vel voluptatum cumque ullam aliquid
                laboriosam!.
              </p>

              <p>
                When I'm not coding Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptate placeat excepturi reiciendis
                nostrum? Provident recusandae cumque vel inventore asperiores
                excepturi alias omnis veritatis, culpa placeat perspiciatis qui
                autem, consectetur velit!.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foregroun">
                "My mission to create Provident recusandae cumque vel inventore
                asperiores excepturi alias omnis veritatis, culpa placeat
                perspiciatis qui autem, consectetur velit!."
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
