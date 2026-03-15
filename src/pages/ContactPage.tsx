import { Link } from "react-router-dom";
import heroImg from "@/assets/home-beach.jpg";
import { ChevronRight, MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    window.open(`mailto:sales@bluedreamsresort.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\n\n${formData.message}`)}`, "_blank");
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4">
            Contact
          </h1>
          <p className="font-body text-lg text-primary-foreground/70">
            Get in touch with us
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 font-body text-sm text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary-foreground">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">
            Contact Info
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-16">
            Get in <span className="italic text-accent">Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">Address</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Torba Mahallesi Herodot Bulvarı No:11<br />
                    Bodrum / MUĞLA / TÜRKİYE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:+902523371111" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors block">
                    +90 252 337 11 11
                  </a>
                  <a href="https://wa.me/905495167803" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors block mt-1">
                    WhatsApp: +90 549 516 78 03
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:sales@bluedreamsresort.com" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                    sales@bluedreamsresort.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Reception: 24/7<br />
                    Reservations: 09:00 - 22:00
                  </p>
                </div>
              </div>

              {/* Map Link */}
              <a
                href="https://www.google.com/maps/dir//37.091832,27.4824998/@37.091832,27.4824998,16z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wider uppercase text-accent hover:text-accent/80 transition-colors mt-4"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="font-display text-2xl text-foreground mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-semibold text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-foreground mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-semibold text-foreground mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-foreground mb-2 block">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="Reservation">Reservation</option>
                      <option value="Information">Information</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-semibold text-foreground mb-2 block">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 font-body text-sm font-semibold tracking-wider uppercase bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
