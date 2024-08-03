import React from 'react';
import Stock from '../components/Stock';

export default function PortfolioContainer({ myStocks, onSell }) {
  
  const totalValue = myStocks.reduce((sum, stock) => sum + stock.price, 0);

  return (
    <div>
      <h2>My Portfolio ${totalValue.toFixed(2)}</h2>
      {myStocks.map(stock => (
        <Stock 
          key={stock.id} 
          stock={stock} 
          onAction={onSell} 
          actionType="sell" 
        />
      ))}
    </div>
  );
}