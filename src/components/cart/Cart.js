import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    //  console.log(props.card)
    const{card}=props;
    console.log(card);
    const total=card.reduce((privious,card)=>privious+card.salary

    ,0);

    

    
    
    return (
        <div className="cart col ">
            <h4 className="mx-auto"><span>Add doctor :
                </span>{props.card.length}</h4>
            <h5 className="doctor-fee mx-auto mb-3"><span> Doctor Fees:$ </span>{total}</h5>
            {
                card.map(item=> <div>
                    <img src={item.picture} className="w-25" alt="" />
                    <p>{item.name}</p>
                </div>)
                    
            } 
        </div>
    );
};

export default Cart;