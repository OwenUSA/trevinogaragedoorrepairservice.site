// Todo el contenido del sitio vive aqui. Las paginas y los componentes solo lo pintan.
// Las ciudades, sus resenas y el FAQ se extrajeron del HTML original en la migracion
// a Next.js del 28 de agosto de 2026.

export const site = {
  brand: 'Trevino Garage Door Repair',
  brandFirst: 'Trevino',
  brandRest: 'Garage Door Repair',
  domain: 'trevinogaragedoorrepairservice.site',
  url: 'https://trevinogaragedoorrepairservice.site',
  phone: {
    href: 'tel:+14075592448',
    display: '(407) 559-2448',
    long: '1 (407) 559-2448',
    schema: '+1-407-559-2448',
  },
  email: 'service@trevinogaragedoorrepairservice.site',
  hoursLong: 'Mon – Sat: 7:00 AM – 9:00 PM',
  hoursSunday: 'Sun & holidays: emergency dispatch 24/7',
  brandline: 'Your Local Garage Door Experts',
  heroImage: '/img/hero-garage.jpg',
  priceRange: '$150-$450',
  year: 2026,
  themeColor: '#061a33',
  founded: 2011,
  // OJO: correo de privacidad provisional, sustituir por el real antes de publicar
  privacyEmail: 'privacy@trevinogaragedoorrepairservice.site',
  legalUpdated: 'August 31, 2026',
};

// Sede administrativa: NO es una zona de servicio ni tiene pagina propia.
// Solo sale en la topbar, el pie, Contact Us y el JSON-LD del negocio.
export const hq = {
  name: 'Sanford',
  addr1: '124 Commerce Way, Ste B',
  zip: '32771',
  mapQuery: '124 Commerce Way Ste B Sanford FL 32771',
  label: 'Head Office',
  meta: 'Administration · Scheduling · 24/7 dispatch',
};

