import React from 'react';
import {ShopCart} from "./ShopCart";
import { useShopCart } from '../hooks/CartShopContext';

export function CartWidget () {
  const {cartCount} = useShopCart()
    return (
      <div className="d-flex m-1" style={{position:"relative", width:"32px"}}>
        <ShopCart></ShopCart>
        {cartCount>0 && (
          <div className="rounded-circle bg-danger d-flex aligh-items-center justify-content-center" style={{fontSize:"12px", color:"white", position:"absolute", bottom:"0", right:"0", width:"20px", height:"20px", transform:"translate(30%,-80%)"}}>
            {cartCount}
          </div>
        )}
      </div>
    );
  };

