import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStatevalue} from '../StateProvider'
import {getBasketTotal} from '../reducer'
import { useHistory} from 'react-router-dom'
export default function Subtotal() {
    const history = useHistory();
    const [{basket} , dispatch] = useStatevalue()
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(valuse) => (
                <>
                <p>
                    Subtotal ({basket.lenght} items) : <strong> {valuse} </strong>

                </p>
                <small  className="subtotal_gift">
                    <input  type="checkbox"/>
                </small>
                </>
            )}  
            decimalScale={2}
            value={getBasketTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
             <button>Proceed to Checkout</button>

        </div>
    )
}
