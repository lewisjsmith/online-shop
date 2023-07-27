import { useContext } from 'react'
import { ShopContext } from '../App'

export default function Cart() {

    const { cartItems } = useContext(ShopContext);

    const totalPrice = cartItems.reduce((total, item) => {
            return total + item.quantity * item.price;
        }, 0);

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
            <p>Total Cost: £{(Math.round(totalPrice*100)/100).toFixed(2)}</p>
        </div>
    )
}