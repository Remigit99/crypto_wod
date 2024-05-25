import { useEffect, useState } from "react";

import millify from "millify";

const Exchange = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoExchange, setCryptoExchange] = useState([]);

  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };

  

    const fetchExchange = async () => {

      try {
        const fetchExchangeData = await fetch(
          "https://api.coingecko.com/api/v3/exchanges?per_page=10",
          options
        )
        const result = await fetchExchangeData.json()
        setCryptoExchange(result)
      } catch (error) {
        console.log(error)
      }finally{
setIsLoading(false)
      }
      
    
   } 
  
   fetchExchange()

    }
    , []);

  return (
    <main>
      <div className="container exchange__container">
        <div className="exchange__header">
          <h2>Top Crypto Exchanges Ranked by Trust Score</h2>
        </div>

        <div className="exchange__main">
          {isLoading ? (
            <h3>Loading Exchange Data...</h3>
          ) : (
            <div className="exchange__table">
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Exchange</th>
                    <th>Trust Score</th>
                    <th> 24h Volume (Normalized)</th>
                    <th> 24h Volume</th>
                    <th>Monthly Visits</th>
                    <th>Last 7 Days</th>
                  </tr>
                </thead>

                <tbody>
                  {cryptoExchange.map((exchange) => (
                    <tr key={exchange.id}>
                      <td>{exchange.trust_score_rank}</td>
                      <td className="crypto__more">
                        <img className="crypto__img" src={exchange.image} alt={exchange.name} />
                        {exchange.name.replace("Exchange", "")}
                      </td>
                      <td>{exchange.trust_score}</td>
                      <td>{millify(exchange.trade_volume_24h_btc_normalized)}</td>
                      <td>{millify(exchange.trade_volume_24h_btc)}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Exchange;
