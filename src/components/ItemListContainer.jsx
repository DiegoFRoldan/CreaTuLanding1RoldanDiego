import React from 'react';
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h3>{greeting}</h3>
      {/* Aquí se mostrará el catálogo de productos en el futuro */}
    </div>
  );
};
export default ItemListContainer;
