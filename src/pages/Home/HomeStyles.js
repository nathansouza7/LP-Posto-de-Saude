import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: ${px2vw(32)} 0;
    width: 60%;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        width: 100%;
    }

    > div {
        width: 476px;
        font-size: 1.1rem;
        line-height: 1.4;
        @media (max-width: 768px) {
            padding: ${px2vw(32)} 0;
            text-align: center;
            font-size: 2rem;
            width: 200px;
            width: 80%;
        }
    }

    img {
        width: ${px2vw(120, 320)};
        @media (max-width: 768px) {
            width: 200px;
            width: 80%;
        }
    }
`;
