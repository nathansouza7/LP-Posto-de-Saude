import styles from "./OpeningHours.module.css";
import BannerImage from "../assets/banner-2.svg";

export function OpeningHours() {
    return (
        <div className={styles.container}>
            <div className={styles["banner-container"]}>
                <div className={styles["image-section"]}>
                    <img src={BannerImage} alt="" />
                </div>
                <div className={styles["text-section"]}>
                    <h2 className={styles.heading}>HORÁRIO DE FUNCIONAMENTO</h2>
                    <p className={styles.text}>
                        O <strong>Posto de Saúde</strong> está aberto para
                        atendimento ao público{" "}
                        <strong>de segunda a sexta-feira</strong>, das{" "}
                        <strong>7h30 às 11h30</strong> e das{" "}
                        <strong>13h às 17h</strong>. A médica Lívia Nobre atende
                        toda quarta-feira e a enfermeira Fernanda Albuquerque
                        nos dias restantes. Durante esse período, você pode
                        marcar consultas, receber vacinas, realizar exames e
                        obter orientações sobre saúde em geral. Lembre-se de que
                        a prevenção é sempre a melhor opção, então não deixe de
                        fazer seus check-ups regularmente e seguir as
                        recomendações dos profissionais de saúde. Em caso de
                        emergência, procure atendimento imediato no
                        pronto-socorro mais próximo. Cuide bem da sua saúde e
                        conte sempre com os serviços do Posto de Saúde.
                    </p>
                </div>
            </div>
        </div>
    );
}
