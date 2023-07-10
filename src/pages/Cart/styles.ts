import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8rem;
`

export const Content = styled.div`
    width: 1120px;

    @media (max-width: 638px) {
        width: 100%;
        margin: 0 15px 15px;
    }
`

export const Tabela = styled.div`
    display: flex;
    padding: 1rem;
    background: var(--white);
    color: var(--gray-700);
    border-radius: 5px;
    flex-direction: column;
`
    

export const CardProduto = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-500);

    @media (max-width: 638px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const AreaImagem = styled.div`
    img {
        width: 200px;
        object-fit: cover;
    }
`

export const AreaInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: left;

    span {
        color: var(--gray-700);
        font-weight: bold;
    }

    strong {
        font-size: 26px;
        font-weight: bold;
    }
`

export const AreaQtd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    >div {
        padding: .5rem;
        width: 40px;
        border: 1px solid var(--gray-500);
        border-radius: 5px;
    }
`

export const AreaSubtotal = styled.div`
    strong {
        font-size: 20px;
    }
`

export const AreaLixeira = styled.div`
    margin-right: 2rem;
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    @media (max-width: 638px) {
        margin-bottom: 1rem;
    }
`

export const FinalizarPedido = styled.div`
    display: flex;
    padding: 2rem 0;
    align-items: center;
    justify-content: space-between;

    button {
        cursor: pointer;
        padding: .5rem 1rem;
        background: var(--blue-700);
        color: white;
        font-size: 18px;
        border: 0;
        border-radius: 5px;

        transition: all .2s;

        &:hover {
            filter: brightness(.9);
        }
    }

    >div {
        span {
            font-weight: bold;
            color: var(--gray-500);
            margin-right: .5rem;
        }

        strong {
            font-size: 32px;
        }
    }

    @media (max-width: 638px) {
        flex-direction: column-reverse;
        gap: 1rem;
    }
`

export const CarrinhoVazio = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    background: var(--white);
    color: var(--gray-500);
    border-radius: 5px;

    @media (max-width: 638px) {
        padding: 2rem 0;
    }
`
