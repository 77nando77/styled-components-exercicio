import styled from "styled-components";

export const CaixaPrincipal = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: stretch;
`
export const Imagem = styled.img`
    width: 100%;
    height: 200px;
`
export const TextoImagem = styled.h4`
    margin-left: 20px;
`