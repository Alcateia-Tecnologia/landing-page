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
              <h1>Soluções digitais simples para problemas que importam.</h1>
              <p className="subtitle">
                Na Alcateia, design e engenharia trabalham juntos para criar
                produtos acessíveis, intuitivos e confiáveis para pessoas,
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
                  <span>Produto cívico em operação</span>
                </li>
                <li>
                  <strong>100%</strong>
                  <span>Foco em acessibilidade</span>
                </li>
                <li>
                  <strong>24/7</strong>
                  <span>Experiência digital disponível</span>
                </li>
              </ul>
            </div>
            <aside className="hero-panel" aria-label="Destaques de entrega">
              <div className="panel-card">
                <p className="panel-label">Sprint atual</p>
                <h2>Do protótipo ao lançamento com clareza e velocidade</h2>
                <ul>
                  <li>Descoberta e validação de problema</li>
                  <li>Design de interface com foco no usuário final</li>
                  <li>Entrega iterativa com qualidade de código</li>
                </ul>
              </div>
              <div className="panel-note">
                <strong>Time enxuto, entrega grande:</strong> orientação
                consultiva + execução ponta a ponta.
              </div>
            </aside>
          </div>
        </header>

        <section className="section trust" aria-label="Segmentos atendidos">
          <div className="container">
            <p className="section-kicker">Confiança que cresce junto</p>
            <div className="logo-cloud">
              <span>Setor público</span>
              <span>Negócios locais</span>
              <span>Projetos sociais</span>
              <span>Operações urbanas</span>
              <span>Serviços essenciais</span>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">Sobre a Alcateia</p>
              <h2>Produto digital com estratégia, usabilidade e impacto.</h2>
              <p>
                Somos uma startup brasileira movida por propósito. Acreditamos
                que a tecnologia deve aproximar, facilitar e transformar. Nosso
                trabalho conecta pesquisa, design e desenvolvimento para criar
                experiências que funcionam no dia a dia.
              </p>
            </div>
            <ul className="highlight-list">
              <li>Arquitetura simples para crescer com segurança</li>
              <li>Experiências claras para qualquer perfil de usuário</li>
              <li>Decisões guiadas por dados e contexto local</li>
            </ul>
          </div>
        </section>

        <section id="mvv" className="section alt">
          <div className="container">
            <p className="section-kicker">Nossa base</p>
            <h2>Missão, visão e valores que guiam cada entrega.</h2>
            <div className="cards">
              <article className="card value-card">
                <p className="value-index">01</p>
                <h3>Missão</h3>
                <p>
                  Usar tecnologia simples e acessível para resolver problemas
                  reais e melhorar o dia a dia das pessoas.
                </p>
              </article>
              <article className="card value-card">
                <p className="value-index">02</p>
                <h3>Visão</h3>
                <p>
                  Ser referência em soluções cívicas digitais no Brasil,
                  reconhecida por impacto, qualidade e confiabilidade.
                </p>
              </article>
              <article className="card value-card">
                <p className="value-index">03</p>
                <h3>Valores</h3>
                <p>
                  Acessibilidade, simplicidade, transparência, colaboração e
                  execução com alto padrão de qualidade.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <div className="container">
            <p className="section-kicker">Projetos em destaque</p>
            <h2>Soluções que já estão gerando valor na prática.</h2>
            <div className="cards project-grid">
              <article className="card project-card">
                <p className="project-tag">Aplicativo móvel</p>
                <h3>SOS Maringá</h3>
                <p>
                  Plataforma que centraliza contatos de emergência da cidade com
                  acesso offline e discagem em um toque.
                </p>
                <ul className="project-metrics">
                  <li>Consulta rápida sem internet</li>
                  <li>Navegação simples para situações críticas</li>
                  <li>Acesso em segundos aos canais essenciais</li>
                </ul>
              </article>
              <article className="card project-card">
                <p className="project-tag">Próximo passo</p>
                <h3>Novo produto em planejamento</h3>
                <p>
                  Estamos abrindo agenda para cocriar novas soluções digitais
                  com foco em eficiência operacional e impacto social.
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
                  Conte para a gente o desafio do seu negócio e desenhamos a
                  melhor estratégia de produto para começar.
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
