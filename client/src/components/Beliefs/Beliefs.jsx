import { useSiteSettings } from '../../hooks';
import './Beliefs.css';

export function Beliefs() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <section className="beliefs">
      <div className="beliefs-container">
        <p className="beliefs-eyebrow">WHAT WE BELIEVE</p>
        <h1 className="beliefs-title">Our Beliefs</h1>
        {isError ? (
          <p
            className="beliefs-content"
            style={{ color: '#ff6b6b', fontStyle: 'italic' }}
          >
            Unable to load content. Please try again later.
          </p>
        ) : (
          <p
            className="beliefs-content"
            style={{ opacity: isLoading ? 0.5 : 1 }}
          >
            {isLoading ? 'Loading...' : siteSettings?.beliefsText}
          </p>
        )}
        <button className="beliefs-button">LEARN MORE</button>
      </div>
    </section>
  );
}
