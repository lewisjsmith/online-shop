import { Link } from "react-router-dom";
import bg from "../assets/test-video.mp4";
import styles from "../styles/Home.module.css";

export default function Home() {

    return (
        <div style={{
            width: "100%",
            height: "100%",
        }}>
            <div style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                overflow: "hidden"
            }}>
                <video autoPlay muted style={{
                    minWidth: "100%",
                    minHeight: "100%",
                    width: "auto",
                    height: "auto",
                    position: " absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    zIndex: "-1"
                }}>
                    <source src={bg} type="video/mp4" />
                </video>
            </div>
            <div className={styles["button-wrapper"]}>
                <Link to={"/men/"}><button className={styles["left"]}>Shop Men</button></Link>
                <Link to={"/women/"}><button className={styles["right"]}>Shop Women</button></Link>
            </div>
        </div>
    );
}