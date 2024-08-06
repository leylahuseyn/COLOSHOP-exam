import React, { useContext } from 'react'
import Maincontext from '../Context/Context'


const Basket = () => {
  const { fav, deleFromFav } = useContext(Maincontext)

  return (
    <div className='container' style={{ height: "1000px" }}>
      <div className="row">
        {
          fav.map((item, index) => {
            return (

              <div className='card-parent col-lg-2 col-md-4 col-sm-6 mb-4'>
                <div>
                  <div class="cards mt-5">
                    <img className="card-img" src={item.image} alt="" />
                    <p>{item.title}</p>
                    <b>{item.price}</b>
                    <p>count : {item.count}</p>
                    <button onClick={() => {
                      deleFromFav(item)
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