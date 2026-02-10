import { useEffect } from "react";
import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";
import "../styles/SosMaringaPage.css";

export default function SosMaringaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <NavMenu />

      <main>
        <header className="hero sos-detail-hero">
          <div className="container sos-detail-hero-grid">
            <div>
              <span className="badge">Produto Cívico</span>
              <h1>SOS Maringá</h1>
              <p className="subtitle">
                Aplicativo mobile para acelerar o acesso da população a serviços
                essenciais de emergência em Maringá.
              </p>
              <div className="cta-row">
                <a href="/#contatos" className="btn">
                  Solicitar apresentação
                </a>
                <a href="/#contatos" className="btn btn-outline">
                  Vamos conversar
                </a>
              </div>
            </div>

            <aside className="panel-card">
              <p className="panel-label">Situação atual</p>
              <h2>MVP funcional para demonstração e piloto local</h2>
              <ul>
                <li>Fluxos rápidos para ligação e SOS pessoal</li>
                <li>Interface otimizada para diferentes smartphones</li>
                <li>Evolução contínua da precisão dos pontos no mapa</li>
              </ul>
            </aside>
          </div>
        </header>

        <section className="section">
          <div className="container cards sos-detail-grid">
            <article className="card">
              <p className="section-kicker">Problema</p>
              <h3>Tempo de reação em emergências</h3>
              <p>
                Em situações críticas, cidadãos muitas vezes não lembram números,
                não sabem qual serviço acionar ou perdem tempo buscando
                informações dispersas.
              </p>
            </article>

            <article className="card">
              <p className="section-kicker">Público-alvo</p>
              <h3>Pessoas que precisam de resposta rápida</h3>
              <ul className="project-metrics">
                <li>Moradores de Maringá e região</li>
                <li>Idosos e familiares</li>
                <li>Pessoas em mobilidade e turistas</li>
                <li>Gestão pública e operação urbana</li>
              </ul>
            </article>

            <article className="card">
              <p className="section-kicker">Solução</p>
              <h3>Emergência em poucos toques</h3>
              <p>
                O app centraliza contatos essenciais, apoio pessoal de SOS e
                orientação por mapa para reduzir fricção na hora mais crítica.
              </p>
            </article>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <p className="section-kicker">Funcionalidades</p>
            <h2>O que o SOS Maringá já entrega</h2>

            <div className="cards sos-feature-grid">
              <article className="card">
                <h3>Início</h3>
                <ul className="project-metrics">
                  <li>Discagem rápida de serviços essenciais</li>
                  <li>Serviços agrupados por categoria</li>
                  <li>Layout otimizado para uso sob pressão</li>
                </ul>
              </article>

              <article className="card">
                <h3>Favoritos</h3>
                <ul className="project-metrics">
                  <li>Salvar e remover contatos prioritários</li>
                  <li>Persistência local no dispositivo</li>
                  <li>Acesso imediato aos números mais usados</li>
                </ul>
              </article>

              <article className="card">
                <h3>Perfil</h3>
                <ul className="project-metrics">
                  <li>Contatos pessoais de emergência</li>
                  <li>Cartão ICE com informações médicas relevantes</li>
                  <li>SOS por WhatsApp/SMS e sequência de ligações</li>
                </ul>
              </article>

              <article className="card">
                <h3>Mapa</h3>
                <ul className="project-metrics">
                  <li>Pontos oficiais por categoria (UBS, UPA, hospitais)</li>
                  <li>Filtro, busca e traçar rota</li>
                  <li>Validação progressiva de coordenadas por endereço</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container contact-panel">
            <div>
              <p className="section-kicker">Piloto institucional</p>
              <h2>Pronto para evoluir com parceria da Prefeitura</h2>
              <p>
                Com apoio de validação oficial de dados e operação em campo, o
                SOS Maringá pode consolidar o piloto e escalar para outros
                municípios.
              </p>
            </div>
            <div className="contact-actions">
              <a href="/#contatos" className="btn">
                Falar com a Alcateia
              </a>
              <a href="/" className="btn btn-outline">
                Voltar para a página inicial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  );
}
