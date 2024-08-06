import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Maincontext from '../Context/Context';
import AddTable from './AddTable';

const AddCard = () => {
  const { handleAddCard } = useContext(Maincontext);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const { data, handleDeleteCard } = useContext(Maincontext);
  const handleCard = () => {
    if (title.trim() === '' || image.trim() === '' || category.trim() === '') {
      alert('Enter information!');
      return;
    }
    const newCard = { title, price, image, category };
    handleAddCard(newCard);
    navigate('/');
  };

  return (
    <div className='add-card container'>
      <h3 className='text-center mt-5'>Add Card Info</h3>
      <input
        type="text"
        className="mt-4"
        name="name"
        id="Card"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="number"
        className="mt-2"
        id="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <br />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <button type="submit" className="my-3 btn btn-outline-success  " onClick={handleCard}>
        Add Card
      </button>


      <AddTable rows={data} handleDelete={handleDeleteCard} />
    </div>
  );
};

export default AddCard;
