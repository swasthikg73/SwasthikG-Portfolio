import { ArrowRight, ArrowUp, ArrowUpRight, Github } from "lucide-react";

import AnimatedBorderButton from "@/components/animatedBorderButton.jsx";
import { Link } from "react-router-dom";
const projects = [
  {
    title: "CraveX",
    description:
      "CraveX is a MERN-based food delivery platform that connects customers with restaurant owners. Users can browse menus, place orders, track deliveries, and make secure payments, while restaurant Owners manage menus, orders, and analytics — all through a seamless and responsive experience.",
    image: "../../public/projects/project1.png",
    link: "https://cravex-a-food-app.onrender.com/",
    githubLink: "https://github.com/swasthikg73/CraveX",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "RazorPay"],
  },
  {
    title: "SparkGPT",
    description:
      "SparkGPT is a modern AI-powered  Text and Image generation web application built using the MERN stack (MongoDB, Express, React, Node.js) with Tailwind CSS for a clean, responsive UI. It is designed to provide fast, intelligent, and interactive AI experiences with a scalable and production-ready architecture",
    image: "../../public/projects/project2.png",
    link: "https://spark-gpt-fawn.vercel.app/",
    githubLink: "https://github.com/swasthikg73/SparkGPT",
    technologies: [
      "React.js",
      "TailwindCSS",
      "PrismJS",
      "Gemini AI",
      "Imagekit AI",
      "Stripe",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Housify",
    description:
      "Housify is a modern real estate web application built using the MERN stack. It allows users to explore property listings, post their own properties, and communicate directly with property owners through real-time messaging",
    image: "../../public/projects/project3.png",
    link: "https://housify-theta.vercel.app/",
    githubLink: "https://github.com/swasthikg73/Housify",
    technologies: [
      "React.js",
      "Socket.io",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Prisma ORM",
    ],
  },
  {
    title: "SnapErase",
    description:
      "SnapErase is a powerful AI-based web application that allows users to instantly remove backgrounds from images with high accuracy. Built using the MERN stack, it integrates advanced AI services and modern authentication and payment systems to deliver a smooth user experience.",
    image: "../../public/projects/project4.png",
    link: "https://snap-erase-nu.vercel.app/",
    githubLink: "https://github.com/swasthikg73/SnapErase",
    technologies: [
      "React.js",
      "ClipDrop API",
      "Clerk",
      "RazorPay",
      "Tailwind CSS",
      "Node.js",
      "Express.js ",
      "MongoDB",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden ">
      {/* Bg glows */}

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-2xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider animate-fade-in ">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-00">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web application to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 "
              style={{ animationDelay: `${(i + 1) * 1000}ms` }}>
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <a
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    href={project.link}
                    target="_blank">
                    <ArrowUpRight className="w-h h-5" />
                  </a>
                  <a
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    href={project.githubLink}
                    target="_blank">
                    <Github className="w-h h-5" />
                  </a>
                </div>
              </div>

              {/* Project information */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary
                  group-hover:translate-x-1 
                  group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground
                      hover:border-primary/50 hover:text-primary  transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See all projects */}
        <div className="text-center mt-12 animate-fade-in">
          <Link
            to="https://github.com/swasthikg73?tab=repositories"
            target="_blank">
            <AnimatedBorderButton className="cursor-pointer">
              View all Projects
              <ArrowUpRight />
            </AnimatedBorderButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
