import Link from 'next/link';
import { Icon } from './Icons';
import { site, nav, cityNav } from '../data/site';

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

// variant: 'home' -> los anclajes son de la propia home
//          'city' -> nav mas corto, y "Home" delante
export default function Header({ variant = 'home' }) {
  const items = variant === 'home' ? nav : cityNav;

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
            {variant === 'city' && (
              <li>
                <Link href="/">Home</Link>
              </li>
            )}
            {items.map((n) => (
              <li key={n.hash}>
                <a href={`#${n.hash}`}>{n.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn--outline btn--sm btn--quote" href="#contact">
            Free Quote
          </a>
        </nav>

        <div className="header__actions">
          <a className="btn btn--outline btn--sm btn--quote" href="#contact">
            Free Quote
          </a>
          <a className="btn btn--primary btn--sm" href={site.phone.href}>
            <Icon name="phone" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
