import { useContext } from 'react';
import { Link } from "react-router-dom";
import vid from "../assets/video-merged.mp4";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo.svg";
import { ShopContext } from "../App";

export default function Home() {

    const { windowQuery } = useContext(ShopContext);

    return (
        <div className={styles["home-page"]} style={windowQuery.matches ? {marginTop: "100px"} : {marginTop: "70px"}}>

                <div style={{height: "100%", width: "100%"}}>

                    <div className={styles["video-wrapper"]}>
                        <video autoPlay loop muted className={styles["video"]}>
                            <source src={vid} type="video/mp4" />
                        </video>

                        <div className={styles["center-text"]}>
                            <h2>
                                Effortless style.
                            </h2>
                            <h2>
                                Responsibly sourced.
                            </h2>
                        </div>
                    </div>

                    <div className={windowQuery.matches ? styles["button-wrapper"] : styles["button-wrapper-mobile"]}>
                        <button className={windowQuery.matches ? styles["left"] : styles["left-mobile"]} style={{ textDecoration: "none" }}><Link to={"/men/"} style={{width: "100%"}}>SHOP MEN</Link></button>
                        <button className={windowQuery.matches ? styles["right"] : styles["right-mobile"]} style={{ textDecoration: "none" }}><Link to={"/women/"} style={{width: "100%"}}>SHOP WOMEN</Link></button>
                    </div>

                </div>

        </div>

    );
}