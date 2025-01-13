

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-links">
          <div>
            <h3>DC COMICS</h3>
            <ul>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div>
            <h3>SHOP</h3>
            <ul>
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>
            </ul>
          </div>
          <div>
            <h3>DC</h3>
            <ul>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Privacy policy (New)</a></li>
              <li><a href="#">Ad Choices</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">Talent Workshops</a></li>
              <li><a href="#">CPSC Certificates</a></li>
              <li><a href="#">Shop Help</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3>SITES</h3>
            <ul>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>
          </div>
        </div>
    <div className="footer-signup">
      <button>SIGN-UP NOW!</button>
    </div>
    <div className="footer-social">
      <p>FOLLOW US</p>
      <div className="social-icons">
        <img src="/logos/footer-facebook.png" alt="Facebook" />
        <img src="/logos/footer-twitter.png" alt="Twitter" />
        <img src="/logos/footer-youtube.png" alt="YouTube" />
        <img src="/logos/footer-pinterest.png" alt="Pinterest" />
        <img src="/logos/footer-periscope.png" alt="Periscope" />
      </div>
    </div>
  </footer>
  )
}

export default Footer