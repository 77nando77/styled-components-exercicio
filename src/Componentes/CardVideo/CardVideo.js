import {CaixaPrincipal, Imagem, TextoImagem} from "./Style"

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CaixaPrincipal onClick={reproduzVideo}>
      <Imagem src={props.image1} alt={props.textoAlternativo} />
      <TextoImagem>{props.titulo}</TextoImagem>
    </CaixaPrincipal>
  );
}

export default CardVideo;
