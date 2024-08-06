import React, { useContext, useState, useEffect } from 'react';
import Card from './Card';
import Maincontext from '../Context/Context';

const Cards = () => {
  const { data } = useContext(Maincontext);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data); 
  }, [data]);

  const filterItems = (category) => {
    if (category === 'All') {
      setFilteredData(data);
      
    } else {
      const filtered = data.filter((item) => item.category.toLowerCase() === category.toLowerCase());
      setFilteredData(filtered);
    }
  };

  return (
    <section className='third-part'>
      <div className='d-flex text-center new-arrivals'>
        <h1>New Arrivals</h1>
        <p className='red-line mt-3'></p>
        <div className='m-3'>
          <button className='btn' onClick={() => filterItems('All')}>All</button>
          <button className='btn' onClick={() => filterItems("women")}>Women's</button>
          <button className='btn' onClick={() => filterItems("accessories")}>Accessories's</button>
          <button className='btn' onClick={() => filterItems("men")}>Men's</button>
        </div>
      </div>
      <div className='container'>
        <div className="row card-items">
          {filteredData.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;