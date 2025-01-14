import Sectionblue from "./Sectionblue"

const Footer = () => {
  return (
    <>
      <Sectionblue />
      <footer className="footer">
        <section className="footer-links">
          <div className="footer-menus">
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
            <h3>SHOP</h3>
            <ul>
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>
            </ul>
          </div>
          <div className="footer-menus">
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
          <div className="footer-menus">
            <h3>SITES</h3>
            <ul>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>
          </div>
        </section>
        <section className="footer-media">
          <div className="footer-signup">
           <button>SIGN-UP NOW!</button>
          </div>
          <div className="footer-social">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <a href="#"><img src="/logos/footer-facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="/logos/footer-twitter.png" alt="Twitter" /></a>
              <a href="#"><img src="/logos/footer-youtube.png" alt="YouTube" /></a>
              <a href="#"><img src="/logos/footer-pinterest.png" alt="Pinterest" /></a>
              <a href="#"><img src="/logos/footer-periscope.png" alt="Periscope" /></a>
            </div>
           </div>
        </section>

  </footer>
  </>
  )
}

export default Footer