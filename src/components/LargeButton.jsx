import styles from '../styles/LargeButton.module.css'

export default function LargeButton(props) {

    return (
            <button className={styles["button-purchase"]} onClick={props.fn}>
                {props.text}
            </button>
    );
}