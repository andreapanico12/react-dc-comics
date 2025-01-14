import digitalComics from "../assets/imgs/buy-comics-digital-comics.png";
import merchandise from "../assets/imgs/buy-comics-merchandise.png";
import shopLocator from "../assets/imgs/buy-comics-shop-locator.png";
import subscriptions from "../assets/imgs/buy-comics-subscriptions.png";
import dcPowerVisa from "../assets/imgs/buy-dc-power-visa.svg";


function Sectionblue() {
  return (
    <section className="blue-section">
    <div className="blue-item">
      <a href="#">
      <img src={digitalComics} alt="Digital Comics" />
      <p>DIGITAL COMICS</p>
      </a>
     
    </div>
    <div className="blue-item">
      <a href="#">
      <img src= {merchandise} alt="DC Merchandise" />
      <p>DC MERCHANDISE</p>
      </a>

    </div>
    <div className="blue-item">
      <a href="#">
      <img src={subscriptions}alt="Subscription" />
      <p>SUBSCRIPTION</p>
      </a>

    </div>
    <div className="blue-item">
      <a href="#">
      <img src= {shopLocator} alt="Comic Shop Locator" />
      <p>COMIC SHOP LOCATOR</p>
      </a>

    </div>
    <div className="blue-item">
      <a href="#">
      <img src={dcPowerVisa} alt="DC Power Visa" />
      <p>DC POWER VISA</p>
      </a>

    </div>
  </section>
  )
}

export default Sectionblue