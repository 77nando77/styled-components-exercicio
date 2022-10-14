import React from "react";
import CardVideo from "./Componentes/CardVideo/CardVideo";
import "./styles.css";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

const MudaHeader = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 10%;
`
const MudaMain = styled.main`
  min-height: 80%;
  display: flex;
`
const MudaNav = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
      <GlobalStyle />
      <div className="tela-inteira">
        <MudaHeader>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </MudaHeader>

        <MudaMain>
          <MudaNav>
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </MudaNav>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </MudaMain>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </>
  );
}
