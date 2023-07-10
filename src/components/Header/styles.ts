import { styled } from "styled-components";

export const HeaderContainer = styled.header`   
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--gray-700);
`

export const HeaderContent = styled.div`
    width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    >span {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 28px;
        font-weight: bold;
    }

    >div {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        div {
            display: flex;
            flex-direction: column;
            text-align: right;
            gap: .2rem;

            span {
                color: var(--gray-500);
            }
        }
    }

    a {
        text-decoration: none;
        color: var(--white);
    }

    @media (max-width: 638px) {
        width: 100%;
        margin: 0 15px;
    }
`