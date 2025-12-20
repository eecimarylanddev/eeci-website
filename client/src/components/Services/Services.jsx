import {
  FaChurch,
  FaLocationDot,
  FaPeopleGroup,
  FaHandHoldingHeart,
} from 'react-icons/fa6';

import './Services.css';

export function InvolvementCard({
  icon,
  title,
  meta,
  children,
  locationLabel,
  cta,
  className = '',
}) {
  return (
    <article className={`inv-card ${className}`.trim()}>
      <div className="inv-card__inner">
        {icon ? <div className="inv-card__icon">{icon}</div> : null}

        <h3 className="inv-card__title">{title}</h3>

        {meta ? <p className="inv-card__meta">{meta}</p> : null}

        {locationLabel ? (
          <div className="inv-card__location">
            <FaLocationDot size={16} />
            <span>{locationLabel}</span>
          </div>
        ) : null}

        {children ? <div className="inv-card__body">{children}</div> : null}

        {cta ? (
          <div className="inv-card__cta">
            {typeof cta === 'string' ? <span>{cta}</span> : cta}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function InvolvementCardsGrid({ children, className = '' }) {
  return <div className={`inv-grid ${className}`.trim()}>{children}</div>;
}

/** Example usage */
export function Services() {
  return (
    <section className="about">
      <div className="inv-page">
        <InvolvementCardsGrid>
          <InvolvementCard
            icon={<FaChurch size={64} />}
            title="Sunday Worship"
            meta="9:00 AM - 1:30 PM"
            locationLabel="Location"
          />

          <InvolvementCard
            icon={<FaPeopleGroup size={64} />}
            title="Join a Group"
            cta="FIND A GROUP"
          >
            Find community and grow in your faith with others.
          </InvolvementCard>

          <InvolvementCard
            icon={<FaHandHoldingHeart size={64} />}
            title="Serve"
            cta="GET INVOLVED"
          >
            Use your gifts to make a difference in the lives of those you touch.
          </InvolvementCard>
        </InvolvementCardsGrid>
      </div>
    </section>
  );
}
