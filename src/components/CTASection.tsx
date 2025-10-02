import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
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
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
            {t("cta.subtitle")}
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary hover:bg-white/90 px-10 py-4 text-lg font-semibold group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t("cta.buttons.apply")}
              {dir === "rtl" ? (
                <ArrowLeft className="ml-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("parcours")}
              variant="outline"
              className="text-white bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-sm group hover:bg-white/10 shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {t("cta.buttons.discover")}
            </Button>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">
              {t("cta.contact.email")}
            </h3>
            <p className="text-white/80">contact@excellence-it.ac.ma</p>
            <p className="text-white/60 text-sm">Réponse sous 24h</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">
              {t("cta.contact.phone")}
            </h3>
            <p className="text-white/80" dir="ltr">
              +212 5 28 22 XX XX
            </p>
            <p className="text-white/60 text-sm">Lun-Ven: 8h-18h</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-white mb-2">
              {t("cta.contact.address.title")}
            </h3>
            <p className="text-white/80">{t("cta.contact.address.faculty")}</p>
            <p className="text-white/60 text-sm">
              {t("cta.contact.address.university")}
            </p>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white/90 font-medium">
              🔥 {t("cta.urgency")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
