import logo from "@/assets/blue-dreams-logo.png";

const ContactSection = () => {
  return (
    <section id="contact" className="section-cream py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="factsheet-label mb-4">09</p>
        <h2 className="factsheet-heading text-4xl md:text-5xl text-ocean-deep mb-6">
          Contact
        </h2>
        <div className="factsheet-divider mb-12" />

        <div className="space-y-8 mb-16">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Address</p>
            <p className="font-display text-lg text-foreground">
              Torba Mahallesi, Herodot Bulvarı No:11<br />
              Bodrum / Muğla / Türkiye
            </p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Telephone</p>
            <p className="font-display text-lg text-foreground">+90 252 337 11 11</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Email</p>
            <p className="font-display text-lg text-foreground">sales@bluedreamsresort.com</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Website</p>
            <p className="font-display text-lg text-foreground">www.bluedreamsresort.com</p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Online Reservation</p>
            <a
              href="https://blue-dreams.rezervasyonal.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-8 py-3 bg-ocean-deep font-body text-xs tracking-[0.2em] uppercase text-primary-foreground hover:bg-ocean-medium transition-colors"
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
              className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-ocean-medium transition-colors"
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
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Every Dream Starts With Blue — Bodrum / Torba / Türkiye
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
