import Link from 'next/link';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer, { CallBar, Review } from '../components/Footer';
import { Icon } from '../components/Icons';
import {
  site,
  cities,
  mainCity,
  homeServices,
  trustItems,
  heroPoints,
  heroCardItems,
  whyChecklist,
  steps,
  homeReviews,
  areaTags,
  faq,
  mapEmbed,
} from '../data/site';

const title = `Garage Door Repair Boca Raton & South Florida | ${site.brandFirst}`;
const description =
  'Same-day garage door repair across Miami, Broward and Palm Beach County. Spring replacement, opener repair and new installs. Upfront pricing, 24/7 emergency.';

export const metadata = {
  title: { absolute: title },
  description,
  keywords: [
    'garage door repair',
    'garage door spring replacement',
    'garage door opener repair',
    'Boca West garage door',
    'Miami garage door repair',
    'South Florida garage door service',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description:
      'Same-day garage door repair, spring replacement, opener service and installation. Licensed, insured and 24/7 emergency dispatch across Miami and South Florida.',
    url: '/',
    images: [
      {
        url: site.heroImage,
        width: 1920,
        height: 1439,
        alt: `Residential garage door serviced by ${site.brand} in South Florida`,
      },
    ],
  },
  twitter: {
    title,
    description:
      'Same-day garage door repair, upfront pricing and 24/7 emergency dispatch across Miami and South Florida.',
    images: [site.heroImage],
  },
  other: {
    'geo.region': 'US-FL',
    'geo.placename': mainCity.name,
  },
};

const businessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.brand,
  url: `${site.url}/`,
  telephone: site.phone.schema,
  email: site.email,
  priceRange: '$$',
  description:
    '24/7 garage door repair, spring replacement, opener service and new door installation across Miami and South Florida.',
  image: `${site.url}${site.heroImage}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: mainCity.addr1,
    addressLocality: mainCity.name,
    addressRegion: 'FL',
    postalCode: mainCity.zip,
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
  areaServed: [
    { '@type': 'City', name: 'Miami' },
    ...cities.map((c) => ({ '@type': 'City', name: c.name })),
  ],
  department: cities
    .filter((c) => !c.main)
    .map((c) => ({
      '@type': 'LocalBusiness',
      name: `${site.brand} - ${c.name}`,
      telephone: site.phone.schema,
      url: `${site.url}/${c.slug}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: c.addr1,
        addressLocality: c.name,
        addressRegion: 'FL',
        postalCode: c.zip,
        addressCountry: 'US',
      },
    })),
};