export const cities = [
  {
    slug: "Plantation",
    name: "Plantation",
    zip: "33324",
    addr1: "7901 SW 6th Ct, Ste 3201",
    // "dispatched from our ___"
    dispatchedFrom: "Plantation location",
    mapQuery: "7901 SW 6th Ct Ste 3201 Plantation FL 33324",
    tag: "Broward County",
    coverageMeta: "Serving Plantation, Sunrise, Davie & Fort Lauderdale",
    whyParagraph: "Every technician dispatched from our Plantation location is licensed, background-checked and rolls out with a fully stocked service vehicle, so most Plantation jobs are finished in a single visit.",
    localNote: "Plantation homes built in the 70s and 80s often still run their original tracks and undersized springs. When we service an older door here we check the cycle rating of the springs and the condition of the rollers, because replacing worn hardware now costs far less than a door that comes off its tracks later.",
    reviews: [
      { initials: "JS", name: "Jorge S.", place: "Plantation, FL", text: "We manage three commercial units and Trevino handles every rolling door. Response time is consistently fast and the invoices always match the quote." },
      { initials: "AP", name: "Amanda P.", place: "Plantation, FL", text: "The opener died the night before a trip. They came out the same evening, replaced the logic board and had it working in under an hour." },
      { initials: "MT", name: "Michael T.", place: "Plantation, FL", text: "Door had jumped the track and looked like a disaster. The technician realigned it, replaced two rollers and it runs quieter than before." },
    ],
  },
  {
    slug: "NorthPalmBeach",
    name: "North Palm Beach",
    zip: "33410",
    addr1: "4440 PGA Blvd, Ste 3017",
    // "dispatched from our ___"
    dispatchedFrom: "PGA Boulevard location",
    mapQuery: "4440 PGA Blvd Ste 3017 Palm Beach Gardens FL 33410",
    tag: "Palm Beach County",
    coverageMeta: "Serving Palm Beach Gardens, Jupiter & Juno Beach",
    whyParagraph: "Every technician dispatched from our PGA Boulevard location is licensed, background-checked and rolls out with a fully stocked service vehicle, so most North Palm Beach jobs are finished in a single visit.",
    localNote: "Homes east of US-1 sit close enough to the ocean that standard springs, cables and hinges corrode years earlier than inland hardware. On coastal properties we install galvanized springs, stainless fasteners and sealed rollers so the repair actually lasts.",
    reviews: [
      { initials: "PH", name: "Patricia H.", place: "North Palm Beach, FL", text: "Salt air had eaten the cables on our beach house door. They replaced everything with galvanized hardware and explained exactly why it failed." },
      { initials: "GW", name: "Gregory W.", place: "North Palm Beach, FL", text: "Called at 9 PM when the door froze halfway open. Someone was out within the hour and secured it that night, then finished the repair the next morning." },
      { initials: "EV", name: "Elena V.", place: "North Palm Beach, FL", text: "Quiet belt-drive opener installed and connected to my phone. The technician walked me through the app before he left." },
    ],
  },
  {
    slug: "DelrayBeach",
    name: "Delray Beach",
    zip: "33444",
    addr1: "55 SE 2nd Ave, Ste 4004",
    // "dispatched from our ___"
    dispatchedFrom: "Delray Beach office",
    mapQuery: "55 SE 2nd Ave Ste 4004 Delray Beach FL 33444",
    tag: "Palm Beach County",
    coverageMeta: "Serving Delray Beach, Boynton Beach & Highland Beach",
    whyParagraph: "Every technician dispatched from our Delray Beach office is licensed, background-checked and rolls out with a fully stocked service vehicle, so most Delray Beach jobs are finished in a single visit.",
    localNote: "Delray mixes historic bungalows downtown with large villa communities out west, and the two need very different work. Older homes often need track and header reinforcement before a modern insulated door goes in, while villa communities usually want HOA-approved panel styles and quiet belt-drive openers for shared walls.",
    reviews: [
      { initials: "KB", name: "Karen B.", place: "Delray Beach, FL", text: "Second opinion after another company tried to sell me a whole new door. Trevino replaced two rollers and a spring and it has worked perfectly since." },
      { initials: "AR", name: "Anthony R.", place: "Delray Beach, FL", text: "Straightforward pricing, no upsell, and they texted when the technician was fifteen minutes out. That alone made my day easier." },
      { initials: "DF", name: "Denise F.", place: "Delray Beach, FL", text: "The safety sensors kept reversing the door. He realigned them, tightened the tracks and tested it a dozen times before leaving." },
    ],
  },
  {
    slug: "CoralGables",
    name: "Coral Gables",
    zip: "33143",
    addr1: "1541 Sunset Dr, Ste B-39",
    // "dispatched from our ___"
    dispatchedFrom: "Sunset Drive location",
    mapQuery: "1541 Sunset Dr Ste B-39 Coral Gables FL 33143",
    tag: "Miami-Dade County",
    coverageMeta: "Serving all of Miami, Coconut Grove, Kendall & Pinecrest",
    whyParagraph: "Every technician dispatched from our Sunset Drive location is licensed, background-checked and rolls out with a fully stocked service vehicle, so most Coral Gables and Miami jobs are finished in a single visit.",
    localNote: "Miami-Dade is a High-Velocity Hurricane Zone, so every new door we install here carries a Miami-Dade County Product Approval and the correct wind-load rating for the opening. We handle the permit paperwork and the final inspection, and we can reinforce an existing door with approved bracing when a full replacement is not in the budget.",
    reviews: [
      { initials: "CR", name: "Carolina R.", place: "Coral Gables, FL", text: "They replaced a twenty-year-old chain opener with a quiet belt drive and set up the app. You would never know they had been here." },
      { initials: "LA", name: "Luis A.", place: "Coral Gables, FL", text: "Needed a hurricane-rated door with the county approval paperwork. They handled the permit and the inspection without me chasing anyone." },
      { initials: "MG", name: "Marta G.", place: "Coral Gables, FL", text: "Called about a broken spring in the morning and it was fixed by the afternoon. Honest people, clean work." },
    ],
  },
];

export const getCity = (slug) => cities.find((c) => c.slug === slug);

// Navbar estandar del sitio: cuatro paginas reales, sin anclas.
// Home ya existia; About Us, Contact Us y Privacy Policy son paginas propias.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export const heroPoints = [
  'Same-day appointments',
  'Licensed & insured',
  'Upfront flat pricing',
  'Warranty on parts & labor',
];

export const heroCardItems = [
  { icon: 'clock', strong: 'Fast response', text: ' — most calls answered in under 60 seconds.' },
  { icon: 'shieldCheck', strong: 'Free estimate', text: ' on every repair before work begins.' },
  { icon: 'truck', strong: 'Stocked trucks', text: ' so most repairs finish in one visit.' },
  { icon: 'pin', strong: '4 service hubs', text: ' covering Miami and all of South Florida.' },
];

