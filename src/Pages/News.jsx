// import axios from "axios";
import { useEffect, useState } from "react";

const News = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoNews, setCryptoNews] = useState([]);
  // const options = {
  //   method: "GET",
  //   url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
  //   headers: {
  //     "X-RapidAPI-Key": import.meta.env.VITE_API_KEY_CRYPTONEWS,
  //     "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  //   },
  // };

  const url = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY_CRYPTONEWS,
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchCryptoNews = async () => {
      try {
        // const response = await axios.request(options);
        // console.log(response.data);

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data);
        setCryptoNews(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCryptoNews();
  }, []);

  return (
    <div className="container news__container">
      <div className="news__header">
        <h2>Latest and Most Refreshing News in the Cryptocurrency World</h2>
      </div>

      <main>
        {isLoading ? (
          <h1> Loading Cryptocurrency News</h1>
        ) : (
          <div className="crypto__news">
            {cryptoNews.map((news) => (
              <a
                key={news.title}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="news__thumbnail">
                  <img src={news.thumbnail} alt={news.title} />
                </div>

                <div className="crypto__details">
                  <h3>{news.title}</h3>
                  <p>
                    {news.description.length > 20
                      ? news.description.substring(0, 50) + "...."
                      : news.description}
                  </p>

                  <small>{news.createdAt.replace("+0000", "")}</small>
                  <div className="read__more">
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </a>
            ))}
          </div>

          // { createdAt, thumbnail, url, description, title }
        )}
      </main>
    </div>
  );
};

export default News;
