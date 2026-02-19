import { motion } from "framer-motion";
import parisImg from "@/assets/paris-1889.jpg";
import cretaceousImg from "@/assets/cretaceous.jpg";
import florenceImg from "@/assets/florence-1504.jpg";

const destinations = [
  {
    id: "paris",
    title: "Paris 1889",
    subtitle: "La Belle Époque",
    period: "1889",
    image: parisImg,
    description:
      "Assistez à l'inauguration de la Tour Eiffel lors de l'Exposition Universelle. Découvrez le Paris bohème et artistique de la Belle Époque.",
    highlights: [
      "Tour Eiffel en construction",
      "Exposition Universelle de 1889",
      "Quartiers artistiques de Montmartre",
      "Cabarets et cafés parisiens",
    ],
    price: "3 500",
  },
  {
    id: "cretaceous",
    title: "Crétacé",
    subtitle: "Ère des Dinosaures",
    period: "-65M années",
    image: cretaceousImg,
    description:
      "Vivez l'expérience ultime : observer les dinosaures dans leur habitat naturel, juste avant l'extinction.",
    highlights: [
      "T-Rex, Tricératops, Brachiosaures",
      "Forêts préhistoriques luxuriantes",
      "Volcans actifs",
      "Observation sécurisée depuis bulles temporelles",
    ],
    price: "12 000",
  },
  {
    id: "florence",
    title: "Florence 1504",
    subtitle: "Renaissance Italienne",
    period: "1504",
    image: florenceImg,
    description:
      "Rencontrez Michel-Ange au travail sur le David. Plongez dans l'effervescence artistique de la Renaissance florentine.",
    highlights: [
      "Atelier de Michel-Ange",
      "Duomo de Florence",
      "Palais des Médicis",
      "Marchés et artisans Renaissance",
    ],
    price: "4 200",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
            Nos Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Trois époques extraordinaires vous attendent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group bg-card border border-border/30 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-gold-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full font-display">
                  {dest.period}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {dest.title}
                </h3>
                <p className="text-primary text-sm font-display mb-3">{dest.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {dest.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {dest.highlights.map((h) => (
                    <li key={h} className="text-muted-foreground text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div>
                    <p className="text-xs text-muted-foreground">À partir de</p>
                    <p className="font-display text-xl font-bold text-primary">
                      {dest.price} €
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">/ personne</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
