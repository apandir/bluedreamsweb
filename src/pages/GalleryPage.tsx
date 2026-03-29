import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-resort.jpg";

// Room images from factsheet
import roomClub from "@/assets/room-club.jpg";
import roomClubSeaview from "@/assets/room-club-seaview.jpg";
import roomFamily from "@/assets/room-family.jpg";
import roomDeluxe from "@/assets/room-deluxe-new.jpg";
import roomDeluxeFamily from "@/assets/room-deluxe-family.jpg";
import roomTypeClub from "@/assets/room-type-club.jpg";
import roomTypeClubFamily from "@/assets/room-type-club-family.jpg";
import roomTypeClubSeaview from "@/assets/room-type-club-seaview.jpg";
import roomTypeDeluxe from "@/assets/room-type-deluxe.jpg";

// Restaurant & Bar images from dining section
import diningMain from "@/assets/dining-main.jpg";
import diningSnack from "@/assets/dining-snack.jpg";
import diningLaLocanda from "@/assets/dining-lalocanda.jpg";
import diningHalikarnas from "@/assets/dining-halikarnas.jpg";
import diningLeKebab from "@/assets/dining-lekebab.jpg";
import diningPoolSnacks from "@/assets/dining-poolsnacks.webp";
import diningSunsetBar from "@/assets/dining-sunsetbar.jpg";
import barLobby from "@/assets/bar-lobby.jpg";
import barPool from "@/assets/bar-pool.jpg";
import barBeach from "@/assets/bar-beach.jpg";
import barVitamin from "@/assets/bar-vitamin.jpg";
import barTeaGarden from "@/assets/bar-teagarden.png";

type GalleryImage = {
  url: string;
  title: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  // General (Genel Alanlar) — Aerial views, resort grounds, beach, pools, landscapes
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/07/DJI_0302.jpg", title: "Resort Aerial View", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/07/DJI_0233.jpg", title: "Resort Coastline", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/08/DJI_0261.jpg", title: "Bay Panorama", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/08/DJI_0415.jpg", title: "Resort Overview", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/08/DJI_0492.jpg", title: "Torba Bay Aerial", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/08/DJI_0267.jpg", title: "Resort & Sea", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/08/DJI_0115.jpg", title: "Bird's Eye View", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/08/DJI_0098.jpg", title: "Sunset Aerial", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/08/DJI_0423.jpg", title: "Resort Grounds", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/08/DJI_0255-1.jpg", title: "Coastline View", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/07/DJI_0241.jpg", title: "Aerial Panorama", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/08/21.jpg", title: "Night View", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/INFINITY-POOL-1.jpg", title: "Infinity Pool", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/INFINITY-POOL-2.jpg", title: "Infinity Pool Sunset", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/INFINITY-POOL.jpg", title: "Infinity Pool Panorama", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/SANDY-BEACH-1.jpg", title: "Sandy Beach", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/PLATFORMS-BEACH-.jpg", title: "Beach Platforms", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/WATER-SPORTS-.jpg", title: "Water Sports", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/LIGHTHOUSE.jpg", title: "Lighthouse", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/LIGHT-HOUSE-2.jpg", title: "Lighthouse View", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/08/MER00991.jpg", title: "Garden Area", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/07/MUR5159-2.jpg", title: "Property Grounds", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2025/07/MUR4115.jpg", title: "Resort Details", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/08/DSC03129.jpg", title: "Beach Scene", category: "general" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2023/03/MINI-DISCO-2.jpg", title: "Mini Disco", category: "general" },

  // Rooms — from factsheet room types
  { url: roomClub, title: "Club Room", category: "rooms" },
  { url: roomClubSeaview, title: "Club Room Sea View", category: "rooms" },
  { url: roomFamily, title: "Family Room", category: "rooms" },
  { url: roomDeluxe, title: "Deluxe Room", category: "rooms" },
  { url: roomDeluxeFamily, title: "Deluxe Family Room", category: "rooms" },
  { url: roomTypeClub, title: "Club Room Type", category: "rooms" },
  { url: roomTypeClubFamily, title: "Club Family Room Type", category: "rooms" },
  { url: roomTypeClubSeaview, title: "Club Sea View Type", category: "rooms" },
  { url: roomTypeDeluxe, title: "Deluxe Room Type", category: "rooms" },

  // Restaurants & Bars — from dining section
  { url: diningMain, title: "Main Restaurant", category: "dining" },
  { url: diningSnack, title: "Snack Restaurant", category: "dining" },
  { url: diningPoolSnacks, title: "Pool Snacks", category: "dining" },
  { url: diningLaLocanda, title: "La Locanda", category: "dining" },
  { url: diningHalikarnas, title: "Halikarnas Restaurant", category: "dining" },
  { url: diningLeKebab, title: "Le Kebab", category: "dining" },
  { url: diningSunsetBar, title: "Sunset Bar", category: "dining" },
  { url: barLobby, title: "Lobby Bar", category: "dining" },
  { url: barPool, title: "Pool Bar", category: "dining" },
  { url: barBeach, title: "Beach Bar", category: "dining" },
  { url: barTeaGarden, title: "Tea Garden", category: "dining" },
  { url: barVitamin, title: "Vitamin Bar", category: "dining" },

  // Meeting
  { url: "https://bluedreamsresort.com/wp-content/uploads/2026/01/Bluedreamstanitimkiti_page-0019-1024x725.jpg", title: "İstanbul Hall", category: "meeting" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2026/01/Ekran-goruntusu-2026-01-14-171200-768x448.png", title: "Turunç Meeting Room", category: "meeting" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2026/01/Ekran-goruntusu-2026-01-14-171426-768x453.png", title: "Salamis Meeting Room", category: "meeting" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2026/01/Ekran-goruntusu-2026-01-14-171524-768x450.png", title: "Belek Meeting Room", category: "meeting" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2026/01/Ekran-goruntusu-2026-01-14-171826-768x451.png", title: "Marmaris Meeting Room", category: "meeting" },
  { url: "https://bluedreamsresort.com/wp-content/uploads/2026/01/Ekran-goruntusu-2026-01-14-171917-768x451.png", title: "Stockholm Meeting Room", category: "meeting" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "general", label: "General" },
  { key: "rooms", label: "Rooms" },
  { key: "dining", label: "Restaurants & Bars" },
  { key: "meeting", label: "Meeting" },
];

const GalleryPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setLightboxIndex(newIndex);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-ocean-deep/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 text-shadow-hero">Gallery</h1>
          <p className="font-body text-lg text-primary-foreground/70 text-shadow-sm">Explore our resort through images</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-body text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-colors ${
                activeCategory === cat.key
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((img, i) => (
              <div
                key={img.url}
                className="group relative aspect-[3/2] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-sm font-medium text-primary-foreground">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {lightboxIndex > 0 && (
            <button
              className="absolute left-6 text-primary-foreground/70 hover:text-primary-foreground text-4xl font-light z-10"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            >
              ‹
            </button>
          )}

          {lightboxIndex < filtered.length - 1 && (
            <button
              className="absolute right-6 text-primary-foreground/70 hover:text-primary-foreground text-4xl font-light z-10"
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            >
              ›
            </button>
          )}

          <img
            src={filtered[lightboxIndex].url}
            alt={filtered[lightboxIndex].title}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-primary-foreground/70">
            {filtered[lightboxIndex].title} — {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;