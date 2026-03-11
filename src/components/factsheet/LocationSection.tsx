import bodrumImage from "@/assets/bodrum-location.jpg";

const LocationSection = () => {
  return (
    <section id="location">
      <div className="factsheet-section h-[60vh] min-h-[400px]">
        <img src={bodrumImage} alt="Bodrum coastline" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="factsheet-label mb-4 text-gold-light">02</p>
            <h2 className="factsheet-heading text-4xl md:text-6xl text-primary-foreground">
              Bodrum / Torba
            </h2>
          </div>
        </div>
      </div>

      <div className="section-dark py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="factsheet-label mb-4">Destination</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl mb-6">
                The Pearl of the Aegean
              </h3>
              <div className="factsheet-divider !mx-0 mb-8" />
              <p className="font-body text-sm leading-relaxed opacity-80 mb-6">
                Bodrum, known in antiquity as Halicarnassus, is home to one of the Seven Wonders of
                the Ancient World — the Mausoleum. Today it stands as Türkiye's most prestigious
                coastal destination, where ancient history meets Mediterranean glamour.
              </p>
              <p className="font-body text-sm leading-relaxed opacity-80">
                Torba Bay, just 10 km from the vibrant Bodrum city centre, offers a tranquil retreat
                nestled along the Aegean coast. The crystal-clear turquoise waters, olive groves,
                and gentle sea breezes create an atmosphere of serene luxury.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-gold pl-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Climate</p>
                <p className="font-body text-sm opacity-80">
                  Mediterranean climate with 300+ days of sunshine. Average summer temperature 28°C
                  with refreshing Aegean sea breezes. Sea temperature averages a delightful 24°C.
                </p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Getting Here</p>
                <p className="font-body text-sm opacity-80">
                  25 km from Milas-Bodrum International Airport (BJV). Complimentary airport
                  transfers available upon request. 10 km to Bodrum city centre.
                </p>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-2">Address</p>
                <p className="font-body text-sm opacity-80">
                  Torba Mahallesi, Herodot Bulvarı No:11<br />
                  Bodrum / Muğla / Türkiye
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
