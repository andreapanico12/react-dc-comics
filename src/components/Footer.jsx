import Sectionblue from "./Sectionblue"

const Footer = (props) => {

  const dcComicsLinks = props.dcComics;
  const shopLinks = props.shop;
  const dcLinks = props.dc;
  const sites = props.sites
  const socials = props.socials

  return (
    <>
      <Sectionblue />
      <footer className="footer">
        <section className="footer-links">
          <div className="footer-menus">

            <h3>DC COMICS</h3>
            <ul>
              {dcComicsLinks.map(link => (
                <li key={`dccomics-${link.id}`}><a href={link.url}>{link.text}</a></li>))
               }
            </ul>
            <h3>SHOP</h3>
            <ul>
             {shopLinks.map(link => (
                <li key={`shop-${link.id}`}><a href={link.url}>{link.text}</a></li>))
               }
            </ul>
          </div>

          <div className="footer-menus">
            <h3>DC</h3>
            <ul>
             {dcLinks.map(link => (
              <li key={`dc-${link.id}`}><a href={link.url}>{link.text}</a></li>))
             }
            </ul>
          </div>

          <div className="footer-menus">
            <h3>SITES</h3>
            <ul>
              {sites.map(link => (
               <li key={`sites-${link.id}`}><a href={link.url}>{link.text}</a></li>))
              }
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
              {socials.map(link => (
                <a key={link.id} href={link.url}><img src={link.src} alt={link.alt} /></a>
              ))}


            </div>
           </div>
        </section>

  </footer>
  </>
  )
}

export default Footer