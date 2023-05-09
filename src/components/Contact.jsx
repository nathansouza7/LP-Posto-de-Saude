import styles from "./Contact.module.css";

export function Contact() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Informações de Contato</h2>
            <div className={styles["content-one"]}>
                <div className={styles["content-box"]}>
                    <span>
                        Cachoeira Do Norte, S/N Zona Urbana – Carnaubal – CE
                    </span>
                    <span>Cep: 62375-000</span>
                </div>
                <div className={styles["content-box"]}>
                    <span>Unidade Basica De Saude</span>
                    <span>CNES: 9465626</span>
                </div>
            </div>
            <div className={styles["content-two"]}>
                <div className={styles.form}>
                    <h3>Gostaria de contribuir avaliando essa página?</h3>
                    <a
                        href="https://forms.gle/4v2KiUzEFcdpdV399"
                        target="_blank"
                    >
                        <button>RESPONDER FORMULÁRIO</button>
                    </a>
                </div>
                <div className={styles.info}>
                    <span>
                        Este site foi desenvolvido com o intuíto de manter os
                        moradores da Cachoeira do Norte informados sobre os
                        serviços da Unidade Básica de Saúde da comunidade
                    </span>
                </div>
            </div>
        </div>
    );
}
