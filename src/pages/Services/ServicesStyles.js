import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: ${px2vw(32)} 0;
    width: 100%;
    height: 600px;
    margin: 0 auto;

    background-color: var(--white);
`;