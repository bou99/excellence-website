import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get current text direction (ltr or rtl)
  const dir = i18n.dir();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Centre d'Excellence IT"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto p-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm mt-8 mb-8">
            <span className="text-white font-medium">{t("hero.subtitle")}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
            <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              IT
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            {t("hero.subheadline")}
          </p>

          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("parcours")}
              className="btn-hero-primary text-lg px-8 py-4 group"
            >
              {t("hero.cta.discover")}
              {dir === "rtl" ? (
                <ArrowLeft className="ml-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="btn-hero-secondary text-lg bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              {dir === "rtl" ? (
                <Play className="ml-2 h-5 w-5 scale-x-[-1]" /> // Play icon on the left side for RTL
              ) : (
                <Play className="mr-2 h-5 w-5" /> // Play icon on the right side for LTR
              )}
              {t("hero.cta.apply")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-white/80">{t("hero.stats.students")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                95%
              </div>
              <div className="text-white/80">{t("hero.stats.employment")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-white/80">{t("hero.stats.partners")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                10+
              </div>
              <div className="text-white/80">{t("hero.stats.labs")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
