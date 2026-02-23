import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  // { href: "/#testimonials", label: "Testimonials", id:"testimonials" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(null);

  const [isScroll, setScroll] = useState(false);

  //Adding active class to nav options
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // 60% visible
      },
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed  top-0 left-0 right-0 transition-all duration-500
       ${isScroll ? "glass-strong py-4" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex justify-between items-center ">
          <Link className="text-xl font-bold tracking-tight hover:text-primary">
            Swasthik G<span>.</span>
          </Link>

          {/* Desktop view Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-4 py-1 text-sm  hover:text-foreground rounded-full hover:bg-surface ${active === link.id ? "text-amber-300" : "text-muted-foreground"}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts Button */}
          <div className="hidden md:block">
            <a href="#contacts">
              <Button size="sm">Contact Me</Button>
            </a>
          </div>

          {/* Mobile view Menu Buttons */}
          <div>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              {isMobileMenuOpen ? <X size={24}></X> : <Menu size={24}></Menu>}
            </button>
          </div>
        </nav>

        {/* Mobile view Menus */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-lg text-muted-foreground hover:text-foreground py-2">
                  {link.label}
                </a>
              ))}{" "}
              <Button>Contact Me</Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
