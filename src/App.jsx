
import { createBrowserRouter, RouterProvider} from 'react-router-dom' ;
import ROUTES from '../index.routes';
const router = createBrowserRouter(ROUTES)
import axios from 'axios';
import './assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Maincontext from './Context/Context';
// import AddCard from './pages/AddCard';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState([])
  const [fav,setfav]=useState(localStorage.getItem("wish")?JSON.parse(localStorage.getItem("wish")):[])

  useEffect(()=>{
    axios.get("http://localhost:3000/products").then(res=>{
      setData(res.data)
    })
  },[])
  const handleAddCard = (card) => {
    axios.post('http://localhost:3000/products', card)
      .then(response => {
        setData([...data, response.data]);
      })
      .catch(error => console.error(error));
  };

  const handleDeleteCard = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        setData(data.filter(card => card.id !== id));
      })
      .catch(error => console.error(error));
  };

  function addTOFAv(product) {
    const target = fav.find((item) => item.id === product.id);
    if (target) {
      target.count += 1;
      setfav([...fav]);
    } else {
      product.count = 1;
      setfav([...fav, product]);
      localStorage.setItem('wish', JSON.stringify([...fav, product]));
    }
  }

  function addTofav(product) {
    const target = fav.find((item) => item.id === product.id);
    if (target) {
     alert("This product is already in your wishlist!");
    } else {
      product.count = 1;
      setfav([...fav, product]);
      localStorage.setItem('wish', JSON.stringify([...fav, product]));
    }
  }

  function deleteFromFav(product) {
    const target = fav.find((item) => item.id === product.id);
    if (target) {
      target.count -= 1;
      if (target.count === 0) {
        const newFav = fav.filter((item) => item.id !== product.id);
        setfav(newFav);
        localStorage.setItem('wish', JSON.stringify(newFav));
      } else {
        setfav([...fav]);
        localStorage.setItem('wish', JSON.stringify(fav));
      }
    }
  }

  function deleFromFav(product) {
    const target = fav.find((item) => item.id === product.id);
    if (target) {
      target.count -= 1;
      if (target.count === 0) {
        const newFav = fav.filter((item) => item.id !== product.id);
        setfav(newFav);
        localStorage.setItem('wish', JSON.stringify(newFav));
      } else {
        setfav([...fav]);
        localStorage.setItem('wish', JSON.stringify(fav));
      }
    }
  }


  const allfunc ={
    data,
    addTOFAv,
    fav,
    addTofav,
    deleFromFav,
    deleteFromFav,
    handleAddCard,
    handleDeleteCard
  }
  return (
    <div>
<Maincontext.Provider value={allfunc}>
      <RouterProvider router={router}/>
    
</Maincontext.Provider>

    </div>
  )
}

export default App
