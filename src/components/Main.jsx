import Jumbotron from "./partials/Jumbotron"
import CardGrid from "./partials/CardGrid"

const Main = (props) => {
  
  const comics = props.comics
  return(
    <main className="content">
      <Jumbotron/>
      <CardGrid comics={comics}/>

  </main>
  )
}

export default Main