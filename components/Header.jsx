import Link from 'next/link';
import { Icon } from './Icons';
import { site, nav } from '../data/site';

export function Logo({ href = '/', ariaLabel }) {
  return (
    <Link className="logo" href={href} aria-label={ariaLabel}>
      <span className="logo__mark">
        <Icon name="logoGarage" />
      </span>
      <span className="logo__text">
        <span className="logo__name">{site.brandFirst}</span>
        <span className="logo__tag">{site.brandRest}</span>
      </span>
    </Link>
  );
}

// `current` es el href de la pagina actual; se marca en el nav.
// Las paginas de ciudad no son ninguno de los cuatro, asi que lo dejan vacio.
export default function Header({ current = '' }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <Logo href="/" />

        <input className="nav-toggle" type="checkbox" id="nav-toggle" />
        <label className="nav-toggle-label" htmlFor="nav-toggle" aria-label="Open menu">
          <span />
        </label>

        <nav className="nav" aria-label="Main navigation">
          <ul className="nav__list">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={n.href === current ? 'is-current' : undefined}
                  aria-current={n.href === current ? 'page' : undefined}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn--outline btn--sm btn--quote" href="/contact-us">
            Free Quote
          </Link>
        </nav>

        <div className="header__actions">
          <Link className="btn btn--outline btn--sm btn--quote" href="/contact-us">
            Free Quote
          </Link>
          <a className="btn btn--primary btn--sm" href={site.phone.href}>
            <Icon name="phone" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
