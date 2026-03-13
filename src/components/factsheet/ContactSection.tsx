import logo from "@/assets/blue-dreams-logo.png";

const ContactSection = () => {
  return (
    <section id="contact" className="section-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="section-number text-gold">10</p>
        <h2 className="factsheet-heading text-5xl md:text-6xl text-ocean-deep mb-8">
          Contact
        </h2>
        <div className="factsheet-divider mb-16" />

        <div className="space-y-10 mb-20">
          <div>
            <p className="factsheet-label mb-3">Address</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Torba+Mahallesi+Herodot+Bulvarı+No:11+Bodrum+Muğla+Türkiye"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl text-foreground hover:text-gold transition-colors duration-300"
            >
              Torba Mahallesi, Herodot Bulvarı No:11<br />
              Bodrum / Muğla / Türkiye
            </a>
          </div>
          <div>
            <p className="factsheet-label mb-3">Telephone</p>
            <p className="font-display text-xl text-foreground">+90 252 337 11 11</p>
          </div>
          <div>
            <p className="factsheet-label mb-3">Email</p>
            <p className="font-display text-xl text-foreground">sales@bluedreamsresort.com</p>
          </div>
          <div>
            <p className="factsheet-label mb-3">Website</p>
            <p className="font-display text-xl text-foreground">www.bluedreamsresort.com</p>
          </div>
          <div>
            <p className="factsheet-label mb-3">Online Reservation</p>
            <a
              href="https://blue-dreams.rezervasyonal.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-10 py-4 bg-ocean-deep font-body text-sm tracking-[0.2em] uppercase font-medium text-primary-foreground hover:bg-gold transition-colors duration-300 rounded-full"
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
              className="font-body text-xs tracking-[0.15em] uppercase font-medium text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={logo} alt="Blue Dreams Resort" className="h-10" />
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Every Dream Starts With Blue — Bodrum / Torba / Türkiye
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
