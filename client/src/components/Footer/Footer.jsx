import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-title">
        <p>Connect with us.</p>
      </div>
      <div className="footer-socials">
        <a
          className="social-facebook"
          href="https://www.facebook.com/people/Ethio-Emmanuel/pfbid07LJ4r13DdRn5MSNFCr7YjPLW95xyZD95ss5AR9s8WjUJX7hpk18rQFDV8CHMukhLl/"
          target="_blank"
        >
          <i className="icon facebook"></i>
        </a>
        <a
          className="social-youtube"
          href="https://www.youtube.com/channel/UCljj-pkGW1Adn2ZOrib3RkA"
          target="_blank"
        >
          <i className="icon youtube"></i>
        </a>
        <a
          className="social-tiktok"
          href="https://www.tiktok.com/@eecimaryland"
          target="_blank"
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
          href="https://giving.myamplify.io//app/giving/setota"
          target="_blank"
        >
          Give
        </a>
      </div>
      <div className="footer-copyright">
        <p>@ 2025 EECI</p>
      </div>
    </footer>
  );
}
