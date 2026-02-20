import Button from "@/components/Button.jsx";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import AnimatedBorderButton from "@/components/animatedBorderButton.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  const skills = [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "PostgresSQL",
    "MongoDB",
    "Vercel",
    "TailwindCSS",
    "Bootstrap",
    "Prisma",
    "Git",
    "GithubActions",
  ];
  return (
    <section className=" relative min-h-screen overflow-hidden flex items-center">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/20 to-background" />

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((a, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}></div>
        ))}
      </div>

      {/* Content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left colums - Text Content      */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Web Developer . React Enthuasist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experience with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Swasthik G - a software developer specializing in MERN
                and Angular. I build scalable, performant web applications that
                users love.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 items-center">
              <Button size="lg">
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton>
                Download CV
                <Download className="w-5 h-5" />
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow :</span>

              <Link className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Github className="w-5 h-5" />
              </Link>
              <Link className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-linear-to-br
              from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Swasthik G"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}

                <div
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-4
                py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 animate-float">
                  <div className="text-2xl font-bold text-primary">1.5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}

        <div className="mt-20 animation-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skills, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skills}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button  */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600 z-99">
        <Link
          to="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
          <span className="uppercase text-xs tracking-wide">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
