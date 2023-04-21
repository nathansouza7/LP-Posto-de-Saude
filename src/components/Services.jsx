import { CardCarousel } from "./CardCarousel";
import styles from "./Services.module.css";

export function Services() {
    return (
        <div className={styles["service-container"]}>
            <h2 className={styles.heading}>Serviços Ofertados</h2>
            <CardCarousel />
        </div>
    );
}
