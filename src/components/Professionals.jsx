import { Box } from "./Box";
import styles from "./Professionals.module.css";

export function Professionals() {
    const contents = [
        { title: "MÉDICO(A)", content: "Dra. Lívia Nobre" },
        { title: "ENFERMEIRO(A)", content: "Fernanda Alburquerque" },
        { title: "TÉC. ENFERMAGEM", content: "Tatiane Ribeiro" },
        { title: "TÉC. ENFERMAGEM", content: "Thaís Rodrigues" },
        { title: "DENTISTA", content: "Joeder Aguiar" },
        { title: "AGENTE COMUNITÁRIO DE SAÚDE (ACS)", content: "Luciene" },
        { title: "AGENTE COMUNITÁRIO DE SAÚDE (ACS)", content: "Edinalva" },
        { title: "RECEPÇÃO", content: "Tatiane Pereira" },
        { title: "AUXILIAR EM SAÚDE BUCAL (ASB)", content: "Socorro Correia" },
        { title: "GERENTE", content: "Bruna Fontenele" },
        { title: "MOTORISTA", content: "Jarilon" },
        { title: "ATENDENTE DE FAMÁCIA", content: "-" },
        
    ];

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Profissionais</h2>
            <div className={styles.professionalsContainer}>
                {contents.map((content, index) => (
                    <Box
                        key={index}
                        title={content.title}
                        content={content.content}
                    />
                ))}
            </div>
        </div>
    );
}
