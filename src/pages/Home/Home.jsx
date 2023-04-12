import { Container } from "./HomeStyles";
import image1 from "../../assets/image1.svg";

export function Home() {
    return (
        <Container>
            <div>
                <h1>UBS Cachoeira do Norte</h1>
                <p>
                    O posto oferece um conjunto de ações e serviços orientados a
                    desenvolver ou ampliar a capacidade funcional e desempenho
                    dos indivíduos, proteger a saúde e prevenir agravos, de modo
                    a contribuir para autonomia, acesso à direitos e
                    participação em todas as esferas da vida social.
                </p>
            </div>
            <img src={image1} />
        </Container>
    );
}
