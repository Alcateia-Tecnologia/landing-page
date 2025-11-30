import "../styles/NavMenu.css";

export default function NavMenu() {
  return (
    <nav className="nav-menu" aria-label="Menu principal">
      <a href="#home" className="brand">
        <img src="/iv.svg" alt="Alcateia" />
        <span>Alcateia Tecnologia</span>
      </a>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#contatos">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}