export const trustItems = [
  { icon: 'clock', title: '24/7 Emergency', text: 'Nights, weekends & holidays' },
  { icon: 'shieldPlain', title: 'Licensed & Insured', text: 'Background-checked techs' },
  { icon: 'dollar', title: 'Upfront Pricing', text: 'No hidden fees, ever' },
  { icon: 'trophy', title: 'Warranty Backed', text: 'Parts & labor guaranteed' },
];

export const homeServices = [
  {
    icon: 'grid',
    title: 'Garage Door Spring Repair',
    text: 'Torsion and extension springs replaced with high-cycle, code-compliant parts. We always recommend replacing springs in pairs so the door stays balanced.',
    bullets: ['Broken torsion spring replacement', 'Extension spring & safety cable service', 'Door balance and tension adjustment'],
  },
  {
    icon: 'opener',
    title: 'Opener Repair & Installation',
    text: 'Chain, belt and screw-drive openers diagnosed, repaired or replaced. We install quiet belt-drive and Wi-Fi smart openers from the brands you already trust.',
    bullets: ['Motor, gear & circuit board repair', 'Safety sensor alignment', 'Remote, keypad & smart app setup'],
  },
  {
    icon: 'gear',
    title: 'Cables, Rollers & Tracks',
    text: 'Frayed cables, cracked rollers and bent tracks are the most common cause of a door coming off its rails. We straighten, realign or replace as needed.',
    bullets: ['Off-track door correction', 'Nylon roller upgrades', 'Hinge, bracket & drum replacement'],
  },
  {
    icon: 'doorHouse',
    title: 'New Garage Door Installation',
    text: 'Steel, aluminum, wood and glass doors built for Florida weather — including hurricane-rated, wind-load approved models for coastal properties.',
    bullets: ['Free in-home design consultation', 'Insulated & impact-rated options', 'Full haul-away of your old door'],
  },
  {
    icon: 'shieldBar',
    title: 'Commercial & Rolling Doors',
    text: 'Warehouses, storefronts and HOA properties. We service rolling steel doors, sectional doors, gate operators and high-cycle commercial systems.',
    bullets: ['Rolling steel & sectional service', 'Loading dock & high-cycle springs', 'Preventive maintenance contracts'],
  },
  {
    icon: 'bolt',
    title: '24/7 Emergency Service',
    text: 'A garage door stuck open leaves your home exposed. Our emergency crews run nights, weekends and holidays across the entire coverage area.',
    bullets: ['Door stuck open or closed', 'Storm & impact damage', 'Temporary securing of the opening'],
  },
];

export const whyChecklist = [
  { strong: 'Flat, upfront pricing', text: 'You approve the total before we pick up a tool.' },
  { strong: 'One-visit repairs', text: 'Springs, rollers, cables and openers ride on every truck.' },
  { strong: 'Florida-ready materials', text: 'Galvanized, corrosion-resistant hardware for coastal humidity and salt air.' },
  { strong: 'Written warranty', text: 'Every repair is backed on both parts and labor.' },
];

export const steps = [
  { n: 1, title: 'Call or Request', text: 'Tell us what the door is doing. We book a same-day or next-morning window that fits your schedule.' },
  { n: 2, title: 'Full Inspection', text: 'The technician tests springs, cables, tracks, rollers and the opener — a 25-point check, not a guess.' },
  { n: 3, title: 'Upfront Quote', text: 'You get a flat price with options explained in plain English. Nothing is done until you say yes.' },
  { n: 4, title: 'Repair & Test', text: 'We complete the work, balance the door, test the safety reverse and clean up before we leave.' },
];

export const homeReviews = [
  { initials: "DM", name: "Daniel M.", place: "Boca Raton, FL", text: "My torsion spring snapped on a Sunday morning and my car was trapped inside. Trevino had a tech at the house in about two hours and both springs were replaced before lunch. Fair price, no drama." },
  { initials: "CR", name: "Carolina R.", place: "Coral Gables, FL", text: "They replaced a 20-year-old chain opener with a quiet belt drive and set up the phone app. The technician explained everything and cleaned up perfectly. You would never know they were here." },
  { initials: "JS", name: "Jorge S.", place: "Plantation, FL", text: "We manage three commercial units and Trevino handles all of the rolling doors. Response time is consistently fast and the invoices always match the quote. Easy company to work with." },
];

