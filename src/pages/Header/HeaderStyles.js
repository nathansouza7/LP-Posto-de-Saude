import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
 
`;

export const Navigation = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: ${px2vw(32)} 0;
  
  li a {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    color: var(--gray-200);
    font-size: 2rem;
    transition: all 0.5s
  }

  li a:hover {
    color: var(--white);
  }
`