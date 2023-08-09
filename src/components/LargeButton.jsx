import styles from '../styles/LargeButton.module.css'

import { useState, useRef } from 'react';

export default function LargeButton(props) {

    const [btnSize, setBtnSize] = useState(1);

    const ref = useRef(null);

    const handleEvent = (e) => {
        if(e.type === "mousedown") {
            setBtnSize(0.9);
        } else {
            setBtnSize(1);
        }
    }

    return (
            <button ref={ref} className={styles["button-purchase"]} onMouseDown={handleEvent} onMouseUp={handleEvent} style={{transform: `scale(${btnSize})`}} onClick={props.fn}>
                {props.text}
            </button>
    );
}