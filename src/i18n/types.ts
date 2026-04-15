export type Language = "en" | "tr" | "ru" | "de" | "ar" | "sv";

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
    amenities: {
      safebox: string;
      hairDryer: string;
      ledTv: string;
      privateBathroom: string;
      wifi: string;
      ac: string;
      coffeeTea: string;
      minibar: string;
      seaView: string;
      infinityPoolView: string;
      bathroomKit: string;
      slippers: string;
    };
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
  // Website pages
  website: {
    navbar: {
      rooms: string;
      restaurantBar: string;
      spa: string;
      contact: string;
      blueConcierge: string;
      onlineReservation: string;
      menu: string;
      factsheet: string;
    };
    footer: {
      ctaLabel: string;
      ctaHeading: string;
      ctaButton: string;
      quickLinks: string;
      contactLabel: string;
      connect: string;
      privacy: string;
      terms: string;
      brandDesc: string;
    };
    home: {
      pearlOfBodrum: string;
      aegeanBlue: string;
      dream: string;
      heroDesc: string;
      discover: string;
      experienceLabel: string;
      experienceHeading: string;
      roomsCard: string;
      roomsCardSub: string;
      restaurantCard: string;
      restaurantCardSub: string;
      activitiesCard: string;
      activitiesCardSub: string;
      natureLabel: string;
      natureHeading: string;
      natureSub: string;
      exploreRooms: string;
      gastronomy: string;
      gastroHeading: string;
      gastroSub: string;
      tasteFlavors: string;
      feelGood: string;
      spaHeading: string;
      spaSub: string;
      spaWellness: string;
      conciergeLabel: string;
      discoverExperience: string;
      thingsToDo: string;
      upcomingEvents: string;
      guestReviews: string;
      kindWords: string;
      fromYou: string;
      reviewsSub: string;
      sustainability: string;
      sustainabilitySub: string;
      howWeDoIt: string;
      locationLabel: string;
      locationSub: string;
      getDirections: string;
      natureAccent: string;
      sustainableAccent: string;
      enjoyAccent: string;
      experienceAccent: string;
      commitmentAccent: string;
      galleryTitle: string;
      gallerySub: string;
      galleryAll: string;
      galleryGeneral: string;
      galleryRooms: string;
      galleryDining: string;
      galleryMeeting: string;
    };
    roomsPage: {
      title: string;
      subtitle: string;
      home: string;
      rooms: string;
      accommodation: string;
      comfortElegance: string;
      roomsCount: string;
      clubRooms: string;
      deluxeRooms: string;
      viewDetails: string;
      findDreamRoom: string;
      bestPrice: string;
      bookNow: string;
      clubRoom: string;
      clubRoomDesc: string;
      clubSeaView: string;
      clubSeaViewDesc: string;
      clubFamily: string;
      clubFamilyDesc: string;
      deluxeSeaView: string;
      deluxeSeaViewDesc: string;
      facilitiesLabel: string;
      servicesLabel: string;
      facilities: { name: string; paid: boolean }[];
      services: { name: string; paid: boolean }[];
      categoryLabels: {
        spaWellness: string;
        waterActivities: string;
        dining: string;
        bars: string;
        entertainment: string;
        generalServices: string;
      };
    };
    diningPage: {
      title: string;
      heroDesc: string;
      ourRestaurants: string;
      cuisine: string;
      guests: string;
      barsLounges: string;
      barsHeading: string;
      bar: string;
      unforgettableEvening: string;
      reservationNote: string;
      reservation: string;
    };
    spaPage: {
      blueDreamsResort: string;
      wellnessSpa: string;
      introP1: string;
      introP2: string;
      introP3: string;
      bookNow: string;
      treatYourself: string;
      ourServices: string;
    };
    meetingsPage: {
      title: string;
      home: string;
      heroDesc: string;
      meetingCard: string;
      meetingCardDesc: string;
      weddingCard: string;
      weddingCardDesc: string;
      eventsCard: string;
      eventsCardDesc: string;
      learnMore: string;
      planEvent: string;
      ctaHeading: string;
      ctaDesc: string;
      contactUs: string;
      venuesTitle: string;
      weddingCta: string;
      whatWeOffer: string;
      eventTypesTitle: string;
      eventsGallery: string;
      eventGala: string;
      eventGalaDesc: string;
      eventLiveMusic: string;
      eventLiveMusicDesc: string;
      eventDining: string;
      eventDiningDesc: string;
      eventCorporate: string;
      eventCorporateDesc: string;
      eventPrivate: string;
      eventPrivateDesc: string;
      eventTeamBuilding: string;
      eventTeamBuildingDesc: string;
    };
    contactPage: {
      title: string;
      subtitle: string;
      home: string;
      contactInfo: string;
      getInTouch: string;
      touchAccent: string;
      address: string;
      phone: string;
      emailLabel: string;
      workingHours: string;
      reception: string;
      reservations: string;
      getDirections: string;
      sendMessage: string;
      fullName: string;
      email: string;
      phoneField: string;
      subject: string;
      selectSubject: string;
      reservationSubject: string;
      informationSubject: string;
      complaintSubject: string;
      otherSubject: string;
      yourMessage: string;
      send: string;
    };
    spaPage: {
      blueDreamsResort: string;
      wellnessSpa: string;
      introP1: string;
      introP2: string;
      introP3: string;
      bookNow: string;
      treatYourself: string;
      ourServices: string;
      services: { title: string; desc: string }[];
    };
  };
}