import { useSiteSettings } from '../../hooks';
import './Footer.css';

export function Footer() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <footer className="footer">
      <div className="footer-title">
        <p>Connect with us.</p>
      </div>
      {isError ? (
        <div
          style={{
            padding: '1rem',
            textAlign: 'center',
            color: '#ff6b6b',
            fontSize: '0.9rem',
          }}
        >
          <p>Unable to load social links</p>
        </div>
      ) : (
        <>
          <div
            className="footer-socials"
            style={{ opacity: isLoading ? 0.5 : 1 }}
          >
            <a
              className="social-facebook"
              href={siteSettings?.facebookUrl}
              target="_blank"
              aria-disabled={isLoading}
            >
              <i className="icon facebook"></i>
            </a>
            <a
              className="social-youtube"
              href={siteSettings?.youtubeUrl}
              target="_blank"
              aria-disabled={isLoading}
            >
              <i className="icon youtube"></i>
            </a>
            <a
              className="social-tiktok"
              href={siteSettings?.tiktokUrl}
              target="_blank"
              aria-disabled={isLoading}
            >
              <i className="icon tiktok"></i>
            </a>
          </div>
          <div className="footer-links">
            <a className="page-link" href="/">
              About
            </a>
            <a className="page-link" href="/">
              Visit
            </a>
            <a
              className="page-link"
              href={siteSettings?.giveLink}
              target="_blank"
              style={{ opacity: isLoading ? 0.5 : 1 }}
              aria-disabled={isLoading}
            >
              Give
            </a>
          </div>
        </>
      )}
      <div className="footer-copyright">
        <p>@ 2025 EECI</p>
      </div>
    </footer>
  );
}
