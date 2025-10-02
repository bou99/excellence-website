import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    {
      name: t("footer.quick_links.links.about"),
      action: () => scrollToSection("about"),
    },
    {
      name: t("footer.quick_links.links.programs"),
      action: () => scrollToSection("parcours"),
    },
    {
      name: t("footer.quick_links.links.research"),
      action: () => scrollToSection("research"),
    },
    {
      name: t("footer.quick_links.links.events"),
      action: () => scrollToSection("events"),
    },
    {
      name: t("footer.quick_links.links.contact"),
      action: () => scrollToSection("contact"),
    },
  ];

  const programs = [
    t("footer.programs.links.ai"),
    t("footer.programs.links.data"),
    t("footer.programs.links.software"),
    t("footer.programs.links.network"),
    t("footer.programs.links.cyber"),
    t("footer.programs.links.bi"),
  ];

  const resources = [
    t("footer.contact.ressources.calendar"),
    t("footer.contact.ressources.library"),
    t("footer.contact.ressources.e_learning"),
  ];

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IT</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">
                  {t("footer.title")}
                </h3>
                <p className="text-white/70 text-sm">{t("footer.subtitle")}</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              {t("footer.description")}
            </p>

            {/* Social Media */}
            <div className="flex gap-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              {t("footer.quick_links.title")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              {t("footer.programs.title")}
            </h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("parcours")}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center group text-left"
                  >
                    <span>{program}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              {t("footer.contact.title")}
            </h4>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">
                    {t("footer.contact.contact.faculty")}
                  </p>
                  <p className="text-white/70 text-sm">
                    {t("footer.contact.contact.university")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white/90 text-sm" dir="ltr">
                  +212 5 28 22 XX XX
                </span>
              </div>

              <div className="flex items-center gap-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white/90 text-sm">
                  contact@excellence-it.ac.ma
                </span>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold text-white mb-3">
                {t("footer.contact.ressources.title")}
              </h5>
              <ul className="space-y-2">
                {resources.slice(0, 3).map((resource, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm text-center md:text-left">
              {t("footer.copyright")}
            </p>
            <div className="flex gap-x-6 text-sm">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                {t("footer.legal.legal_notices")}
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                {t("footer.legal.privacy")}
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                {t("footer.legal.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