export const areaTags = [
  "Miami",
  "Miami Beach",
  "Coral Gables",
  "Kendall",
  "Pinecrest",
  "Doral",
  "Hialeah",
  "Aventura",
  "Fort Lauderdale",
  "Plantation",
  "Sunrise",
  "Davie",
  "Boca Raton",
  "Delray Beach",
  "Boynton Beach",
  "West Palm Beach",
  "Palm Beach Gardens",
  "Jupiter",
];

export const faq = [
  {
    q: "How fast can you get to my house?",
    a: "In most of our coverage area we offer same-day service, and emergency calls are typically handled within two to four hours. Because we dispatch from four locations between Miami and North Palm Beach, there is usually a technician close to you at any hour.",
  },
  {
    q: "How much does a garage door spring replacement cost?",
    a: "Pricing depends on the door size, spring type and cycle rating, so we give you a flat quote after the inspection and before any work starts. We recommend replacing both springs at the same time — they wear at the same rate, and doing them together keeps the door balanced and avoids a second service call.",
  },
  {
    q: "Can I replace a broken torsion spring myself?",
    a: "We strongly advise against it. A torsion spring stores enough energy to cause serious injury when it releases, and the job requires winding bars and proper tensioning. It is the single most common DIY garage door injury and a technician can do it safely in under an hour.",
  },
  {
    q: "Do you install hurricane-rated garage doors?",
    a: "Yes. We install wind-load and impact-rated doors that meet Florida building code requirements, including Miami-Dade County approved products for coastal and high-velocity hurricane zones.",
  },
  {
    q: "Do you service commercial properties and HOAs?",
    a: "We do. We handle rolling steel doors, sectional commercial doors, gate operators and high-cycle systems, and we offer scheduled preventive maintenance for property managers, warehouses and condo associations.",
  },
  {
    q: "Is your work under warranty?",
    a: "Every repair and installation comes with a written warranty covering both parts and labor. The exact term depends on the component — your technician will list it on the invoice before you sign.",
  },
];

// Las 6 tarjetas de servicio de las paginas de ciudad
export const cityServices = [
  {
    icon: 'wrench',
    title: 'Garage Door Repair',
    sub: 'Fast, reliable repairs for all makes and models.',
    checks: ['Same-day service', 'All major brands', '120-day warranty'],
  },
  {
    icon: 'doorHouse',
    title: 'Garage Door Installation',
    sub: 'Professional installation of top-quality doors.',
    checks: ['Free consultation', 'Hurricane-rated options', 'Manufacturer warranty'],
  },
  {
    icon: 'bolt',
    title: 'Emergency Service',
    sub: '24/7 garage door service when you need it most.',
    checks: ['24/7 dispatch', 'Rapid response', 'Upfront pricing'],
  },
  {
    icon: 'shieldCheck',
    title: 'Preventive Maintenance',
    sub: 'Annual tune-ups that extend the life of your door.',
    checks: ['25-point inspection', 'Lubrication & balancing', 'Safety reverse testing'],
  },
  {
    icon: 'opener',
    title: 'Opener Repair & Install',
    sub: 'Smart, quiet and reliable opener service.',
    checks: ['All major opener brands', 'Wi-Fi enabled openers', 'Battery backup setup'],
  },
  {
    icon: 'grid',
    title: 'Spring Replacement',
    sub: 'Torsion and extension springs replaced safely.',
    checks: ['High-cycle springs', 'Balanced installs', 'Same-day fixes'],
  },
];

