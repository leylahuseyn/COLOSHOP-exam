import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const AddTable = ({ rows, handleDelete }) => {
  return (
    <div className="container">
    <table className="table table-stripped table-hover table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Image</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.title}</td>
            <td>{row.price}</td>
            <td>{row.image}</td>
            <td>{row.category}</td>
            <td>
              <FontAwesomeIcon
                onClick={() => handleDelete(row.id)}
                icon={faTrash}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  );
};

export default AddTable;
