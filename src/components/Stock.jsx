import React from 'react';

export default function Stock({ stock, onAction, actionType }) {
  return (
    <div>
      <h3>{stock.name} ({stock.ticker})</h3>
      <p>Price: ${stock.price}</p>
      <button onClick={() => onAction(stock)}>
        {actionType === 'buy' ? 'BUY' : 'SELL'}
      </button>
    </div>
  );
}