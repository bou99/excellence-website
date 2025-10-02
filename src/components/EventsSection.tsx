import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const EventsSection = () => {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: t("events.projects_events.hackathon.title"),
      description: t("events.projects_events.hackathon.description"),
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      category: "Hackathon",
      participants: 200,
      location: "Campus Agadir",
    },
    {
      title: t("events.projects_events.conference.title"),
      description: t("events.projects_events.conference.description"),
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      category: "Conférence",
      participants: 500,
      location: "Amphithéâtre principal",
    },
    {
      title: t("events.projects_events.workshop.title"),
      description: t("events.projects_events.workshop.description"),
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Workshop",
      participants: 50,
      location: "Lab Data Science",
    },
    {
      title: t("events.projects_events.startup.title"),
      description: t("events.projects_events.startup.description"),
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      category: "Startup",
      participants: 100,
      location: "Incubateur IT",
    },
    {
      title: t("events.projects_events.challenge.title"),
      description: t("events.projects_events.challenge.description"),
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      category: "Compétition",
      participants: 80,
      location: "Lab Cybersécurité",
    },
    {
      title: t("events.projects_events.symposium.title"),
      description: t("events.projects_events.symposium.description"),
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      category: "Symposium",
      participants: 150,
      location: "Auditorium",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(projects.length / 3)) %
        Math.ceil(projects.length / 3)
    );
  };

  const upcomingEvents = [
    {
      date: "15 Nov 2024",
      title: t("events.upcoming.portes_ouvertes.title"),
      description: t("events.upcoming.portes_ouvertes.description"),
      time: "9h00 - 17h00",
    },
    {
      date: "22 Nov 2024",
      title: t("events.upcoming.conference.title"),
      description: t("events.upcoming.conference.description"),
      time: "14h00 - 16h00",
    },
    {
      date: "1 Déc 2024",
      title: t("events.upcoming.forum.title"),
      description: t("events.upcoming.forum.description"),
      time: "10h00 - 18h00",
    },
  ];

  return (
    <section id="events" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            {t("events.projects")} &{" "}
            <span className="text-accent">{t("events.events")}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("events.description")}
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-heading font-bold text-foreground">
              {t("events.projects_events.title")}
            </h3>
            <div className="flex gap-x-2" dir="ltr">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden" dir="ltr">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projects.length / 3) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((project, index) => (
                          <div
                            key={index}
                            className="group relative bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 overflow-hidden border border-border/50"
                          >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="overlay-hover flex items-end p-4">
                                <div className="text-white">
                                  <span className="inline-block px-2 py-1 bg-accent/80 text-xs rounded-full mb-2">
                                    {project.category}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                              <h4 className="text-xl font-heading font-semibold text-foreground mb-2">
                                {project.title}
                              </h4>
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {project.description}
                              </p>

                              {/* Meta Info */}
                              <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <div className="flex items-center gap-x-1">
                                  <Users className="h-4 w-4" />
                                  <span>{project.participants}</span>
                                </div>
                                <div className="flex items-center gap-x-1">
                                  <MapPin className="h-4 w-4" />
                                  <span>{project.location}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-x-2 mt-8">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-primary" : "bg-muted"
                  }`}
                />
              )
            )}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              {t("events.upcoming.title")}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t("events.upcoming.description")}
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              {t("events.upcoming.see_all_calendar")}
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-x-4 p-6 bg-card rounded-xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex flex-col items-center justify-center text-white">
                  <Calendar className="h-6 w-6 mb-1" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-heading font-semibold text-foreground">
                      {event.title}
                    </h4>
                    <span className="text-sm text-primary font-medium">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-1">
                    {event.description}
                  </p>
                  <p className="text-sm text-accent">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
