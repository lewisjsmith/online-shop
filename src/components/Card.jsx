import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Card(props) {

    const [source, setSource] = useState(null);

    useEffect(() => {
        import("../assets/" + props.src).then(image => setSource(image.default))
    },[]);

    return (
        <div style={{ border: "1px solid black" }}>
            <p>{props.item.value}</p>
            <p><Link to={`/product/${props.item.id}`}>Link to page</Link></p>
            <img src={source}></img>
        </div>
    );
}