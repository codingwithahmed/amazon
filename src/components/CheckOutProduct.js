import React from 'react'
import './CheckOut.css'
import {useStatevalue} from '../StateProvider'
export default function CheckOutProduct({ id, image, title, price, rating, hideButton}) {
 
     const [{basket} , dispatch ] = useStatevalue();
      
     const removefrombasket = () => {
         dispatch( {
             type : "RemoveFromBasket",
             id:id
         })
     }

    return (
        <div className ="checkoutProduct"> 
            <img 
            src={image}
            alt=""
            className="checkoutProduct_image"
            />

            <div className="checkoutProduct_info">
               <p className="checkoutProduct_title">{title}</p>
               <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price} </strong> 
                </p>

                <div className="checkoutProduct_rating">
                    {
                        Array(rating).fill().map((_ ,i) => {
                            <p>🌟</p>
                        })
                    }
                </div>

                {!hideButton && (
                    <button onClick={removefrombasket}> Remove From Basket </button>
                )}
           
            </div>

        </div>
    )
}
