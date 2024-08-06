import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
const Detail = () => {
    const [detail,setdetail]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`).then(res=>{
            setdetail(res.data)
        })
    })
  return (
    <div className='detail' >
     
      <div className='detail.all'>
      <div className="detail-page container">
      <div className="row">
        <div className="col-md-6">
          <img src={detail.image} alt={detail.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{detail.title}</h1>
          <p className="price">{detail.price}</p>
          <p className="description">{detail.description}</p>
          
          <p className='mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, porro? Numquam nisi dolorum dolor deserunt ullam dolores, explicabo at magni autem quam, consequatur ut nesciunt dignissimos molestias tenetur, modi fugiat sunt iusto sit veniam blanditiis. Cupiditate quam tempora eligendi, officia doloremque amet nisi numquam minima unde magnam sint. Velit, ea?</p>
       
        </div>
      </div>
    </div>
      
    </div>
    </div>
  )
}

export default Detail