import Header from "./components/Header"; 
import Main from "./components/Main";
import Footer from "./components/Footer";
import { menuLinksHeader } from "./components/data/menuLinks";

const App = () => {
  return (
    <>
      <Header links={menuLinksHeader} />
      <Main />
      <Footer />
    </>
  )
}

export default App