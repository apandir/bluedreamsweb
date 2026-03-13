import logo from "@/assets/blue-dreams-logo.png";

const ContactSection = () => {
  return (
    <section id="contact" className="section-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="section-number text-gold">10</p>
        <h2 className="factsheet-heading text-4xl md:text-5xl text-ocean-deep mb-6">
          Contact
        </h2>
        <div className="factsheet-divider mb-12" />

        <div className="space-y-8 mb-16">
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-2">Address</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Torba+Mahallesi+Herodot+Bulvarı+No:11+Bodrum+Muğla+Türkiye"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-lg font-bold text-foreground hover:text-gold transition-colors duration-300"
            >
              Torba Mahallesi, Herodot Bulvarı No:11<br />
              Bodrum / Muğla / Türkiye
            </a>
          </div>
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-2">Telephone</p>
            <p className="font-display text-lg font-bold text-foreground">+90 252 337 11 11</p>
          </div>
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-2">Email</p>
            <p className="font-display text-lg font-bold text-foreground">sales@bluedreamsresort.com</p>
          </div>
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-2">Website</p>
            <p className="font-display text-lg font-bold text-foreground">www.bluedreamsresort.com</p>
          </div>
          <div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-gold font-bold mb-2">Online Reservation</p>
            <a
              href="https://blue-dreams.rezervasyonal.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-10 py-4 bg-ocean-deep font-body text-[11px] tracking-[0.25em] uppercase font-bold text-primary-foreground hover:bg-gold transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          {[
            { name: "Facebook", url: "https://www.facebook.com/bluedreamshotel" },
            { name: "Instagram", url: "https://www.instagram.com/bluedreamsresort/" },
            { name: "YouTube", url: "https://www.youtube.com/@bluedreamsresort8738/videos" },
            { name: "WhatsApp", url: "https://wa.me/+905495167803" },
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[11px] tracking-[0.18em] uppercase font-bold text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-sand">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logo} alt="Blue Dreams Resort" className="h-10" />
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
            Every Dream Starts With Blue — Bodrum / Torba / Türkiye
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
