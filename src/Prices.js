import React from 'react';

const Prices = ({ listPrices, filterByPrice }) => {
  return (
    <div className="btn-container">
      {listPrices.map((price, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterByPrice(price)}
        >
          {price === 'all' ? 'All' : `< ${price}`}
        </button>
      ))}
    </div>
  );
};

export default Prices;
