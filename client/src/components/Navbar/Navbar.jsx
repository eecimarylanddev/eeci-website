import eeciLogo from '../../assets/eeci-logo.PNG';
import { useSiteSettings } from '../../hooks';
import './Navbar.css';

export function Navbar() {
  const { data: siteSettings, isLoading, isError } = useSiteSettings();

  return (
    <header className="header">
      <nav className="nav-bar">
        <a href="/" className="logo">
          <img alt="EECI" src={eeciLogo} />
        </a>
        <ul className="nav-links">
          <li>
            <button className="nav-button">About</button>
          </li>
          <li>
            <button className="nav-button">Visit</button>
          </li>
          <li>
            {isError ? (
              <button
                className="nav-button"
                disabled
                style={{ opacity: 0.5, cursor: 'not-allowed' }}
              >
                Give
              </button>
            ) : (
              <a
                href={siteSettings?.giveLink}
                target="_blank"
                style={{
                  opacity: isLoading ? 0.5 : 1,
                  pointerEvents: isLoading ? 'none' : 'auto',
                }}
              >
                <button className="nav-button" disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Give'}
                </button>
              </a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
