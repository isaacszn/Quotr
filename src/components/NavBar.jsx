import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/app", label: "Find Your Verse" },
  { to: "/about", label: "About Quotr" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const linkClasses = ({ isActive }) =>
    [
      "relative rounded-full px-2 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-200",
      isActive ? "text-yellow-50" : "text-yellow-100/90 hover:text-yellow-50",
      "after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:origin-center after:scale-x-0 after:bg-yellow-100 after:transition-transform after:duration-300 after:ease-out",
      isActive || "hover:after:scale-x-100",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex h-[60px] w-full items-center justify-between bg-red-900 px-4 text-yellow-100 shadow-[0_6px_20px_rgba(0,0,0,0.12)] ring-1 ring-red-950/20 sm:px-6 lg:h-[72px] lg:px-8">
        <a
          href="https://usequotr.vercel.app"
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <img
            src="/logo_navbar.svg"
            alt="Quotr logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="cormorant-garamond-bold text-3xl leading-none tracking-tight lg:text-4xl">
            Quotr
          </span>
        </a>

        <div className="plus-jakarta-sans-medium hidden items-center justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-100/20 bg-yellow-100/5 text-yellow-100 transition hover:bg-yellow-100/10 focus:outline-none focus:ring-2 focus:ring-yellow-100/70 cursor-pointer lg:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" strokeWidth={2.5} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2.5} />
          )}
        </button>
      </nav>

      <div
        className={[
          "overflow-hidden border-t border-red-950/30 bg-red-900/95 shadow-lg backdrop-blur-sm transition-all duration-300 ease-out lg:hidden",
          isOpen
            ? "max-h-64 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2",
        ].join(" ")}
      >
        <div className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "plus-jakarta-sans-medium rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200",
                  isActive
                    ? "bg-yellow-100/10 text-yellow-50"
                    : "text-yellow-100/90 hover:bg-yellow-100/5 hover:text-yellow-50",
                ].join(" ")
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
