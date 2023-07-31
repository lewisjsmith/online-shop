import { useState } from "react";
import styles from "../styles/ImageSlider.module.css"

export default function ImageSlider(props) {

    const [slide, setSlide] = useState({});

    return (
        <div className={styles["image-view"]}>
            <div className={styles["image-slider"]} style={slide}>
                {props.allImages.map((source) => {
                    return (
                        <img key={String(source)} src={source} className={styles["sliding-image"]}></img>
                    );
                })}
            </div>
            <button className={styles["btn-left"]} onClick={() => setSlide({ transform: "translateX(0%)" })}><span>&lt;</span></button>
            <button className={styles["btn-right"]} onClick={() => setSlide({ transform: "translateX(-50%)" })}><span>&gt;</span></button>
        </div>
    );
}
