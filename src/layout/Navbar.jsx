import { Link } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  return (
    <>
      <header
        className="fixed top-0 left-0 right-0
       bg-transparent py-5">
        <nav className="container mx-auto px-6 flex justify-between items-center ">
          <Link className="text-xl font-bold tracking-tight hover:text-primary">
            PM<span>.</span>
          </Link>

          {/* Desktop Nav */}

          <div className="flex items-center gap-1">
            <div className="glass">
              {navLinks.map((link, index) => (
                <Link key={index} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
