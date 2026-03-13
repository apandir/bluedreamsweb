import logo from "@/assets/blue-dreams-logo.png";

const ContactSection = () => {
  return (
    <section id="contact" className="section-cream py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="section-number text-gold">10</p>
        <h2 className="factsheet-heading text-4xl md:text-5xl text-ocean-deep mb-5">
          Contact
        </h2>
        <div className="factsheet-divider mb-10" />

        <div className="space-y-6 mb-12">
          <div>
            <p className="factsheet-label mb-2">Address</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Torba+Mahallesi+Herodot+Bulvarı+No:11+Bodrum+Muğla+Türkiye" target="_blank" rel="noopener noreferrer" className="font-display text-lg text-foreground hover:text-gold transition-colors duration-300">
              Torba Mahallesi, Herodot Bulvarı No:11<br />Bodrum / Muğla / Türkiye
            </a>
          </div>
          <div>
            <p className="factsheet-label mb-2">Telephone</p>
            <p className="font-display text-lg text-foreground">+90 252 337 11 11</p>
          </div>
          <div>
            <p className="factsheet-label mb-2">Email</p>
            <p className="font-display text-lg text-foreground">sales@bluedreamsresort.com</p>
          </div>
          <div>
            <p className="factsheet-label mb-2">Website</p>
            <p className="font-display text-lg text-foreground">www.bluedreamsresort.com</p>
          </div>
          <div>
            <p className="factsheet-label mb-2">Online Reservation</p>
            <a href="https://blue-dreams.rezervasyonal.com/en/" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-8 py-3 bg-ocean-deep font-body text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground hover:bg-gold transition-colors duration-300 rounded-full">
              Book Now
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { name: "Facebook", url: "https://www.facebook.com/bluedreamshotel" },
            { name: "Instagram", url: "https://www.instagram.com/bluedreamsresort/" },
            { name: "YouTube", url: "https://www.youtube.com/@bluedreamsresort8738/videos" },
            { name: "WhatsApp", url: "https://wa.me/+905495167803" },
          ].map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] tracking-[0.15em] uppercase font-medium text-muted-foreground hover:text-gold transition-colors duration-300">
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <img src={logo} alt="Blue Dreams Resort" className="h-8" />
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Every Dream Starts With Blue — Bodrum / Torba / Türkiye
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
