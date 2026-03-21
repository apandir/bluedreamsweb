import heroImg from "@/assets/home-hero.jpg";
import roomsImg from "@/assets/home-rooms-card.jpg";
import restaurantImg from "@/assets/home-restaurant-card.jpg";
import activitiesImg from "@/assets/home-activities-card.jpg";
import natureImg from "@/assets/home-nature.jpg";
import gastro1Img from "@/assets/home-gastronomy-1.jpg";
import gastro2Img from "@/assets/home-gastronomy-2.jpg";
import spaImg from "@/assets/home-spa.jpg";
import { Link } from "react-router-dom";
import { ChevronDown, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const reviews = [
{ name: "Ayşe Yılmaz", text: "We chose it for our honeymoon and enjoyed every moment.", source: "Google Review" },
{ name: "Caner Erkin", text: "Best location in Torba.", source: "Google Review" },
{ name: "Selin Demir", text: "Wonderful week with our family.", source: "Google Review" }];


const nearbyPlaces = [
{ name: "Bodrum Castle & Underwater Museum", category: "History & Culture", distance: "10 km", desc: "Historic castle built by Knights of St. John." },
{ name: "Yalıkavak Marina", category: "Luxury", distance: "18 km", desc: "World brands, gourmet restaurants and luxury yachts." },
{ name: "Ancient Theatre", category: "Scenic", distance: "9 km", desc: "Dating back to 4th century BC." }];


const events = [
{ date: "15", month: "JUL", title: "Sunset Jazz Sessions", time: "19:30 - 22:00", place: "Pier Bar", desc: "Enchanting harmony of saxophone." },
{ date: "16", month: "JUL", title: "Aegean Herbs Workshop", time: "14:00 - 16:00", place: "La Gondola Garden", desc: "Discover local herbs." },
{ date: "Every", month: "DAY", title: "Morning Flow Yoga", time: "08:00 - 09:00", place: "Infinity Pool Terrace", desc: "Yoga session to start the day refreshed." }];


const HomePage = () => {
  const { t } = useLanguage();
  const h = t.website.home;

  const experienceCards = [
  { title: h.roomsCard, subtitle: h.roomsCardSub, image: roomsImg, link: "/rooms" },
  { title: h.restaurantCard, subtitle: h.restaurantCardSub, image: restaurantImg, link: "/dining" },
  { title: h.activitiesCard, subtitle: h.activitiesCardSub, image: activitiesImg, link: "/spa" }];


  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden pb-24">
        <img src={heroImg} alt="Blue Dreams Resort aerial view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-[80px]">
            <iframe
              src="https://www.youtube-nocookie.com/embed/Et5yM-tW7_0?autoplay=1&mute=1&loop=1&playlist=Et5yM-tW7_0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&enablejsapi=0&cc_load_policy=0&fs=0&color=white&origin=https://bluedreamsweb.lovable.app"
              title="Blue Dreams Resort Video"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full border-0"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-ocean-deep/40" />
        <div className="relative z-10 text-center px-6 max-w-2xl mb-8">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-3 text-shadow-hero">Blue Dreams Resort</h1>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl italic text-accent text-shadow-hero">{h.pearlOfBodrum}</p>
          <p className="font-body text-sm md:text-base text-primary-foreground/70 mt-5 max-w-md mx-auto leading-relaxed text-shadow-sm">{h.heroDesc}</p>
        </div>
        <a href="#experience" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground transition-colors z-10">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">{h.discover}</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent text-center mb-4">{h.experienceLabel}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-center max-w-3xl mx-auto mb-16">{h.experienceHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experienceCards.map((card) =>
            <Link key={card.title} to={card.link} className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-body text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground mb-2 text-shadow-sm">{card.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/70 text-shadow-sm">{card.subtitle}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Nature & Comfort Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img src={natureImg} alt="Room with sea view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 text-shadow-sm">{h.natureLabel}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground max-w-lg mb-6 text-shadow-hero">
            {h.natureHeading}{" "}<span className="italic text-accent">{h.dream.toLowerCase() === "dream" ? "nature" : h.dream}</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-md mb-8 text-shadow-sm">{h.natureSub}</p>
          <Link to="/rooms" className="inline-block font-body text-sm font-semibold tracking-wider uppercase border border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground px-8 py-3 rounded-full transition-colors">
            {h.exploreRooms}
          </Link>
        </div>
      </section>

      {/* Gastronomy Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={gastro1Img} alt="Italian à la carte" className="rounded-2xl w-full aspect-[3/4] object-cover" />
              <img alt="Open buffet" className="rounded-2xl w-full aspect-[3/4] object-cover mt-12" src="/lovable-uploads/7c23beb7-eecb-4669-a3b4-ce1df62f0db9.jpg" />
            </div>
            <div>
              <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{h.gastronomy}</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                {h.gastroHeading}{" "}<span className="italic text-accent">Sustainable.</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">{h.gastroSub}</p>
              <Link to="/dining" className="inline-block font-body text-sm font-semibold tracking-wider uppercase border border-foreground/30 hover:border-foreground text-foreground px-8 py-3 rounded-full transition-colors">
                {h.tasteFlavors}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img src={spaImg} alt="Infinity pool" className="absolute inset-0 w-full h-full object-cover" />
<div className="absolute inset-0 bg-ocean-deep/55" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4 text-shadow-sm">{h.feelGood}</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground max-w-lg mb-6 text-shadow-hero">
            {h.spaHeading}{" "}<span className="italic text-accent">Enjoy.</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-md mb-8 text-shadow-sm">{h.spaSub}</p>
          <Link to="/spa" className="inline-block font-body text-sm font-semibold tracking-wider uppercase border border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground px-8 py-3 rounded-full transition-colors">
            {h.spaWellness}
          </Link>
        </div>
      </section>

      {/* AI Concierge / Discover Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent text-center mb-4">{h.conciergeLabel}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-16">
            {h.discoverExperience}{" "}<span className="italic text-accent">Experience</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-body text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-8">{h.thingsToDo}</h3>
              <div className="flex flex-col gap-6">
                {nearbyPlaces.map((place) =>
                <div key={place.name} className="flex gap-5 p-5 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-1">
                      <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-accent">{place.category}</span>
                      <h4 className="font-display text-lg text-foreground mt-1 mb-1">{place.name}</h4>
                      <p className="font-body text-sm text-muted-foreground">{place.desc}</p>
                    </div>
                    <div className="flex items-start">
                      <span className="font-body text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{place.distance}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-body text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-8">{h.upcomingEvents}</h3>
              <div className="flex flex-col gap-6">
                {events.map((event) =>
                <div key={event.title} className="flex gap-5 p-5 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center justify-center bg-accent/10 rounded-lg px-4 py-3 min-w-[60px]">
                      <span className="font-body text-xl font-bold text-accent leading-none">{event.date}</span>
                      <span className="font-body text-[10px] font-semibold tracking-wider uppercase text-accent/70">{event.month}</span>
                    </div>
                    <div>
                      <h4 className="font-display text-lg text-foreground mb-1">{event.title}</h4>
                      <p className="font-body text-xs text-muted-foreground mb-1">{event.time} · {event.place}</p>
                      <p className="font-body text-sm text-muted-foreground">{event.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 md:py-32 section-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent text-center mb-4">{h.guestReviews}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-4">
            {h.kindWords}{" "}<span className="italic text-accent">{h.fromYou}</span>
          </h2>
          <p className="font-body text-base text-muted-foreground text-center mb-6">{h.reviewsSub}</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className="font-display text-5xl text-foreground">9.4</span>
            <div>
              <p className="font-body text-xs text-muted-foreground">Booking.com Score</p>
              <p className="font-body text-xs text-muted-foreground">/ 10</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) =>
            <div key={review.name} className="bg-card rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="font-body text-base text-foreground italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{review.source}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <img src={natureImg} alt="Nature sustainability" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4 text-shadow-hero">
            {h.sustainability}{" "}<span className="italic text-accent">Commitment</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-lg mx-auto mb-8 text-shadow-sm">{h.sustainabilitySub}</p>
          <button className="font-body text-sm font-semibold tracking-wider uppercase border border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground px-8 py-3 rounded-full transition-colors">
            {h.howWeDoIt}
          </button>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-4">{h.locationLabel}</p>
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">Blue Dreams Resort</h3>
          <p className="font-body text-base text-muted-foreground mb-2">{h.locationSub}</p>
          <p className="font-body text-sm text-muted-foreground mb-8">
            Torba Mahallesi, Herodot Bulvarı No:11<br />Bodrum / MUĞLA
          </p>
          <a href="https://www.google.com/maps/dir//37.091832,27.4824998/@37.091832,27.4824998,16z" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wider uppercase text-accent hover:text-accent/80 transition-colors">
            <MapPin className="w-4 h-4" />{h.getDirections}
          </a>
        </div>
      </section>
    </main>);

};

export default HomePage;