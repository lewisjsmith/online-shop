import { useContext } from 'react'
import { ShopContext } from '../App'

export default function Cart() {

    const { cartItems } = useContext(ShopContext);

    return (
        <div>
            <ul>
                {cartItems.map(item => {
                    return (
                        <li key={item.id}>
                            <p>Item ID: {item.id}</p>
                            <p>Quantity: {item.quantity}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}