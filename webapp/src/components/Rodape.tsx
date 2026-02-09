import "../styles/Rodape.css";

export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="container footer-grid">
        <div className="footer-about">
          <strong>Alcateia Tecnologia</strong>
          <p>
            Transformamos ideias em produtos digitais com foco em simplicidade,
            impacto e confianca.
          </p>
        </div>

        <div className="footer-links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contatos">Contato</a>
        </div>

        <div className="footer-contact">
          <a href="mailto:corporativo.alcateia@outlook.com">
            corporativo.alcateia@outlook.com
          </a>
          <a href="tel:+5544999035478">(44) 99903-5478</a>
        </div>
      </div>

      <div className="container footer-bottom">
        Copyright © {anoAtual} Alcateia Tecnologia. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
