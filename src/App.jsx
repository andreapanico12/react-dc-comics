import Header from "./components/Header"; 
import Main from "./components/Main";
import Footer from "./components/Footer";
import { menuLinksHeader, dcComicsLinks,shopLinks,dcLinks,sitesLinks,socialLinks } from "./components/data/menuLinks";
import comics from "./components/data/comics";

const App = () => {
  return (
    <>
      <Header links={menuLinksHeader} />
      <Main comics={comics}/>
      <Footer dcComics={dcComicsLinks} shop={shopLinks} dc={dcLinks} sites={sitesLinks} socials={socialLinks}/>
    </>
  )
}

export default App