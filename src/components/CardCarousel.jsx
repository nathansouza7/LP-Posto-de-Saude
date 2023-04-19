import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./CardCarousel.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

const images = [image1, image2, image3, image4, image1, image2, image3, image4, image1, image2, image3, image4, image1, image2, image3, image4];

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
                        left: -400,
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
                        left: 400,
                        behavior: "smooth",
                    });
                }}
            >
                <IoIosArrowForward size={55} />
            </motion.button>
        </div>
    );
};
