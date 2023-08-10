import { Link } from "react-router-dom";
import vid from "../assets/video-merged.mp4";
import styles from "../styles/Home.module.css";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo.svg";

export default function Home() {

    return (
        <div className={styles["home-page"]} style={{
            width: "100%",
            height: "100%",
        }}>
            <div style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                overflow: "hidden"
            }}>
                <video autoPlay loop muted style={{
                    minWidth: "100%",
                    minHeight: "100%",
                    width: "auto",
                    height: "auto",
                    position: " absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    zIndex: "-2"
                }}>
                    <source src={vid} type="video/mp4" />
                </video>
            </div>
            <div className={styles["button-wrapper"]}>
                <Link to={"/men/"}><button className={styles["left"]} style={{ textDecoration: "none" }}>SHOP MEN</button></Link>
                <Link to={"/women/"}><button className={styles["right"]} style={{ textDecoration: "none" }}>SHOP WOMEN</button></Link>
            </div>
        </div>
    );
}