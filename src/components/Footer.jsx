import styles from "../styles/Footer.module.css";
import git from "../assets/github-mark.svg"

export default function Footer() {

    return (
        <a className={styles["footer-wrapper"]} href="https://github.com/lewisjsmith">
                <img className={styles["github"]} src={git}></img>
                <h2>Developed by Lewis J Smith </h2>
        </a>
    );
}