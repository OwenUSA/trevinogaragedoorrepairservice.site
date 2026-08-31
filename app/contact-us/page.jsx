import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer, { CallBar } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  hq,
  contactChannels,
  contactBeforeYouCall,
  officeHours,
  faq,
  mapEmbed,
  directionsUrl,
} from '../../data/site';

const title = `Contact ${site.brandFirst} | Garage Door Repair South Florida`;
const description =
  'Call, email or visit us. Our head office is in Sanford and we dispatch to Miami-Dade, Broward and Palm Beach County from four service locations, 24/7, with free on-site estimates.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/contact-us/' },
  openGraph: {
    title,
    description,
    url: '/contact-us/',
    images: [
      {
        url: site.heroImage,
        width: 1920,
        height: 1439,
        alt: `Contact ${site.brand} in South Florida`,
      },
    ],
  },
  twitter: { title, description, images: [site.heroImage] },
  other: { 'geo.region': 'US-FL', 'geo.placename': hq.name },
};

const contactLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: title,
  description,
  url: `${site.url}/contact-us/`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.brand,
    url: `${site.url}/`,
    telephone: site.phone.schema,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hq.addr1,
      addressLocality: hq.name,
      addressRegion: 'FL',
      postalCode: hq.zip,
      addressCountry: 'US',
    },
    location: cities.map((c) => ({
      '@type': 'Place',
      name: `${site.brand} - ${c.name}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: c.addr1,
        addressLocality: c.name,
        addressRegion: 'FL',
        postalCode: c.zip,
        addressCountry: 'US',
      },
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone.schema,
      contactType: 'customer service',
      areaServed: 'US-FL',
      availableLanguage: ['English', 'Spanish'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header current="/contact-us" />

      <main id="main">

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            Contact Us
          </p>
          <span className="hero__badge">
            <span className="dot" /> Dispatch answered 24 hours a day
          </span>
          <h1>
            Talk to a Technician, <span>Not a Phone Tree</span>
          </h1>
          <p className="page-hero__lead">
One number covers every office. Tell us the city and what the door is doing,
            and we will send the closest available technician &mdash; usually the same day, and at
            any hour if it is an emergency.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={site.phone.href}>
              <Icon name="phone" />
              Call {site.phone.long}
            </a>
            <a className="btn btn--ghost btn--lg" href={`mailto:${site.email}`}>
              <Icon name="mail" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* ============ CHANNELS ============ */}
      <section className="section" id="ways">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Ways to Reach Us</span>
            <h2>Three Ways to Get a Technician Moving</h2>
            <p>
              Phone is the fastest for anything urgent. Email is better for quotes, invoices and
              warranty paperwork.
            </p>
          </div>

          <div className="grid grid--3">
            {contactChannels.map((ch) => (
              <article className="card" key={ch.title}>
                <span className="card__icon">
                  <Icon name={ch.icon} />
                </span>
                <h3>{ch.title}</h3>
                <ul className="card__list">
                  {ch.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                {ch.cta === 'phone' && (
                  <a className="btn btn--primary btn--block" href={site.phone.href}>
                    <Icon name="phone" />
                    {site.phone.display}
                  </a>
                )}
                {ch.cta === 'email' && (
                  <a className="btn btn--outline btn--block" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                )}
                {ch.cta === 'offices' && (
                  <a className="btn btn--outline btn--block" href="#offices">
                    See our offices
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DETAILS + MAP ============ */}
      <section className="section section--soft" id="details">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Head Office</span>
            <h2>Get Your Free Garage Door Estimate</h2>
            <p>
Call, email or write to our {hq.name} head office. The emergency line is
              answered 24 hours a day, 7 days a week.
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
                    <strong>Head Office</strong>
                    <span>
                      {hq.addr1}, {hq.name}, FL {hq.zip}
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
                {officeHours.map((h) => (
                  <li key={h.label}>
                    <strong>{h.label}</strong> <span>{h.value}</span>
                  </li>
                ))}
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
                  title={`${site.brand} - ${hq.name} head office map`}
                  src={mapEmbed(hq.mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="panel" style={{ marginTop: 26 }}>
                <h3>Before You Call</h3>
                <p>
                  None of this is required &mdash; but if you have it handy, it usually saves a
                  second trip:
                </p>
                <ul className="checklist checklist--tight">
                  {contactBeforeYouCall.map((c) => (
                    <li key={c}>
                      <Icon name="check" />
                      <div>
                        <span>{c}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ALL OFFICES ============ */}
      <section className="section" id="offices">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Offices</span>
            <h2>Head Office and Four Service Locations</h2>
            <p>
              Administration and dispatch run out of Sanford. The four service locations below are
              where the trucks go out from &mdash; every one of them answers the same number. Pick
              the one closest to you for local details and directions.
            </p>
          </div>

          <div className="grid grid--3">
            <article className="area-card area-card--main">
              <span className="area-card__tag">{hq.label}</span>
              <h3>
                {hq.name}, FL
              </h3>
              <address>
                <Icon name="pin" />
                <span>
                  {hq.addr1}
                  <br />
                  {hq.name}, FL {hq.zip}
                </span>
              </address>
              <p className="area-card__meta">{hq.meta}</p>
              <div className="area-card__actions">
                <a
                  className="area-card__link"
                  href={directionsUrl(hq.mapQuery)}
                  target="_blank"
                  rel="noopener"
                >
                  Directions
                  <Icon name="externalLink" />
                </a>
              </div>
            </article>

            {cities.map((c) => (
              <article className="area-card" key={c.slug}>
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
                <div className="area-card__actions">
                  <a
                    className="area-card__link"
                    href={directionsUrl(c.mapQuery)}
                    target="_blank"
                    rel="noopener"
                  >
                    Directions
                    <Icon name="externalLink" />
                  </a>
                  <Link className="area-card__link" href={`/${c.slug}`}>
                    {c.name} page
                    <Icon name="arrowRight" />
                  </Link>
                </div>
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
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section section--soft" id="faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Before You Book</span>
            <h2>Questions We Get on the Phone</h2>
            <p>The ones our dispatchers answer most often. Anything else, just ask.</p>
          </div>

          <div className="faq">
            {faq.slice(0, 4).map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
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
              Nights, weekends and holidays included. One call and a technician is on the way.
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

      </main>

      <Footer variant="home" bottomPath="/contact-us" />
      <CallBar secondHref="#offices" secondLabel="Our Offices" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd) }}
      />
    </>
  );
}
