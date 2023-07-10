import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8rem;
`

export const Content = styled.div`
    width: 1120px;

    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    @media (max-width: 638px) {
        width: 100%;
        grid-template-columns: 1fr;

        margin: 0 15px;
    }
`