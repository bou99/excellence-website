import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "text-foreground bg-background/95 backdrop-blur-md shadow-medium"
          : "text-accent-foreground bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/src/assets/logo.png"
                alt="Centre d'Excellence IT Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-heading font-bold text-lg ${
                  isScrolled ? "text-primary" : "text-accent-foreground"
                }`}
              >
                {t("nav.title")}
              </h1>
              <p
                className={`text-xs ${
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-accent-foreground"
                }`}
              >
                {t("nav.subtitle")}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors ${
                isScrolled
                  ? "hover:text-primary font-bold"
                  : "hover:border-b-2 border-white font-medium"
              }`}
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => scrollToSection("parcours")}
              className={`transition-colors ${
                isScrolled
                  ? "hover:text-primary font-bold"
                  : "hover:border-b-2 border-white font-medium"
              }`}
            >
              {t("nav.programs")}
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className={`transition-colors ${
                isScrolled
                  ? "hover:text-primary font-bold"
                  : "hover:border-b-2 border-white font-medium"
              }`}
            >
              {t("nav.research")}
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className={`transition-colors ${
                isScrolled
                  ? "hover:text-primary font-bold"
                  : "hover:border-b-2 border-white font-medium"
              }`}
            >
              {t("nav.events")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors ${
                isScrolled
                  ? "hover:text-primary font-bold"
                  : "hover:border-b-2 border-white font-medium"
              }`}
            >
              {t("nav.contact")}
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-x-4">
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {t("nav.apply")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
