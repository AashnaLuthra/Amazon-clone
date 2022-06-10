import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (


    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492667_.jpg' ></img>
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'> shopping basket</h2>


          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}

              price={item.price}
              rating={item.rating}

            />
          ))}
          {/* })} */}



        </div>
      </div>
      <div className='checkout_right'>
        <SubTotal />
      </div>
    </div>
  )
}

export default Checkout