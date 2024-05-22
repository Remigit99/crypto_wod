// import { useGetCryptosQuery } from "../services/cryptoApi"
// import { cryptoApi } from "../services/cryptoApi.js";

import { useState, useEffect } from "react";
// import axios from "axios";

const Home = () => {
  // const {data, isFetching} = useGetCryptosQuery()

  // if(isFetching){
  //     return <h1> Loading...</h1>
  // }
  // console.log(data)

  const [cryptoData, setCryptoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  //           "X-RapidAPI-Key":
  //             "e9cfee1ad0msh6179072bac13d8fp12c52cjsn1e97ea2f28f1",
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
      //   try {
      //     const response = await fetch(
      //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50"
      //     );
      //     const data = await response.json();
      //     setCryptoData(data); // Update state after successful fetch
      //   } catch (error) {
      //     console.error(error);
      //   } finally {
      //     setIsLoading(false);
      //   }

      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        const fetchData = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
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

          <div>
            {isLoading ? (
              <p>Loading crypto data...</p>
            ) : (
              <div className="cryptos">
                {cryptoData.map((crypto) => (
                  <article key={crypto.id}>
                    <div className="crypto__header">
                      <div className="crypto__img">
                        <img src={crypto.img} alt={crypto.name} />
                      </div>
                      <h5>{crypto.symbol}</h5>
                    </div>
                    <div className="crypto__main">
                      <h6>Current Price: {crypto.current_price}</h6>
                      <p>Market Cap.: {crypto.market_cap}</p>

                      <p>Total Volume: {crypto.total_volume}</p>
                      <p>Total Supply: {crypto.total_supply}</p>
                      <p>Rank: {crypto.market_cap_rank}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* <div>
            {isLoading ? (
              <p>Loading crypto data...</p>
            ) : (
              cryptoData.map(
                ({ uuid, symbol, name, iconUrl, marketCap, price }) => (
                  <article key={uuid}>
                    <h4>{symbol}</h4>
                    <h3>{name}</h3>
                    <img src={iconUrl} alt={name} />
                    <h4>{marketCap}</h4>
                    <h4>{price}</h4>
                  </article>
                )
              )
            )}
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Home;
