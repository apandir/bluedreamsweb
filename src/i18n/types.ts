export type Language = "en" | "tr" | "ru" | "de" | "ar";

export interface Translations {
  // Nav
  nav: {
    overview: string;
    location: string;
    rooms: string;
    beachPools: string;
    dining: string;
    spa: string;
    activities: string;
    meetings: string;
    info: string;
    contact: string;
  };
  // Hero
  hero: {
    tagline: string;
    subtitle: string;
    location: string;
  };
  // Index
  index: {
    contents: string;
    title: string;
    sections: string[];
  };
  // Overview
  overview: {
    sectionTitle: string;
    resort: string;
    heading: string;
    p1: string;
    p2: string;
    distancesLabel: string;
    distances: { place: string; km: string }[];
    stats: { value: string; label: string }[];
  };
  // Location
  location: {
    sectionTitle: string;
    destination: string;
    heading: string;
    p1: string;
    p2: string;
    climate: string;
    climateDesc: string;
    address: string;
    addressValue: string;
    distancesLabel: string;
    distances: { place: string; distance: string }[];
  };
  // Rooms
  rooms: {
    sectionTitle: string;
    accommodation: string;
    heading: string;
    desc: string;
    roomList: { name: string; size: string; description: string }[];
  };
  // Beach & Pools
  beach: {
    sectionTitle: string;
    beachLabel: string;
    heading: string;
    desc: string;
    poolsBeaches: string;
    poolNames: string[];
    ourPools: string;
    poolList: { name: string; detail: string }[];
    footnote: string;
  };
  // Dining
  dining: {
    sectionTitle: string;
    restaurantsLabel: string;
    heading: string;
    restaurants: { name: string; type: string; desc: string; hours: string; location: string }[];
    reservationNote: string;
    barsLabel: string;
    barsHeading: string;
    bars: { name: string; type: string; desc: string; hours: string; location: string }[];
    barsNote: string;
  };
  // Spa
  spa: {
    sectionTitle: string;
    rejuvenation: string;
    heading: string;
    p1: string;
    p2: string;
    services: { title: string; desc: string }[];
  };
  // Activities
  activities: {
    sectionTitle: string;
    desc: string;
    categories: { category: string; items: string[] }[];
    extraCharge: string;
    gallery: string;
    galleryNames: string[];
  };
  // Meetings
  meetings: {
    sectionTitle: string;
    mainHall: string;
    hallName: string;
    hallDesc: string;
    stats: { label: string; unit: string }[];
    tags: string[];
    hallConfigurations: string;
    configHeaders: { section: string; area: string; theater: string; classroom: string; banquet: string; height: string };
    meetingRoomsLabel: string;
    meetingRoomsTitle: string;
    meetingRoomsDesc: string;
    inAllHalls: string;
    amenities: string[];
    celebrationsLabel: string;
    weddingsTitle: string;
    weddingsDesc: string;
    venues: { name: string; capacity: string; desc: string; features: string[] }[];
    outdoorVenue: string;
    weddingServicesLabel: string;
    weddingServices: string[];
    galleryLabel: string;
    galleryAlts: string[];
  };
  // General Info
  general: {
    sectionTitle: string;
    hotelDetails: string;
    info: { label: string; value: string }[];
    complimentaryLabel: string;
    complimentary: string[];
  };
  // Contact
  contact: {
    sectionTitle: string;
    addressLabel: string;
    telephone: string;
    email: string;
    website: string;
    bookNow: string;
    tagline: string;
  };
}
