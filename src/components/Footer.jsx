import styles from "../styles/Footer.module.css";
import git from "../assets/github-mark.svg"

export default function Footer() {

    return (
        <a href="https://github.com/lewisjsmith">
            <div className={styles["footer-wrapper"]}>
                <img className={styles["github"]} src={git}></img>
                <h2>Developed by Lewis J Smith </h2>
            </div>
        </a>
    );
}