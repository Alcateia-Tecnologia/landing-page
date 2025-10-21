import NavMenu from "../components/NavMenu";
import Rodape from "../components/Rodape";
import "../styles/App.css";

function App() {
  return (
    <>
      <NavMenu />
      <body>
        <h1>Bem-vindo à Alcateia Tecnologia</h1>
        <p>Sua parceira em soluções tecnológicas inovadoras.</p>
        <h2>Sobre</h2>
        <h2>Projetos</h2>
        <h2>Contatos</h2>
      </body>
      <Rodape />
    </>
  );
}

export default App;
