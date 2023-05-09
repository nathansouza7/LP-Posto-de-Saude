import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./CardCarousel.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import image1 from "../assets/card-1.jpg";
import image2 from "../assets/card-2.jpg";
import image3 from "../assets/card-3.jpg";
import image4 from "../assets/card-4.jpg";
import image5 from "../assets/card-5.jpg";
import image6 from "../assets/card-6.jpg";
import image7 from "../assets/card-7.jpg";
import image8 from "../assets/card-8.jpg";
import image9 from "../assets/card-9.jpg";
import image10 from "../assets/card-10.jpg";
import image11 from "../assets/card-11.jpg";
import image12 from "../assets/card-12.jpg";
import image13 from "../assets/card-13.jpg";
import image14 from "../assets/card-14.jpg";
import image15 from "../assets/card-15.jpg";
import image16 from "../assets/card-16.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16];

export const CardCarousel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <div className={styles.container}>
            <motion.button
                className={styles.arrow}
                onClick={() => {
                    carousel.current.scrollBy({
                        left: -200,
                        behavior: "smooth",
                    });
                }}
            >
                <IoIosArrowBack size={55} />
            </motion.button>
            <motion.div
                ref={carousel}
                className={styles.carousel}
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div
                    className={styles.inner}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {images.map((item) => (
                        <motion.div className={styles.item} key={item}>
                            <img src={item} alt="texto alt" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.button
                className={styles.arrow}
                onClick={() => {
                    carousel.current.scrollBy({
                        left: 200,
                        behavior: "smooth",
                    });
                }}
            >
                <IoIosArrowForward size={55} />
            </motion.button>
        </div>
    );
};
