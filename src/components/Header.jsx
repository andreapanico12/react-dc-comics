const Header = (props) => {

  const menuLinksHeader = props.links;

  return(
    <header className="header">
    <div className="logo">
      <img src="/logos/dc-logo.png" alt="DC Logo" />
    </div>
    <nav className="nav">
      <ul>
        {menuLinksHeader.map(link => (
          <li key={link.id}><a href={link.url}>{link.text}</a></li>))
        }
      </ul>
    </nav>
  </header>
  )
}

export default Header