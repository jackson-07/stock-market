import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import StockContainer from './containers/StockContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import './index.css'

export default function App() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [filterBy, setFilterBy] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(response => response.json())
      .then(data => setStocks(data))
      .catch(error => console.error('Error fetching stocks:', error));
  }, []);

  const handleBuy = (stock) => {
    if (!myStocks.some(s => s.id === stock.id)) {
      setMyStocks([...myStocks, stock]);
    }
  }

  const handleSell = (stock) => {
    setMyStocks(myStocks.filter(s => s.id !== stock.id));
  }

  const handleSort = (stock) => {
    setSortBy(stock);
  }

  const handleFilter = (type) => {
    setFilterBy(type);
  }

  const sortedStocks = stocks
    .filter(stock => filterBy ? stock.type === filterBy : true)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

  const stockTypes = [...new Set(stocks.map(stock => stock.type))];

  return (
    <div className="app-container">
      <Header />
      <Filter 
            onSort={handleSort} 
            onFilter={handleFilter}
            types={stockTypes}
          />
      <div className="stock-dashboard">
        <div className="stock-list">
          <StockContainer stocks={sortedStocks} onBuy={handleBuy} />
        </div>
        <div className="portfolio">
          <PortfolioContainer myStocks={myStocks} onSell={handleSell} />
        </div>
      </div>
    </div>
  );
}