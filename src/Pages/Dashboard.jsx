import { useState, useEffect } from "react";

import millify from "millify";

const options = {
  method: "GET",
  headers: { accept: "application/json" },
};

const Dashboard = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchData = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=true&price_change_percentage=1h%2C24h%2C7d",
          options
        );

        const response = await fetchData.json();
        setCryptoData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <div className="container header__container">
          <div className="header__top">
            <h1>Global Crypto Stats</h1>
          </div>

          <div className="top__stats">
            <article>
              <p>Total Cryptocurrencies</p>
              <h4> 12,176</h4>
            </article>

            <article>
              <p>Total Exchanges</p>
              <h4>375</h4>
            </article>
            <article>
              <p>Total Market Cap</p>
              <h4>$3.4T</h4>
            </article>

            <article>
              <p>Total 24h volume</p>
              <h4>12,176</h4>
            </article>
            <article>
              <p>Total 24h volume</p>
              <h4>12,176</h4>
            </article>
          </div>
        </div>
      </header>
      <div>
        {isLoading ? (
          <p>Loading crypto data...</p>
        ) : (
          <div className="cryptos">
            {cryptoData.map((crypto) => (
              <article key={crypto.id}>
                <div className="crypto__header">
                  <div className="crypto__img">
                    <img src={crypto.image} alt={crypto.name} />
                  </div>
                  <h4>{crypto.symbol.toUpperCase()}</h4>
                </div>
                <div className="crypto__main">
                  <h6>Current Price: {millify(crypto.current_price)}</h6>
                  <p>Market Cap.: {millify(crypto.market_cap)}</p>

                  <p>Total Volume: {millify(crypto.total_volume)}</p>
                  <p>Total Supply: {millify(crypto.total_supply)}</p>
                  <p>Rank: {crypto.market_cap_rank}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
