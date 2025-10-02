import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Youssef El Alami",
      role: "Data Scientist chez OCP Group",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      quote:
        "Le Centre d'Excellence IT m'a donné les compétences techniques et la vision stratégique nécessaires pour exceller dans le domaine de la Data Science. Les projets concrets et l'accompagnement personnalisé ont fait toute la différence.",
      rating: 5,
      program: "Master Data Science",
    },
    {
      name: "Aicha Benali",
      role: "Ingénieure IA chez Capgemini",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      quote:
        "La formation en Intelligence Artificielle était à la fois rigoureuse et passionnante. Les laboratoires de recherche m'ont permis de travailler sur des projets innovants qui m'ont préparée aux défis de l'industrie.",
      rating: 5,
      program: "Master Intelligence Artificielle",
    },
    {
      name: "Omar Tazi",
      role: "Lead Developer chez Hmizate",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote:
        "Le parcours Génie Logiciel m'a appris non seulement les aspects techniques mais aussi les méthodologies agiles et la gestion de projet. Aujourd'hui, je dirige une équipe de 15 développeurs.",
      rating: 5,
      program: "Master Génie Logiciel",
    },
    {
      name: "Dr. Rachid Bennani",
      role: "Professeur-Chercheur",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      quote:
        "En tant qu'enseignant, je suis fier de voir nos étudiants exceller dans leurs carrières. Le niveau d'excellence et d'innovation du centre attire les meilleurs talents du pays.",
      rating: 5,
      program: "Corps professoral",
    },
    {
      name: "Fatima Zahra Idrissi",
      role: "Security Analyst chez BMCE Bank",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      quote:
        "La spécialisation en Cybersécurité m'a ouvert les portes du secteur bancaire. Les certifications obtenues et l'expérience pratique en laboratoire sont très valorisées par les employeurs.",
      rating: 5,
      program: "Master Cybersécurité",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Témoignages & <span className="text-primary">Réussites</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez les parcours inspirants de nos diplômés qui excellent
            aujourd'hui dans les plus grandes entreprises du Maroc et à
            l'international.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-medium border border-border/50 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <div className="pt-8">
                {/* Stars */}
                <div className="flex items-center gap-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-x-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-accent">
                      {testimonials[currentTestimonial].program}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-primary scale-125"
                    : "bg-muted hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">95%</span>
            </div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
              Taux d'insertion
            </h4>
            <p className="text-muted-foreground text-sm">
              Nos diplômés trouvent un emploi dans les 6 mois
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">50+</span>
            </div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
              Entreprises partenaires
            </h4>
            <p className="text-muted-foreground text-sm">
              Réseau d'entreprises nationales et internationales
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">€45k</span>
            </div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
              Salaire moyen
            </h4>
            <p className="text-muted-foreground text-sm">
              Salaire de départ de nos jeunes diplômés
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">25+</span>
            </div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
              Pays de destination
            </h4>
            <p className="text-muted-foreground text-sm">
              Opportunités internationales pour nos diplômés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
