import { Lightbulb, GraduationCap, Search, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Lightbulb,
      title: t("about.features.innovation.title"),
      description: t("about.features.innovation.description"),
    },
    {
      icon: GraduationCap,
      title: t("about.features.quality.title"),
      description: t("about.features.quality.description"),
    },
    {
      icon: Search,
      title: t("about.features.research.title"),
      description: t("about.features.research.description"),
    },
    {
      icon: Globe,
      title: t("about.features.international.title"),
      description: t("about.features.international.description"),
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t("about.our")}{" "}
            <span className="text-primary">{t("about.mission")}</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center group hover:border-accent/50"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-heading font-medium text-primary italic max-w-4xl mx-auto">
            "{t("about.quote")}"
          </blockquote>
          <cite className="block mt-6 text-muted-foreground">
            {t("about.author")}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
