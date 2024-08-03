import React from 'react';
import Stock from '../components/Stock'

export default function StockContainer( {stocks, onBuy }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => (
        <Stock
          key={stock.id}
          stock={stock}
          onAction={onBuy}
          actionType="buy"
        />
      ))}
    </div>
  );
}