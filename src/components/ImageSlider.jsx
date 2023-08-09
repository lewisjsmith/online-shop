import { useState } from "react";
import styles from "../styles/ImageSlider.module.css"
import left from "../assets/left.svg"
import right from "../assets/right.svg"

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
            <button className={styles["btn-left"]} onClick={() => setSlide({ transform: "translateX(0%)" })}>
                <div className={styles["svg-wrapper"]}>
                    <img src={left} viewBox="0 0 100 100" />
                </div>
            </button>
            <button className={styles["btn-right"]} onClick={() => setSlide({ transform: "translateX(-50%)" })}>
                <div className={styles["svg-wrapper"]}>
                    <img src={right} viewBox="0 0 100 100"/>
                </div>
            </button>
        </div>
    );
}