export default function HomePage() {
  return (
    <>
      <link rel="preload" as="image" href={site.heroImage} fetchPriority="high" />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header variant="home" />

      <main id="main">

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="hero__badge">
              <span className="dot" /> Technicians available right now
            </span>
            <h1>
              Garage Door Repair You Can <span>Count On</span> in South Florida
            </h1>
            <p className="hero__lead">
              Broken spring, jammed door or an opener that quit at the worst possible moment?{' '}
              {site.brand} sends a licensed technician with a fully stocked truck &mdash; usually the
              same day, 24 hours a day.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={site.phone.href}>
                <Icon name="phone" />
                Call {site.phone.display}
              </a>
              <a className="btn btn--ghost btn--lg" href="#services">
                See Our Services
              </a>
            </div>

            <ul className="hero__points">
              {heroPoints.map((p) => (
                <li key={p}>
                  <Icon name="check" /> {p}
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <h3>Need help right now?</h3>
            <p className="hero-card__note">
              Talk to a real technician &mdash; no call centers, no runaround.
            </p>
            <ul className="hero-card__list">
              {heroCardItems.map((i) => (
                <li key={i.strong}>
                  <Icon name={i.icon} />
                  <span>
                    <strong>{i.strong}</strong>
                    {i.text}
                  </span>
                </li>
              ))}
            </ul>
            <a className="hero-card__phone" href={site.phone.href}>
              {site.phone.display}
            </a>
            <a className="btn btn--primary btn--block" href="#contact">
              Request Service
            </a>
          </aside>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="trust">
        <div className="container trust__grid">
          {trustItems.map((t) => (
            <div className="trust__item" key={t.title}>
              <span className="trust__icon">
                <Icon name={t.icon} />
              </span>
              <div>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Complete Garage Door Repair &amp; Installation</h2>
            <p>
              From a snapped torsion spring at 2 a.m. to a brand-new hurricane-rated door, our
              technicians handle every residential and commercial garage door job in South Florida.
            </p>
          </div>

          <div className="grid grid--3">
            {homeServices.map((s) => (
              <article className="card" key={s.title}>
                <span className="card__icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="card__list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="section section--soft" id="why">
        <div className="container split">
          <div className="split__media">
            <div className="split__stat">
              <strong>4,800+</strong>
              <span>Garage doors serviced in South Florida</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Why {site.brandFirst}</span>
            <h2>A Local Crew That Actually Shows Up</h2>
            <p>
              {site.brand} is a South Florida company staffed by technicians who live in the
              neighborhoods they serve. No subcontractors, no bait-and-switch quotes, no surprise
              charges once the truck is in your driveway.
            </p>
            <ul className="checklist">
              {whyChecklist.map((c) => (
                <li key={c.strong}>
                  <Icon name="check" />
                  <div>
                    <strong>{c.strong}</strong>
                    <span>{c.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href={site.phone.href}>
              Speak With a Technician
            </a>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section section--dark" id="process">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How It Works</span>
            <h2>Four Simple Steps to a Working Door</h2>
            <p>
              From your first call to the final safety test, you always know what happens next and
              what it costs.
            </p>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>
              Garage Door Emergency? <span>We&rsquo;re Awake.</span>
            </h2>
            <p>
              Our dispatch line runs 24 hours a day, every day of the year &mdash; including weekends
              and holidays. One call and a technician is on the way.
            </p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--primary btn--lg" href={site.phone.href}>
              <Icon name="phone" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Customer Reviews</span>
            <h2>What South Florida Homeowners Say</h2>
            <p>Thousands of doors repaired across Miami-Dade, Broward and Palm Beach County.</p>
          </div>
          <div className="grid grid--3">
            {homeReviews.map((r) => (
              <Review key={r.name} r={r} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ COVERAGE AREAS ============ */}
      <section className="section section--soft" id="areas">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Coverage Areas</span>
            <h2>Five Service Hubs Covering Miami &amp; South Florida</h2>
            <p>
              Our main office is in {mainCity.name}, and four additional service locations let us
              reach all of Miami-Dade, Broward and Palm Beach County quickly. Choose the location
              closest to you for local details.
            </p>
          </div>

          <div className="grid grid--3">
            {cities.map((c) => (
              <article className={`area-card${c.main ? ' area-card--main' : ''}`} key={c.slug}>
                <span className="area-card__tag">{c.tag}</span>
                <h3>{c.name}, FL</h3>
                <address>
                  <Icon name="pin" />
                  <span>
                    {c.addr1}
                    <br />
                    {c.name}, FL {c.zip}
                  </span>
                </address>
                <p className="area-card__meta">{c.coverageMeta}</p>
                <Link className="area-card__link" href={`/${c.slug}`}>
                  View {c.name} service
                  <Icon name="arrowRight" />
                </Link>
              </article>
            ))}

            <article
              className="area-card"
              style={{
                justifyContent: 'center',
                alignItems: 'flex-start',
                background: 'var(--navy-900)',
                borderColor: 'var(--navy-900)',
              }}
            >
              <h3 style={{ color: '#fff' }}>Not sure which office covers you?</h3>
              <p style={{ color: '#b9c6d6', fontSize: '.96rem' }}>
                Call our dispatch line and we will send the closest available technician &mdash;
                anywhere from Miami to Jupiter.
              </p>
              <a className="btn btn--primary" href={site.phone.href} style={{ marginTop: 'auto' }}>
                Call {site.phone.display}
              </a>
            </article>
          </div>

          <div className="area-tags">
            {areaTags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Garage Door Questions, Answered</h2>
            <p>The questions our technicians hear most often in South Florida homes.</p>
          </div>

          <div className="faq">
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section section--soft" id="contact">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Contact Us</span>
            <h2>Get Your Free Garage Door Estimate</h2>
            <p>
              Call, text or stop by the {mainCity.name} office. Our emergency line is answered 24
              hours a day, 7 days a week.
            </p>
          </div>

          <div className="contact-grid">
            <div className="panel">
              <ul className="info-list">
                <li>
                  <span className="info-icon">
                    <Icon name="phone" />
                  </span>
                  <div>
                    <strong>Phone &mdash; 24/7 Dispatch</strong>
                    <a href={site.phone.href}>+{site.phone.long}</a>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <Icon name="mailSquare" />
                  </span>
                  <div>
                    <strong>Email</strong>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <Icon name="pin" />
                  </span>
                  <div>
                    <strong>Main Office</strong>
                    <span>
                      {mainCity.addr1}, {mainCity.name}, FL {mainCity.zip}
                    </span>
                  </div>
                </li>
                <li>
                  <span className="info-icon">
                    <Icon name="clock" />
                  </span>
                  <div>
                    <strong>Hours</strong>
                    <span>
                      {site.hoursLong} &mdash; {site.hoursSunday}
                    </span>
                  </div>
                </li>
              </ul>

              <h3 style={{ marginTop: 30 }}>Office Hours</h3>
              <ul className="hours">
                <li>
                  <strong>Monday &ndash; Friday</strong> <span>7:00 AM &ndash; 9:00 PM</span>
                </li>
                <li>
                  <strong>Saturday</strong> <span>7:00 AM &ndash; 9:00 PM</span>
                </li>
                <li>
                  <strong>Sunday &amp; holidays</strong> <span>Emergency dispatch</span>
                </li>
                <li>
                  <strong>Emergency calls</strong> <span>Answered 24/7</span>
                </li>
              </ul>

              <a
                className="btn btn--primary btn--block"
                href={site.phone.href}
                style={{ marginTop: 26 }}
              >
                <Icon name="phone" />
                Call Now &mdash; {site.phone.display}
              </a>
            </div>

            <div>
              <div className="map-embed">
                <iframe
                  title={`${site.brand} - ${mainCity.name} office map`}
                  src={mapEmbed(mainCity.mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="panel" style={{ marginTop: 26 }}>
                <h3>Service Guarantee</h3>
                <p style={{ marginBottom: 0 }}>
                  If a repair we performed fails within the warranty period, we come back and make it
                  right at no charge. That is the whole policy &mdash; no fine print, no restocking
                  fees, no arguing about who is responsible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      <Footer variant="home" />
      <CallBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />
    </>
  );
}
