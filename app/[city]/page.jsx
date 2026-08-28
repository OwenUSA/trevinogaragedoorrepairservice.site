import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer, { CallBar, Review } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  getCity,
  cityServices,
  mapEmbed,
  directionsUrl,
  mapsSearchUrl,
} from '../../data/site';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const title = `Garage Door Repair in ${c.name}, FL ${c.zip} | ${site.brandFirst}`;
  const description = `Same-day garage door repair in ${c.name}, FL. Spring replacement, opener repair, off-track doors and new installs. Upfront pricing, 24/7 emergency dispatch.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/${c.slug}/` },
    openGraph: {
      title,
      description,
      url: `/${c.slug}/`,
      images: [
        {
          url: site.heroImage,
          width: 1920,
          height: 1439,
          alt: `Residential garage door serviced by ${site.brand} in ${c.name}, FL`,
        },
      ],
    },
    twitter: { title, description, images: [site.heroImage] },
    other: {
      'geo.region': 'US-FL',
      'geo.placename': c.name,
    },
  };
}

function jsonLd(c) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${site.brand} - ${c.name}`,
    url: `${site.url}/${c.slug}`,
    telephone: site.phone.schema,
    email: site.email,
    priceRange: site.priceRange,
    parentOrganization: {
      '@type': 'Organization',
      name: site.brand,
      url: `${site.url}/`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.addr1,
      addressLocality: c.name,
      addressRegion: 'FL',
      postalCode: c.zip,
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '21:00',
      },
    ],
    areaServed: { '@type': 'City', name: c.name },
  };
}

const features = [
  { title: 'Same-Day Service', text: 'Most repairs completed in a single visit.' },
  { title: 'Licensed & Insured', text: 'Fully bonded local technicians.' },
  { title: 'Upfront Pricing', text: 'Written quote before any work begins.' },
  { title: '24/7 Emergency', text: 'Available nights, weekends and holidays.' },
];

export default async function CityPage({ params }) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();
  const others = cities.filter((o) => o.slug !== c.slug);

  return (
    <>
      <link rel="preload" as="image" href={site.heroImage} fetchPriority="high" />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header variant="city" />

      <main id="main">

      {/* ============ HERO ============ */}
      <section className="hero hero--loc">
        <div className="container hero__loc-inner">
          <div className="hero__copy">
            <p className="crumbs">
              <Link href="/#areas">Locations</Link>
              <span>/</span>
              {c.name}
            </p>
            <span className="pin-badge">
              <Icon name="pin" />
              FL &middot; {c.zip}
            </span>
            <h1>
              Garage Door Repair in{' '}
              <span>
                {c.name} {c.zip}
              </span>
            </h1>
            <p className="hero__desc">
              Rated a <strong>top-reviewed garage door repair company</strong> in {c.name}, FL{' '}
              {c.zip}. From snapped springs and frayed cables to noisy openers, off-track panels and
              full new-door installation, our certified {c.name} technicians deliver{' '}
              <em>same-day service, upfront pricing and a 120-day workmanship warranty</em> on every
              repair.
            </p>

            <div className="hero__cta">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                Call {site.phone.long}
              </a>
              <a
                className="btn btn--ghost btn--lg"
                href={directionsUrl(c.mapQuery)}
                target="_blank"
                rel="noopener"
              >
                <Icon name="navigation" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="feature-row">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-card__top">
                  <Icon name="check" />
                  <strong>{f.title}</strong>
                </div>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MAP + LOCATION DETAILS ============ */}
      <section className="section" id="contact">
        <div className="container loc-grid">
          <div className="map-embed">
            <iframe
              title={`${site.brand} - ${c.name} office map`}
              src={mapEmbed(c.mapQuery)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="detail-card">
            <h2>Location Details</h2>
            <ul className="detail-list">
              <li>
                <Icon name="pin" />
                <div>
                  <strong>Address</strong>
                  <span>
                    {c.addr1}
                    <br />
                    {c.name}, FL {c.zip}
                  </span>
                </div>
              </li>
              <li>
                <Icon name="phone" />
                <div>
                  <strong>Phone</strong>
                  <a href={site.phone.href}>{site.phone.long}</a>
                </div>
              </li>
              <li>
                <Icon name="mail" />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <Icon name="clock" />
                <div>
                  <strong>Hours</strong>
                  <span>
                    {site.hoursLong}
                    <br />
                    {site.hoursSunday}
                  </span>
                </div>
              </li>
            </ul>
            <a
              className="btn btn--blue btn--block"
              href={mapsSearchUrl(c.mapQuery)}
              target="_blank"
              rel="noopener"
            >
              <Icon name="externalLink" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="section section--soft" id="why">
        <div className="container feature-split feature-split--flip">
          <div
            className="photo photo--why"
            role="img"
            aria-label={`${site.brand} technician working on a garage door in ${c.name}, FL`}
          >
            <span className="photo__label">{c.name} service crew</span>
          </div>
          <div className="feature-split__text">
            <h2>
              Why {c.name} chooses {site.brand}
            </h2>
            <p>{c.whyParagraph}</p>
            <ul className="check-pills">
              {[
                `Serving all of ${c.name}, FL ${c.zip} and surrounding neighborhoods`,
                'Licensed, bonded and insured local technicians',
                'Upfront pricing — no hidden fees, ever',
                '120-day workmanship warranty on every repair',
                '24/7 emergency dispatch, including weekends and holidays',
              ].map((t) => (
                <li key={t}>
                  <Icon name="check" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="section">
        <div className="container feature-split">
          <div className="feature-split__text">
            <h2>Fair, transparent pricing in {c.name}</h2>
            <p>
              No hidden fees, no surprise charges. Every {c.name} job starts with a written quote
              &mdash; and the final bill matches it.
            </p>
            <ul className="check-pills">
              {[
                'Free on-site estimates',
                'Written quote before any work begins',
                `Most repairs between ${site.priceRange.split('-')[0]} and ${site.priceRange.split('-')[1]}`,
                'Warranty-backed parts and labor',
              ].map((t) => (
                <li key={t}>
                  <Icon name="check" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="photo photo--pricing"
            role="img"
            aria-label="Close-up of garage door springs and hardware being replaced"
          >
            <span className="photo__label">Spring &amp; hardware replacement</span>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section section--soft" id="services">
        <div className="container">
          <div className="section-head">
            <h2>Our Services</h2>
            <p>Everything your garage door needs, under one roof.</p>
          </div>
          <div className="grid grid--3">
            {cityServices.map((s) => (
              <article className="svc-card" key={s.title}>
                <span className="svc-icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p className="svc-card__sub">{s.sub}</p>
                <ul className="svc-checks">
                  {s.checks.map((ch) => (
                    <li key={ch}>
                      <Icon name="check" strokeWidth={3} /> {ch}
                    </li>
                  ))}
                </ul>
                <a className="svc-more" href={site.phone.href}>
                  Learn more <Icon name="arrowRight" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCAL NOTE ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Local Knowledge</span>
            <h2>Garage door service built for {c.name}</h2>
            <p>{c.localNote}</p>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="section section--soft">
        <div className="container">
          <div
            className="section-head section-head--left"
            style={{ maxWidth: 'none', textAlign: 'left', marginBottom: 36 }}
          >
            <h2 style={{ marginBottom: 0 }}>What {c.name} customers are saying</h2>
          </div>
          <div className="grid grid--3">
            {c.reviews.map((r) => (
              <Review key={r.name} r={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ OTHER NEARBY LOCATIONS ============ */}
      <section className="section" id="areas">
        <div className="container">
          <div
            className="section-head section-head--left"
            style={{ maxWidth: 'none', textAlign: 'left', marginBottom: 36 }}
          >
            <h2 style={{ marginBottom: '.2em' }}>Other nearby locations</h2>
            <p>
              {site.brand} covers Miami-Dade, Broward and Palm Beach County from five offices.
            </p>
          </div>
          <div className="nearby-grid">
            {others.map((o) => (
              <Link className="nearby-card" href={`/${o.slug}`} key={o.slug}>
                <Icon name="pin" />
                <strong>
                  {site.brand} &mdash; {o.name}
                </strong>
                <span>
                  {o.name}, FL {o.zip}
                </span>
                <em>
                  View location <Icon name="arrowRight" />
                </em>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta-final">
        <div className="container cta-final__inner">
          <div>
            <h2>
              Ready to fix <span>that door?</span>
            </h2>
            <p>Talk to a local {c.name} expert today &mdash; free, no-obligation quote.</p>
          </div>
          <div className="cta-final__actions">
            <a className="btn btn--primary btn--lg" href={site.phone.href}>
              <Icon name="phone" />
              Call Now
            </a>
            <a className="btn btn--ghost btn--lg" href="#contact">
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      </main>

      <Footer variant="city" city={c} bottomPath={`/${c.slug}`} />
      <CallBar secondHref="#areas" secondLabel="Nearby Locations" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(c)) }}
      />
    </>
  );
}
