import { useContext } from 'react';
import { Link } from "react-router-dom";
import vid from "../../public/video-merged.mp4";
import styles from "../styles/Home.module.css";
import logo from "../../public/logo.svg";
import logo2 from "../../public/logo.svg";
import { ShopContext } from "../App";

export default function Home() {

    const { windowQuery } = useContext(ShopContext);

    return (
        <div className={styles["home-page"]}>

            <div className={styles["center-text"]}>
                <h2>
                    Effortless style.
                </h2>
                <h2>
                    Responsibly sourced.
                </h2>
            </div>

            <div className={styles["home-page-wrapper"]}>

                <div className={styles["video-wrapper"]}>
                    <video autoPlay loop muted className={styles["video"]}>
                        <source src={vid} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className={windowQuery.matches ? styles["button-wrapper"] : styles["button-wrapper-mobile"]}>
                <Link to={"/men/"} className={windowQuery.matches ? styles["left"] : styles["left-mobile"]}><button className={styles["main-button"]} style={{ textDecoration: "none" }}>SHOP MEN</button></Link>
                <Link to={"/women/"} className={windowQuery.matches ? styles["right"] : styles["right-mobile"]}><button className={styles["main-button"]} style={{ textDecoration: "none" }}>SHOP WOMEN</button></Link>
            </div>

        </div>

    );
}