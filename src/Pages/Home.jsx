// import { useGetCryptosQuery } from "../services/cryptoApi"
// import { cryptoApi } from "../services/cryptoApi.js";

import { useState, useEffect } from "react";
// import axios from "axios";
import millify from "millify";

const Home = () => {
  // const {data, isFetching} = useGetCryptosQuery()

  // if(isFetching){
  //     return <h1> Loading...</h1>
  // }
  // console.log(data)

  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   let limitedCryptoData = cryptoData
  // if(loading){
  //     return <h1>Loading...</h1>
  // }

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const options = {
  //         method: "GET",
  //         url: "https://coinranking1.p.rapidapi.com/coins",
  //         //   params: {
  //         //     referenceCurrencyUuid: 'yhjMzLPhuIDl',
  //         //     limit: '50',
  //         //     offset: '0',
  //         //     orderBy: '24hVolume',
  //         //     orderDirection: 'desc'
  //         //   },
  //         headers: {
  // "X-RapidAPI-Key": import.meta.VITE_API_KEY_COINRANKING
  //   ,
  //           "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //         },
  //       };

  //       try {
  //         const response = await axios.request(options);
  //         console.log(response.data);
  //         setCryptoData(response.data);
  //         // setIsLoading(false);
  //       } catch (error) {
  //         console.error(error);
  //       }  finally {
  //         setIsLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50"
        );
        const data = await response.json();
        setCryptoData(data); // Update state after successful fetch
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }

      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        const fetchData = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&sparkline=true&price_change_percentage=1h%2C24h%2C7d",
          options
        );
        //   "https://api.coingecko.com/api/v3/coins/list",
        //   options
        const response = await fetchData.json();
        console.log(response);
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

          {/* <div className="top__stats">
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
                    </div> */}

          {/* 

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
                      <h6>Current Price: {millify(crypto.current_price) }</h6>
                      <p>Market Cap.: {millify( crypto.market_cap)}</p>

                      <p>Total Volume: {millify(crypto.total_volume)}</p>
                      <p>Total Supply: {millify(crypto.total_supply)}</p>
                      <p>Rank: {crypto.market_cap_rank}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

           */}

          {/* Table */}

          <table>
            <thead>
              <tr>
                <td></td>
                <th>Rank</th>
                <th>Coin</th>
                <th>Price</th>
                <th>1h</th>
                <th>24h</th>
                <th>7D</th>
                <th>24h Volume</th>
                <th>Market Cap</th>
                <th>chart Last 7D</th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <h1> Please wait while get your data</h1>
              ) : (
                cryptoData.map((crypto) => (
                  <tr key={crypto.id}>
                    <td>S</td>
                    <td>{millify(crypto.market_cap_rank)}</td>
                    <td className="crypto__more">
                      <img
                        className="crypto__img"
                        src={crypto.image}
                        alt={crypto.name}
                      />
                      <h5>{crypto.name}</h5>
                      <p>{crypto.symbol}</p>
                    </td>
                    <td>{millify(crypto.current_price)}</td>
                    <td>{millify(crypto.price_change_percentage_1h_in_currency)}%</td>
                    <td>{millify(crypto.price_change_percentage_24h_in_currency)}%</td>
                    <td>{millify(crypto.price_change_percentage_7d_in_currency)}%</td>
                    <td>{millify(crypto.total_volume)}</td>
                    <td>{millify(crypto.market_cap)}</td>
                    <td>Ma</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </header>
    </>
  );
};

export default Home;
