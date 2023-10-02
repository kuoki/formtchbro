import React from 'react';
import { useChairManagement } from '../../context/useChairManagement';

const List = ( ) => {
  const { chairs} = useChairManagement()
  console.log(chairs, "soy chairs")
  return (
    <div className="col-12">
      <h2>Sillas disponibles</h2>
      
      {chairs.length === 0 ? (
        <p>No hay sillas registradas</p>
      ) : (
        <ul className="list-group mt-4 col-3">
          {chairs.map(chair => (
            <li className="list-group-item list-group-item-dark mt-2 " key={chair.id}>
              <p>Name: {chair.name}</p>
              <p>Material: {chair.material}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;