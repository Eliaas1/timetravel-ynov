import { motion } from "framer-motion";
import { Shield, Users, Compass } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Protocoles de sécurité temporelle certifiés par l'Agence Internationale du Continuum.",
  },
  {
    icon: Users,
    title: "Guides experts",
    description: "Historiens et scientifiques spécialisés vous accompagnent à chaque époque.",
  },
  {
    icon: Compass,
    title: "Expériences authentiques",
    description: "Immersion totale grâce à notre technologie de traduction et d'adaptation culturelle.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
            Votre passerelle vers l'Histoire
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            TimeTravel Agency est votre passerelle exclusive vers les moments les plus extraordinaires de l'Histoire.
            Notre technologie de pointe vous garantit une expérience immersive et sécurisée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-primary/10 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
