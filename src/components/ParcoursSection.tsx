import { Button } from "@/components/ui/button";
import {
  Database,
  Brain,
  Code,
  Server,
  Shield,
  ChartBar,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ParcoursSection = () => {
  const { t, i18n } = useTranslation();

  const parcours = [
    {
      icon: Brain,
      title: t("programs.ai.title"),
      description: t("programs.ai.description"),
      duration: "2 ans",
      level: "Master",
      highlights: t("programs.ai.highlights", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Database,
      title: t("programs.data.title"),
      description: t("programs.data.description"),
      duration: "2 ans",
      level: "Master",
      highlights: t("programs.data.highlights", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Code,
      title: t("programs.software.title"),
      description: t("programs.software.description"),
      duration: "2 ans",
      level: "Master",
      highlights: t("programs.software.highlights", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Server,
      title: t("programs.systems.title"),
      description: t("programs.systems.description"),
      duration: "2 ans",
      level: "Master",
      highlights: t("programs.systems.highlights", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Shield,
      title: t("programs.cyber.title"),
      description: t("programs.cyber.description"),
      duration: "2 ans",
      level: "Master",
      highlights: t("programs.cyber.highlights", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: ChartBar,
      title: t("programs.bi.title"),
      description: t("programs.bi.description"),
      duration: "2 ans",
      level: "Master",
      highlights: t("programs.bi.highlights", {
        returnObjects: true,
      }) as string[],
    },
  ];

  // Get current text direction (ltr or rtl)
  const dir = i18n.dir();

  return (
    <section id="parcours" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t("programs.our")}{" "}
            <span className="text-accent">{t("programs.programs")}</span>{" "}
            {t("programs.excellence")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("programs.description")}
          </p>
        </div>

        {/* Parcours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parcours.map((course, index) => (
            <div key={index} className="parcours-card hover:border-accent/50">
              {/* Icon and Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <course.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    {course.level}
                  </span>
                  <div className="text-xs text-muted-foreground mt-1">
                    {course.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {course.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {course.highlights.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full group border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {t("programs.learn_more")}
                {dir === "rtl" ? (
                  <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-heading font-bold mb-4">
              {t("programs.cta.title")}
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {t("programs.cta.description")}
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3">
              {t("programs.cta.button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParcoursSection;
