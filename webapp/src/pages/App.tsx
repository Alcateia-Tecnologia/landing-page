import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";

export default function App() {
  return (
    <>
      <NavMenu />
      <header className="hero" id="home">
        <div className="container">
          <h1>Bem-vindo à Alcateia Tecnologia</h1>
          <p className="subtitle">
            Bem-vindo à Alcateia Tecnologia — sua parceira em soluções digitais
            simples, inteligentes e acessíveis.
            <br />
            Transformamos ideias em produtos reais que fazem diferença na vida
            das pessoas.
          </p>
          <div className="cta-row">
            <a href="#projetos" className="btn">
              Ver projetos
            </a>
            <a href="#contatos" className="btn btn-outline">
              Falar com a gente
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="sobre" className="section">
          <div className="container">
            <h2>Sobre</h2>
            <p>
              Somos uma startup brasileira movida por propósito. Acreditamos que
              a tecnologia deve aproximar, facilitar e transformar. Criamos
              soluções que unem design, eficiência e impacto social. Nosso foco
              é desenvolver produtos acessíveis, com usabilidade e propósito
              claros.
            </p>
          </div>
        </section>

        <section id="mvv" className="section alt">
          <div className="container">
            <h2>Missão, Visão e Valores</h2>
            <div className="cards">
              <article className="card">
                <h3>Missão</h3>
                <p>
                  Usar tecnologia simples e acessível para resolver problemas
                  reais, melhorando o dia a dia das pessoas e das cidades.
                </p>
              </article>
              <article className="card">
                <h3>Visão</h3>
                <p>
                  Tornar a Alcateia uma referência em soluções cívicas digitais
                  no Brasil, reconhecida por impacto, qualidade e
                  confiabilidade.
                </p>
              </article>
              <article className="card">
                <h3>Valores</h3>
                <p>
                  Acessibilidade • Simplicidade • Impacto social • Transparência
                  • Colaboração • Qualidade de execução.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <h2>Projetos</h2>
            <div className="cards">
              <article className="card">
                <h3>SOS Maringá</h3>
                <p>
                  App que centraliza os números de emergência da cidade com
                  acesso offline e discagem em um toque.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contatos" className="section">
          <div className="container">
            <h2>Contatos</h2>
            <ul className="contact-list">
              <li>
                Email:{" "}
                <a href="mailto:corporativo.alcateia@outlook.com">
                  corporativo.alcateia@outlook.com
                </a>
              </li>
              <li>
                Telefone: <a href="tel:+5544999035478">(44) 99903-5478</a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
