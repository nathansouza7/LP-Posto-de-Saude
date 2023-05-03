import { Home } from "./components/Home";
import styles from "./App.module.css";
import { Services } from "./components/Services";
import { OpeningHours } from "./components/OpeningHours";
import { Professionals } from "./components/Professionals";
import { Contact } from "./components/Contact";

export function App() {
    return (
        <div>
            <div className={styles['background-blue']}>
                <Home />
            </div>
            <div className={styles['background-white']}>
                <Services />
            </div>
            <div className={styles['background-blue']}>
                <OpeningHours />
            </div>
            <div className={styles['background-white']}>
                <Professionals />
            </div>
            <div className={styles['background-blue']}>
                <Contact />
            </div>
        </div>
    );
}