export const mapEmbed = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=m&z=15&output=embed`;

export const directionsUrl = (query) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const mapsSearchUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

/* ==========================================================================
   About Us  (app/about-us)
   ========================================================================== */

export const aboutStats = [
  { value: '4,800+', label: 'Garage doors serviced in South Florida' },
  { value: '15 yrs', label: 'Working the same three counties' },
  { value: '4', label: 'Service hubs, Coral Gables to North Palm Beach' },
  { value: '24/7', label: 'Emergency dispatch, holidays included' },
];

export const aboutStory = [
  'Trevino Garage Door Repair started in a single truck out of Boca Raton, run by a technician who was tired of watching homeowners get sold a whole new door when a forty-dollar roller was the actual problem. The rule from that first year has not changed: diagnose the door in front of you, quote the repair it needs, and do not touch anything until the customer has said yes to a number.',
  'Today our head office sits in Sanford and we dispatch from four service locations between Coral Gables and North Palm Beach. The trucks are bigger and there are more of them, but the work is still done by technicians who live in these neighborhoods — people who know which Plantation subdivisions still run their original 1980s springs, which Coral Gables permits need Miami-Dade product approval, and why a beach house in North Palm Beach eats standard cables in three years.',
  'We are not a call center that sells your address to whoever bids highest. When you call, you reach our own dispatch, and the technician who shows up is on our payroll, background-checked and carrying the parts for the job you described on the phone.',
];

export const aboutValues = [
  {
    icon: 'dollar',
    title: 'The quote is the price',
    text: 'You approve a flat total before a single tool comes off the truck. If we open the door and find something else, we stop and re-quote — we never add it to the invoice and tell you afterwards.',
  },
  {
    icon: 'truck',
    title: 'One visit, not three',
    text: 'Springs, cables, rollers, hinges, drums, logic boards and the common opener models ride on every truck. The overwhelming majority of our calls are finished the day we arrive.',
  },
  {
    icon: 'shieldPlain',
    title: 'Our own technicians',
    text: 'No subcontractors and no lead-selling. Every technician is licensed, insured, background-checked and trained on our own bench before they are sent to a customer alone.',
  },
  {
    icon: 'shieldCheck',
    title: 'Built for Florida',
    text: 'Galvanized springs, stainless fasteners and sealed rollers near the coast, and wind-load rated doors with the county approval paperwork where code requires it. Inland hardware fails early here and we stopped installing it years ago.',
  },
  {
    icon: 'clock',
    title: 'Someone answers at 3 a.m.',
    text: 'A door stuck open is an open house. Our emergency line runs nights, weekends and holidays, and it is answered by a person who can dispatch, not a voicemail box.',
  },
  {
    icon: 'trophy',
    title: 'We come back if it fails',
    text: 'Every repair carries a written warranty on parts and labor. If something we installed fails inside that window, we return and make it right at no charge. No restocking fees, no argument.',
  },
];

export const aboutTimeline = [
  { year: '2011', title: 'One truck in Boca Raton', text: 'Founded as a single-technician residential repair service working Boca Raton and Delray Beach.' },
  { year: '2015', title: 'Broward and the commercial side', text: 'The Plantation hub opened and we started servicing rolling steel doors, loading docks and HOA properties.' },
  { year: '2019', title: 'Into Miami-Dade', text: 'The Coral Gables location opened and we became a licensed installer of Miami-Dade approved, wind-load rated doors.' },
  { year: '2023', title: 'One dispatch radius', text: 'North Palm Beach completed the map. Every address from Coral Gables to Jupiter is now inside a single dispatch radius.' },
  { year: '2026', title: 'Head office in Sanford', text: 'Administration, scheduling and dispatch moved to our Sanford office. The service crews and the coverage area did not change.' },
];

/* ==========================================================================
   Contact Us  (app/contact-us)
   ========================================================================== */

export const contactChannels = [
  {
    icon: 'phone',
    title: 'Call us — fastest',
    lines: ['Answered 24/7, including holidays', 'Most calls picked up in under 60 seconds'],
    cta: 'phone',
  },
  {
    icon: 'mailSquare',
    title: 'Email us',
    lines: ['Quotes, invoices, warranty questions', 'Replies within one business day'],
    cta: 'email',
  },
  {
    icon: 'pin',
    title: 'Visit an office',
    lines: ['Four service offices across the three counties', 'Head office in Sanford for admin and billing'],
    cta: 'offices',
  },
];

export const contactBeforeYouCall = [
  'The city and ZIP where the door is — it tells us which hub is closest to you.',
  'What the door is doing: stuck open, stuck closed, off its track, loud, or reversing on its own.',
  'Whether you heard a bang. A loud bang almost always means a torsion spring, and we load the right size before leaving.',
  'The opener brand if you can see it, and roughly how old the door is.',
  'A photo of the spring bar above the door, if it is safe to take one.',
];

export const officeHours = [
  { label: 'Monday – Friday', value: '7:00 AM – 9:00 PM' },
  { label: 'Saturday', value: '7:00 AM – 9:00 PM' },
  { label: 'Sunday & holidays', value: 'Emergency dispatch' },
  { label: 'Emergency calls', value: 'Answered 24/7' },
];
