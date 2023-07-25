export default function Card(props) {

    return (
        <div>
            {props.item.value}
            <div>
                <button>-</button>
                <span>value</span>
                <button>+</button>
            </div>
            <button>Add to cart</button>
        </div>
    );
}