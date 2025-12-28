import { useSiteSettings } from '../../hooks';
import './About.css';

export function About() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">About Our Church</h1>
        {isError ? (
          <p
            className="about-content"
            style={{ color: '#ff6b6b', fontStyle: 'italic' }}
          >
            Unable to load content. Please try again later.
          </p>
        ) : (
          <p className="about-content" style={{ opacity: isLoading ? 0.5 : 1 }}>
            {isLoading ? 'Loading...' : siteSettings?.aboutText}
          </p>
        )}
      </div>
    </section>
  );
}
