function Footer() {
  return (
    <footer className="ca-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img className="logo" src="../../assets/logo/century-advantage-all-white.png" alt="Century Advantage" />
          <p>Century Advantage is a premium real estate brokerage, resale, and rental intake service backed by Century Real Estate's 50-year legacy of shaping the Bengaluru skyline.</p>
          <div className="footer-tag">Connect. Curate. Care. Close. Continue.</div>
        </div>

        <div className="footer-col">
          <h4>Browse Bengaluru</h4>
          <ul>
            <li><a href="#">Premium Rentals</a></li>
            <li><a href="#">Resale Properties</a></li>
            <li><a href="#">Properties in Hebbal</a></li>
            <li><a href="#">Properties in Whitefield</a></li>
            <li><a href="#">Properties in Thanisandra</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">List Your Asset</a></li>
            <li><a href="#">Exclusivity Mandate</a></li>
            <li><a href="#">Service Fee Structure</a></li>
            <li><a href="#">Century Heritage</a></li>
            <li><a href="#">Book Site Visit</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Office</h4>
          <div className="footer-contact">
            <Icon name="map-pin" size={16} />
            <div>Century Towers, 3rd Floor,<br/>Kasturba Road, Bengaluru 560001</div>
          </div>
          <div className="footer-contact">
            <Icon name="phone" size={16} />
            <div>+91 80 4000 5000</div>
          </div>
          <div className="footer-contact">
            <Icon name="mail" size={16} />
            <div>advantage@centuryrealestate.in</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2026 Century Real Estate Holdings Pvt. Ltd. · RERA Reg No: PRM/KA/RERA/1251/309/PR/171015/000234</div>
        <div style={{display:'flex',gap:24}}>
          <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Agent Admin</a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
