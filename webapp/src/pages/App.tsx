import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";

export default function App() {
  return (
    <>
      <NavMenu />
      <main>
        <header className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge">Tecnologia com impacto real</span>
              <h1>Solucoes digitais simples para problemas que importam.</h1>
              <p className="subtitle">
                Na Alcateia, design e engenharia trabalham juntos para criar
                produtos acessiveis, intuitivos e confiaveis para pessoas,
                equipes e cidades.
              </p>
              <div className="cta-row">
                <a href="#contatos" className="btn">
                  Agendar conversa
                </a>
                <a href="#projetos" className="btn btn-outline">
                  Ver projetos
                </a>
              </div>
              <ul className="hero-stats" aria-label="Indicadores de impacto">
                <li>
                  <strong>01</strong>
                  <span>Produto civico em operacao</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>Foco em acessibilidade</span>
                </li>
                <li>
                  <strong>24/7</strong>
                  <span>Experiencia digital disponivel</span>
                </li>
              </ul>
            </div>
            <aside className="hero-panel" aria-label="Destaques de entrega">
              <div className="panel-card">
                <p className="panel-label">Sprint atual</p>
                <h2>Do prototipo ao lancamento com clareza e velocidade</h2>
                <ul>
                  <li>Descoberta e validacao de problema</li>
                  <li>Design de interface com foco no usuario final</li>
                  <li>Entrega iterativa com qualidade de codigo</li>
                </ul>
              </div>
              <div className="panel-note">
                <strong>Time enxuto, entrega grande:</strong> orientacao
                consultiva + execucao ponta a ponta.
              </div>
            </aside>
          </div>
        </header>

        <section className="section trust" aria-label="Segmentos atendidos">
          <div className="container">
            <p className="section-kicker">Confianca que cresce junto</p>
            <div className="logo-cloud">
              <span>Setor publico</span>
              <span>Negocios locais</span>
              <span>Projetos sociais</span>
              <span>Operacoes urbanas</span>
              <span>Servicos essenciais</span>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">Sobre a Alcateia</p>
              <h2>Produto digital com estrategia, usabilidade e impacto.</h2>
              <p>
                Somos uma startup brasileira movida por proposito. Acreditamos
                que a tecnologia deve aproximar, facilitar e transformar. Nosso
                trabalho conecta pesquisa, design e desenvolvimento para criar
                experiencias que funcionam no dia a dia.
              </p>
            </div>
            <ul className="highlight-list">
              <li>Arquitetura simples para crescer com seguranca</li>
              <li>Experiencias claras para qualquer perfil de usuario</li>
              <li>Decisoes guiadas por dados e contexto local</li>
            </ul>
          </div>
        </section>

        <section id="mvv" className="section alt">
          <div className="container">
            <p className="section-kicker">Nossa base</p>
            <h2>Missao, visao e valores que guiam cada entrega.</h2>
            <div className="cards">
              <article className="card value-card">
                <p className="value-index">01</p>
                <h3>Missao</h3>
                <p>
                  Usar tecnologia simples e acessivel para resolver problemas
                  reais e melhorar o dia a dia das pessoas.
                </p>
              </article>
              <article className="card value-card">
                <p className="value-index">02</p>
                <h3>Visao</h3>
                <p>
                  Ser referencia em solucoes civicas digitais no Brasil,
                  reconhecida por impacto, qualidade e confiabilidade.
                </p>
              </article>
              <article className="card value-card">
                <p className="value-index">03</p>
                <h3>Valores</h3>
                <p>
                  Acessibilidade, simplicidade, transparencia, colaboracao e
                  execucao com alto padrao de qualidade.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <p className="section-kicker">Projetos em destaque</p>
            <h2>Solucoes que ja estao gerando valor na pratica.</h2>
            <div className="cards project-grid">
              <article className="card project-card">
                <p className="project-tag">Aplicativo movel</p>
                <h3>SOS Maringa</h3>
                <p>
                  Plataforma que centraliza contatos de emergencia da cidade com
                  acesso offline e discagem em um toque.
                </p>
                <ul className="project-metrics">
                  <li>Consulta rapida sem internet</li>
                  <li>Navegacao simples para situacoes criticas</li>
                  <li>Acesso em segundos aos canais essenciais</li>
                </ul>
              </article>
              <article className="card project-card">
                <p className="project-tag">Proximo passo</p>
                <h3>Novo produto em planejamento</h3>
                <p>
                  Estamos abrindo agenda para cocriar novas solucoes digitais
                  com foco em eficiencia operacional e impacto social.
                </p>
                <a href="#contatos" className="link">
                  Quero conversar sobre um projeto
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="contatos" className="section">
          <div className="container">
            <div className="contact-panel">
              <div>
                <p className="section-kicker">Vamos construir juntos</p>
                <h2>Pronto para tirar sua ideia do papel?</h2>
                <p>
                  Conte para a gente o desafio do seu negocio e desenhamos a
                  melhor estrategia de produto para comecar.
                </p>
              </div>
              <div className="contact-actions">
                <a href="mailto:corporativo.alcateia@outlook.com" className="btn">
                  corporativo.alcateia@outlook.com
                </a>
                <a href="tel:+5544999035478" className="btn btn-outline">
                  (44) 99903-5478
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
