import { Container, Navigation } from "./HeaderStyles";

export function Header() {
  return (
    <Container>
      <Navigation>
          <li><a href="#">Home</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Depoimentos</a></li>
          <li><a href="#">Profissionais</a></li>
          <li><a href="#">Contato</a></li>
      </Navigation>
    </Container>
  );
}