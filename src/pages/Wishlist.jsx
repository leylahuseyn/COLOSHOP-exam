import React, { useContext } from 'react'
import Maincontext from '../Context/Context'


const Wishlist = () => {
  const { fav, deleFromFav } = useContext(Maincontext)

  return (
    <div className='container' style={{ height: "1000px" }}>
      <div className="row">
        {
          fav.map((items, index) => {
            return (

              <div className='card-parent col-lg-2 col-md-4 col-sm-6 mb-4'>
                <div>
                  <div class="cards ">
                    <img src={items.image} alt="" />
                    <p>{items.title}</p>
                    <b>{items.price}</b>
                    <p>{items.category}</p>
                    <button onClick={() => {
                      deleFromFav(items)
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

export default Wishlist