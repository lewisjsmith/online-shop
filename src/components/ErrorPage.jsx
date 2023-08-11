import { Link } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";
import ski from "../assets/ski.svg";
import mountain from "../assets/mountain.svg";
import movement from "../assets/movement.svg"

function ErrorPage() {

    return (
        <div className={styles["page-wrapper"]}>
            <div className={styles["collage"]}>
                <div className={styles["ski"]}>
                    <img src={ski} />
                </div>
                <div className={styles["mountain"]}>
                    <img src={mountain} />
                </div>
                <div className={styles["movement"]}>
                    <img src={movement} />
                </div>
            </div>
            <div className={styles["text"]}>
                <p>Uh oh! It looks like you're off-piste!</p>
                <Link replace to={"/"} style={{ textDecoration: "none" }}><button>Return Home</button></Link>
            </div>

        </div>
    )
}

export default ErrorPage;