import { Home } from "./components/Home";
import styles from "./App.module.css";
import { Services } from "./components/Services";
import { OpeningHours } from "./components/OpeningHours";
import { Professionals } from "./components/Professionals";
import { Contact } from "./components/Contact";

export function App() {
    return (
        <div>
            <div id="home" className={styles['background-blue']}>
                <Home />
            </div>
            <div id="services" className={styles['background-white']}>
                <Services />
            </div>
            <div id="timetable" className={styles['background-blue']}>
                <OpeningHours />
            </div>
            <div id="professionals" className={styles['background-white']}>
                <Professionals />
            </div>
            <div id="contact" className={styles['background-blue']}>
                <Contact />
            </div>
        </div>
    );
}
