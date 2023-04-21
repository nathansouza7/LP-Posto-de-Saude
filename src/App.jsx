import { Home } from "./components/Home";
import styles from "./App.module.css";
import { Services } from "./components/Services";
import { OpeningHours } from "./components/OpeningHours";

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
        </div>
    );
}
