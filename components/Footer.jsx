import Link from 'next/link';
import { Icon, Stars } from './Icons';
import { Logo } from './Header';
import { site, cities, hq } from '../data/site';

function Social() {
  return (
    <div className="footer__social">
      {['facebook', 'instagram', 'x'].map((n) => (
        <a key={n} href="#" aria-label={n === 'x' ? 'X' : n[0].toUpperCase() + n.slice(1)}>
          <Icon name={n} />
        </a>
      ))}
    </div>
  );
}

export default function Footer({ variant = 'home', city = null, bottomPath = '' }) {
  const addr = city || hq;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Logo href="/" />
            <p className="footer__brandline">{site.brandline}</p>
            <Social />
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#areas">Locations</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {variant === 'city' ? (
            <div>
              <h4>Contact</h4>
              <address>
                <a href={site.phone.href}>{site.phone.long}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <br />
                <strong className="footer__addr-label">{addr.name} office</strong>
                <br />
                {addr.addr1}
                <br />
                {addr.name}, FL {addr.zip}
                <br />
                <br />
                <strong className="footer__addr-label">Head office</strong>
                <br />
                {hq.addr1}
                <br />
                {hq.name}, FL {hq.zip}
                <br />
                <br />
                {site.hoursLong}
                <br />
                Sun &amp; holidays: emergency 24/7
              </address>
            </div>
          ) : (
            <div>
              <h4>Locations</h4>
              <ul>
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/${c.slug}`}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="footer__quote">
            {variant === 'city' ? (
              <>
                <h4>Book a Visit</h4>
                <p>
                  Call us 24/7 and we put a truck on the way. Every repair in {addr.name} happens
                  at your address.
                </p>
              </>
            ) : (
              <>
                <h4>Contact</h4>
                <address>
                  <a href={site.phone.href}>{site.phone.long}</a>
                  <br />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <br />
                  <br />
                  <strong className="footer__addr-label">Head office</strong>
                  <br />
                  {hq.addr1}
                  <br />
                  {hq.name}, FL {hq.zip}
                  <br />
                  <br />
                  {site.hoursLong}
                  <br />
                  Sun &amp; holidays: emergency 24/7
                </address>
              </>
            )}
            <Link className="btn btn--primary btn--sm" href="/contact-us">
              Request a Visit
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {site.year} {site.brand}. All rights reserved.
          </span>
          <span className="footer__legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="footer__sep">&middot;</span>
            {site.domain}
            {bottomPath}
          </span>
        </div>
      </div>
    </footer>
  );
}

export function CallBar({ secondHref = '/#areas', secondLabel = 'Coverage Areas' }) {
  return (
    <div className="callbar">
      <a className="btn btn--primary" href={site.phone.href}>
        <Icon name="phone" />
        Call Now
      </a>
      <a className="btn btn--ghost" href={secondHref}>
        {secondLabel}
      </a>
    </div>
  );
}

export function Review({ r }) {
  return (
    <article className="review">
      <Stars />
      <p>&ldquo;{r.text}&rdquo;</p>
      <div className="review__who">
        <span className="review__avatar">{r.initials}</span>
        <div>
          <strong>{r.name}</strong>
          <span>{r.place}</span>
        </div>
      </div>
    </article>
  );
}
