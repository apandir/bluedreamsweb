import logo from "@/assets/blue-dreams-logo.png";
import { MapPin, Phone, Mail, Globe, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const socials = [
    { name: "Facebook", url: "https://www.facebook.com/bluedreamshotel" },
    { name: "Instagram", url: "https://www.instagram.com/bluedreamsresort/" },
    { name: "YouTube", url: "https://www.youtube.com/@bluedreamsresort8738/videos" },
    { name: "WhatsApp", url: "https://wa.me/+905495167803" },
  ];

  return (
    <section id="contact" className="section-cream py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="section-number text-gold">10</p>
          <h2 className="factsheet-heading text-3xl md:text-4xl text-ocean-deep mb-3">Contact</h2>
          <div className="factsheet-divider" />
        </div>

        {/* Compact grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <a href="https://www.google.com/maps/search/?api=1&query=Torba+Mahallesi+Herodot+Bulvarı+No:11+Bodrum+Muğla+Türkiye" target="_blank" rel="noopener noreferrer" className="factsheet-card p-5 group hover:border-gold transition-colors">
            <MapPin className="w-4 h-4 text-gold mb-3" />
            <p className="factsheet-label mb-1.5">Address</p>
            <p className="font-display text-sm text-foreground leading-relaxed group-hover:text-ocean-deep transition-colors">Torba Mah. Herodot Bulvarı No:11, Bodrum / Muğla</p>
          </a>

          <a href="tel:+902523371111" className="factsheet-card p-5 group hover:border-gold transition-colors">
            <Phone className="w-4 h-4 text-gold mb-3" />
            <p className="factsheet-label mb-1.5">Telephone</p>
            <p className="font-display text-sm text-foreground group-hover:text-ocean-deep transition-colors">+90 252 337 11 11</p>
          </a>

          <a href="mailto:sales@bluedreamsresort.com" className="factsheet-card p-5 group hover:border-gold transition-colors">
            <Mail className="w-4 h-4 text-gold mb-3" />
            <p className="factsheet-label mb-1.5">Email</p>
            <p className="font-display text-sm text-foreground group-hover:text-ocean-deep transition-colors">sales@bluedreamsresort.com</p>
          </a>

          <a href="https://www.bluedreamsresort.com" target="_blank" rel="noopener noreferrer" className="factsheet-card p-5 group hover:border-gold transition-colors">
            <Globe className="w-4 h-4 text-gold mb-3" />
            <p className="factsheet-label mb-1.5">Website</p>
            <p className="font-body text-xs text-muted-foreground group-hover:text-foreground transition-colors">bluedreamsresort.com</p>
          </a>
        </div>

        {/* CTA + Socials row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-[0.15em] uppercase font-medium text-muted-foreground hover:text-gold transition-colors duration-200">
                {s.name}
              </a>
            ))}
          </div>
          <a href="https://blue-dreams.rezervasyonal.com/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-2.5 bg-ocean-deep font-body text-[10px] tracking-[0.2em] uppercase font-medium text-primary-foreground hover:bg-gold transition-colors duration-200 rounded-full">
            Book Now <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Footer */}
        <div className="pt-5 border-t border-sand flex flex-col md:flex-row justify-between items-center gap-3">
          <img src={logo} alt="Blue Dreams Resort" className="h-7" />
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Every Dream Starts With Blue — Bodrum / Torba / Türkiye
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
