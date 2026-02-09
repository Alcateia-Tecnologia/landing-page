import "../styles/NavMenu.css";

export default function NavMenu() {
  return (
    <nav className="nav-menu" aria-label="Menu principal">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <img src="/iv.svg" alt="" />
          </span>
          <span className="brand-name">Alcateia Tecnologia</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#mvv">Essência</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#contatos">Contato</a>
          </li>
        </ul>

        <a href="#contatos" className="nav-cta">
          Vamos conversar
        </a>
      </div>
    </nav>
  );
}
