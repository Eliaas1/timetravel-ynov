const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-display text-lg text-primary mb-2">TimeTravel Agency</p>
        <p className="text-muted-foreground text-sm mb-4">
          © 2026 TimeTravel Agency - Tous droits réservés
        </p>
        <p className="text-muted-foreground text-xs mb-3">
          ALVES ELIAS & REMIDESBIEN
        </p>
        <div className="flex justify-center gap-6 text-xs text-muted-foreground">
          <span className="hover:text-primary cursor-pointer transition-colors">CGV</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Mentions légales</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
