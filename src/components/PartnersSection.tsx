import { useState } from "react";
import { useTranslation } from "react-i18next";

const PartnersSection = () => {
  const { t } = useTranslation();

  const academicPartners = [
    {
      name: "Université Mohammed V",
      type: "Partenariat académique",
      logo: "🎓",
    },
    {
      name: "École Polytechnique Paris",
      type: "Échange étudiants",
      logo: "🏫",
    },
    {
      name: "MIT (Massachusetts Institute of Technology)",
      type: "Recherche collaborative",
      logo: "🔬",
    },
    { name: "Université de Montréal", type: "Programme conjoint", logo: "🇨🇦" },
    { name: "TU Delft", type: "Double diplôme", logo: "🇳🇱" },
    { name: "INRIA France", type: "Recherche IA", logo: "🤖" },
  ];

  const industryPartners = [
    {
      name: "Microsoft",
      type: "Technologie Cloud",
      logo: "💻",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "IBM",
      type: "Intelligence Artificielle",
      logo: "🧠",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Oracle",
      type: "Base de données",
      logo: "🗄️",
      color: "from-red-500 to-red-600",
    },
    {
      name: "AWS",
      type: "Cloud Computing",
      logo: "☁️",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Cisco",
      type: "Réseaux & Sécurité",
      logo: "🔒",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "SAP",
      type: "ERP & Analytics",
      logo: "📊",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Google",
      type: "IA & Data Science",
      logo: "🔍",
      color: "from-multicolor",
    },
    {
      name: "Meta",
      type: "Réalité virtuelle",
      logo: "🥽",
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "OCP Group",
      type: "Transformation digitale",
      logo: "⚡",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Maroc Telecom",
      type: "Télécommunications",
      logo: "📱",
      color: "from-red-500 to-pink-500",
    },
    {
      name: "BMCE Bank",
      type: "Fintech",
      logo: "🏦",
      color: "from-green-600 to-emerald-600",
    },
    {
      name: "Royal Air Maroc",
      type: "Systèmes embarqués",
      logo: "✈️",
      color: "from-red-600 to-red-700",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t("partners.our")}{" "}
            <span className="text-accent">{t("partners.partners")}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("partners.description")}
          </p>
        </div>

        {/* Academic Partners */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            {t("partners.academic")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {partner.name}
                </h4>
                <p className="text-sm text-muted-foreground">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
            {t("partners.industry")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {industryPartners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-card p-4 rounded-xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h4 className="text-sm font-heading font-semibold text-foreground mb-1">
                  {partner.name}
                </h4>
                <p className="text-xs text-muted-foreground">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            {t("partners.benefits.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-2">
                {t("partners.benefits.formations.title")}
              </h4>
              <p className="text-white/90">
                {t("partners.benefits.formations.description")}
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-xl font-semibold mb-2">
                {t("partners.benefits.internships.title")}
              </h4>
              <p className="text-white/90">
                {t("partners.benefits.internships.description")}
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-semibold mb-2">
                {t("partners.benefits.vision.title")}
              </h4>
              <p className="text-white/90">
                {t("partners.benefits.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
