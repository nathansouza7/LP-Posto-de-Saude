import React from "react";
import { Navbar } from "./Navbar";
import styles from "./Home.module.css";
import BannerImage from "../assets/home-banner-image.svg";

export function Home() {
    return (
        <div className={styles['home-container']}>
            <Navbar />
            <div className={styles["home-banner-container"]}>
                <div className={styles["home-text-section"]}>
                    <h1 className={styles["primary-heading"]}>
                        PSF GONÇALA CANDIDO DA SILVA
                    </h1>
                    <p className={styles["primary-text"]}>
                        Você sabe quais são os serviços realizados em seu PSF? <br />
                        Aqui você encontra tudo isso!
                    </p>
                </div>
                <div className={styles['home-image-section']}>
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};
