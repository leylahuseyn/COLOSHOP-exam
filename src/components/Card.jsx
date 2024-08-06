import React, { useContext } from 'react'
import Maincontext from '../Context/Context';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Card = ({ item }) => {
    console.log("item is", item);
    
    const {addTofav, addtoBasket}=useContext(Maincontext)
    return (
        <div className='mt-3 card-parent col-lg-2 col-md-4 col-sm-6 mb-4 '>
         
        <div class="cards">
        <FontAwesomeIcon className='heart-icon'  onClick={()=>{
       
       addTofav(item)
   }} icon={faHeart} />
            <Link to={`/Detail/${item.id}`}> <img className="card-img" src={item.image} alt=""></img></Link>
            <p>{item.title}</p>
            <b><span>$</span>{item.price}</b>
            <button onClick={() => {

addtoBasket(item)
            }} >Add to basket</button>
        </div>
    </div>
        

    )
}

export default Card