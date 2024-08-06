import React, { useContext } from 'react'
import Maincontext from '../Context/Context'


const Basket = () => {
  const { basket, deleFromBasket } = useContext(Maincontext)

  return (
    <div className='container' style={{ height: "1000px" }}>
      <div className="row">
        {
          basket.map((item, index) => {
            return (

              <div className='card-parent col-lg-2 col-md-4 col-sm-6 mb-4'>
                <div>
                  <div class="cards mt-5">
                    <img className="card-img" src={item.product.image} alt="" />
                    <p>{item.product.title}</p>
                    <b><span>$</span>{item.product.price}</b>
                    <p>count : {item.count}</p>
                    <p>TotalPrice : {item.totalPrice}</p>
                    <button className='btn-delete' onClick={() => {
                      deleFromBasket(item)
                    }}>delete</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Basket