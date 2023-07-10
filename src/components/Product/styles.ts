import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;

    border-radius: .2rem;

    background: var(--white);
    color: var(--gray-900);

    img {
        width: 21.875rem;
        object-fit: cover;
    }

    >div {
        display: flex;
        flex-direction: column;
        gap: .3rem;

        span {
            font-size: 16px;
            color: var(--gray-700);
            font-weight: bolder;
        }

        strong {
            font-size: 20px;
            color: var(--gray-900);
            font-weight: bold;
        }
    }
`

export const ButtonAddCarrinho = styled.button`
    color: var(--white);
    background: var(--blue-700);
    padding: .6rem;
    font-weight: bold;
    border: 0;

    border-radius: .2rem;
    cursor: pointer;

    transition: all .2s;

    &:hover {
        filter: brightness(.9);
    }
`

export const ButtonRemoveCarrinho = styled.button`
    color: var(--white);
    background: var(--gray-700);
    padding: .6rem;
    font-weight: bold;
    border: 0;

    border-radius: .2rem;
    cursor: pointer;

    transition: all .2s;

    &:hover {
        filter: brightness(.9);
    }
`