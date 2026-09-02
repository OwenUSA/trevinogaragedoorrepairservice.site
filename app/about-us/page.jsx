import Link from 'next/link';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer, { CallBar, Review } from '../../components/Footer';
import { Icon } from '../../components/Icons';
import {
  site,
  cities,
  hq,
  aboutStats,
  aboutStory,
  aboutValues,
  aboutTimeline,
  homeReviews,
  steps,
} from '../../data/site';

const title = `About ${site.brand} | South Florida Garage Door Company`;
const description =
  'Who we are: a South Florida garage door company running four service hubs from Coral Gables to North Palm Beach, with our own licensed technicians, stocked trucks and 24/7 emergency dispatch.';

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/about-us/' },
  openGraph: {
    title,
    description,
    url: '/about-us/',
    images: [
      {
        url: site.heroImage,
        width: 1920,
        height: 1439,
        alt: `${site.brand} technicians serving South Florida`,
      },
    ],
  },
  twitter: { title, description, images: [site.heroImage] },
  other: { 'geo.region': 'US-FL', 'geo.placename': hq.name },
};

const aboutLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: title,
  description,
  url: `${site.url}/about-us/`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.brand,
    url: `${site.url}/`,
    telephone: site.phone.schema,
    email: site.email,
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      streetAddress: hq.addr1,
      addressLocality: hq.name,
      addressRegion: 'FL',
      postalCode: hq.zip,
      addressCountry: 'US',
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <TopBar />
      <Header current="/about-us" />

      <main id="main">

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            About Us
          </p>
          <span className="hero__badge">
            <span className="dot" /> Serving South Florida since {site.founded}
          </span>
          <h1>
            A Local Garage Door Crew, <span>Not a Call Center</span>
          </h1>
          <p className="page-hero__lead">
            {site.brand} is a South Florida company with its own licensed technicians, its own
            trucks and its own dispatch line. We repair and install garage doors across Miami-Dade,
            Broward and Palm Beach County &mdash; and we come to you.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary btn--lg" href={site.phone.href}>
              <Icon name="phone" />
              Call {site.phone.display}
            </a>
            <Link className="btn btn--ghost btn--lg" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="stat-strip">
        <div className="container stat-strip__grid">
          {aboutStats.map((s) => (
            <div className="stat-strip__item" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section className="section" id="story">
        <div className="container split">
          <div className="split__media">
            <div className="split__stat">
              <strong>4,800+</strong>
              <span>Garage doors serviced in South Florida</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Fifteen Years on the Same Three Counties</h2>
            {aboutStory.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <a className="btn btn--primary" href={site.phone.href}>
              <Icon name="phone" />
              Speak With a Technician
            </a>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="section section--soft" id="values">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How We Work</span>
            <h2>Six Rules We Do Not Bend</h2>
            <p>
              Every one of these came from a complaint we heard about somebody else in this trade.
              They are the reasons customers call us back instead of starting over on the internet.
            </p>
          </div>
          <div className="grid grid--3">
            {aboutValues.map((v) => (
              <article className="card" key={v.title}>
                <span className="card__icon">
                  <Icon name={v.icon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section className="section section--dark" id="history">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our History</span>
            <h2>From One Truck to Four Service Hubs</h2>
            <p>
              We grew by adding locations where our own customers already were, not by buying leads
              in cities we had never worked.
            </p>
          </div>
          <div className="steps">
            {aboutTimeline.map((t) => (
              <div className="step" key={t.year}>
                <span className="step__num step__num--year">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT A VISIT LOOKS LIKE ============ */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What to Expect</span>
            <h2>What a Visit From Us Actually Looks Like</h2>
            <p>
              From your first call to the final safety test, you always know what happens next and
              why.
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

      {/* ============ WHERE WE WORK ============ */}
      <section className="section section--soft" id="where">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Where We Work</span>
            <h2>Four Hubs, One Dispatch Line</h2>
            <p>
              Administration and dispatch run out of our {hq.name} head office. The four service
              locations below are where the trucks go out from, and between them they put a
              technician inside a short drive of almost every address from Coral Gables to Jupiter.
            </p>
          </div>
          <div className="grid grid--3">
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
                <Link className="area-card__link" href={`/${c.slug}`}>
                  View {c.name} service
                  <Icon name="arrowRight" />
                </Link>
              </article>
            ))}
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

      {/* ============ CTA BAND ============ */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>
              Ready When You Are. <span>Even at 3 a.m.</span>
            </h2>
            <p>
              Tell us what the door is doing and we will tell you what it needs before anyone picks
              up a tool.
            </p>
          </div>
          <div className="cta-band__actions">
            <a className="btn btn--primary btn--lg" href={site.phone.href}>
              <Icon name="phone" />
              {site.phone.display}
            </a>
            <Link className="btn btn--ghost btn--lg" href="/contact-us">
              Book a Visit
            </Link>
          </div>
        </div>
      </section>

      </main>

      <Footer variant="home" bottomPath="/about-us" />
      <CallBar secondHref="/contact-us" secondLabel="Contact Us" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
    </>
  );
}
