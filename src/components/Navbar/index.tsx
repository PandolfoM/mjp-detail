import "./style.scss";

function Navbar() {
  return (
    <nav className="nav page">
      <div className="logo">
        <a>MJP Detail</a>
      </div>
      <div className="links">
        <a>Services</a>
        <a>Pricing</a>
        <a>FAQ</a>
        <a>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
