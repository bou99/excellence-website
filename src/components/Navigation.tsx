import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitcher from "./LanguageSwitcher";
import logoImage from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "parcours", label: t("nav.programs") },
    { id: "research", label: t("nav.research") },
    { id: "events", label: t("nav.events") },
    { id: "contact", label: t("nav.contact") },
  ];

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
                src={logoImage}
                alt="Centre d'Excellence IT Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-heading font-bold text-nowrap ${
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

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors ${
                  isScrolled
                    ? "hover:text-primary font-bold"
                    : "hover:border-b-2 border-white font-medium"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-x-4">
            <LanguageSwitcher />
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {t("nav.apply")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-x-2">
            <LanguageSwitcher />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={
                    isScrolled ? "text-foreground" : "text-accent-foreground"
                  }
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] pt-12"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-x-3">
                    <img
                      src={logoImage}
                      alt="Centre d'Excellence IT Logo"
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-primary font-heading">
                      {t("nav.title")}
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left py-3 px-4 rounded-md hover:bg-accent/10 transition-colors font-medium text-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                  >
                    {t("nav.apply")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
