import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Trophy, Zap } from "lucide-react";
import researchImage from "@/assets/research-lab.jpg";
import campusImage from "@/assets/campus-building.jpg";
import { useTranslation } from "react-i18next";

const ResearchSection = () => {
  const { t } = useTranslation();

  const researchAreas = [
    t("research.areas.ai"),
    t("research.areas.iot"),
    t("research.areas.blockchain"),
    t("research.areas.cyber"),
    t("research.areas.big_data"),
    t("research.areas.computer_vision"),
  ];

  const partnerships = [
    { name: "Microsoft", type: "Technologie" },
    { name: "IBM", type: "Recherche IA" },
    { name: "Oracle", type: "Base de données" },
    { name: "AWS", type: "Cloud Computing" },
    { name: "Cisco", type: "Réseaux" },
    { name: "SAP", type: "ERP" },
  ];

  return (
    <section
      id="research"
      className="section-padding bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t("research.research")} &{" "}
            <span className="text-primary">{t("research.innovation")}</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("research.description")}
          </p>
        </div>

        {/* Research Labs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                {t("research.areas.title")}
              </h3>
              <div className="space-y-4">
                {researchAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-x-3 group">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50 shadow-soft">
              <div className="flex items-center gap-x-3 mb-4">
                <Trophy className="h-6 w-6 text-accent" />
                <h4 className="text-lg font-heading font-semibold">
                  {t("research.achievements.title")}
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">
                    {t("research.achievements.publications")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">
                    {t("research.achievements.projects")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={researchImage}
              alt="Laboratoire de recherche"
              className="w-full h-96 object-cover rounded-xl shadow-medium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 start-6 text-white">
              <h4 className="text-xl font-heading font-bold mb-2">
                {t("research.lab_ai")}
              </h4>
              <p className="text-white/90">
                {t("research.lab_ai_description")}
              </p>
            </div>
          </div>
        </div>

        {/* Training & Industry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Image */}
          <div className="relative">
            <img
              src={campusImage}
              alt="Campus universitaire"
              className="w-full h-96 object-cover rounded-xl shadow-medium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 start-6 text-white">
              <h4 className="text-xl font-heading font-bold mb-2">
                {t("research.campus_modern")}
              </h4>
              <p className="text-white/90">
                {t("research.campus_modern_description")}
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                {t("research.training.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("research.training.description")}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-x-4 p-4 bg-card rounded-lg border border-border/50">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {t("research.training.internships")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("research.training.duration")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-x-4 p-4 bg-card rounded-lg border border-border/50">
                  <Zap className="h-8 w-8 text-accent" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {t("research.training.projects")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("research.training.collaboration")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-8">
            {t("research.partners.title")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="font-semibold text-foreground mb-1">
                  {partner.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {partner.type}
                </div>
              </div>
            ))}
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            {t("research.partners.view_all")}
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
