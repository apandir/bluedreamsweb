import bodrumImage from "@/assets/bodrum-location.jpg";

const LocationSection = () => {
  const distances = [
    { place: "Torba Village", distance: "2 km" },
    { place: "Bodrum City Centre", distance: "10 km" },
    { place: "Milas-Bodrum Airport (BJV)", distance: "25 km" },
  ];

  return (
    <section id="location">
      <div className="factsheet-section h-[35vh] min-h-[280px]">
        <img src={bodrumImage} alt="Bodrum coastline" className="absolute inset-0 image-cover" />
        <div className="factsheet-hero-overlay" />
        <div className="relative z-10 flex items-end h-full pb-10 px-6">
          <div className="max-w-4xl mx-auto text-center w-full">
            <p className="section-number text-gold-light">02</p>
            <h2 className="factsheet-heading text-4xl md:text-5xl text-primary-foreground">
              Bodrum / Torba
            </h2>
          </div>
        </div>
      </div>

      <div className="section-dark py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="factsheet-label mb-4">Destination</p>
              <h3 className="factsheet-heading text-3xl md:text-4xl mb-5">
                The Pearl of the Aegean
              </h3>
              <div className="factsheet-divider !mx-0 mb-5" />
              <p className="font-body text-sm leading-relaxed opacity-70 mb-4">
                Bodrum, known in antiquity as Halicarnassus, is home to one of the Seven Wonders of
                the Ancient World — the Mausoleum. Today it stands as Türkiye's most prestigious
                coastal destination, where ancient history meets Mediterranean glamour.
              </p>
              <p className="font-body text-sm leading-relaxed opacity-70">
                Torba Bay, just 10 km from the vibrant Bodrum city centre, offers a tranquil retreat
                nestled along the Aegean coast. The crystal-clear turquoise waters, olive groves,
                and gentle sea breezes create an atmosphere of serene luxury.
              </p>
            </div>
            <div className="space-y-6">
              <div className="accent-line-left">
                <p className="factsheet-label mb-2">Climate</p>
                <p className="font-body text-sm opacity-70">
                  Mediterranean climate with 300+ days of sunshine. Average summer temperature 28°C
                  with refreshing Aegean sea breezes. Sea temperature averages a delightful 24°C.
                </p>
              </div>
              <div className="accent-line-left">
                <p className="factsheet-label mb-2">Address</p>
                <p className="font-body text-sm opacity-70">
                  Torba Mahallesi, Herodot Bulvarı No:11<br />
                  Bodrum / Muğla / Türkiye
                </p>
              </div>
              <div className="accent-line-left">
                <p className="factsheet-label mb-3">Distances</p>
                <div className="space-y-3">
                  {distances.map((d) => (
                    <div key={d.place} className="flex items-center justify-between">
                      <span className="font-body text-sm opacity-60">{d.place}</span>
                      <span className="font-display text-lg text-gold ml-4 whitespace-nowrap">
                        {d.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
