import { Icon } from './Icons';
import { site, hq } from '../data/site';

export default function TopBar() {
  return (
    <div className="topbar" id="top">
      <div className="container topbar__inner">
        <ul className="topbar__list">
          <li>
            <Icon name="pin" />
            {hq.addr1}, {hq.name}, FL {hq.zip}
          </li>
          <li>
            <Icon name="clock" />
            Mon &ndash; Sat 7:00 AM &ndash; 9:00 PM &middot; Emergency dispatch 24/7
          </li>
        </ul>
        <ul className="topbar__list">
          <li>
            <Icon name="phone" />
            <a className="topbar__phone" href={site.phone.href}>
              {site.phone.display}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
