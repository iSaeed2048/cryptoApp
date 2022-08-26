import React, { useState, useEffect } from "react";

// API
import { getCoin } from "../services/api.js";
import Coin from "./Coin.js";
// Components
import Loader from "./Loader.js";
// Style
import styles from "./Landing.module.css";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("A_Z");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoins(data);
    };

    fetchAPI();
    // run fetchAPI
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter(
    (i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.symbol.toLowerCase().includes(search.toLowerCase())
  );
  // const newCoins = ;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputDiv}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={searchHandler}
        />
        <div>
          <span className={styles.sortBy}>Sort by</span>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.select}
          >
            <option value="A_Z">&#9650; Market Cap</option>
            <option value="Z_A">&#9660; Market Cap</option>
            <option value="HIGH">&#9650; Price</option>
            <option value="LOW">&#9660; Price</option>
            <option value="CHANGE_UP">&#9650; 24h %</option>
            <option value="CHANGE_DOWN">&#9660; 24h %</option>
          </select>
        </div>
      </div>
      {coins.length ? (
        <div className={styles.coinContainer}>
          {sortBy === "A_Z" &&
            searchedCoins.map((i) => (
              <Coin
                key={i.id}
                symbol={i.symbol}
                name={i.name}
                image={i.image}
                price={i.current_price}
                marketCap={i.market_cap}
                priceChange={i.price_change_percentage_24h}
                marketCapRank={i.market_cap_rank}
              ></Coin>
            ))}
          {sortBy === "Z_A" &&
            searchedCoins
              .reverse()
              .map((i) => (
                <Coin
                  key={i.id}
                  symbol={i.symbol}
                  name={i.name}
                  image={i.image}
                  price={i.current_price}
                  marketCap={i.market_cap}
                  priceChange={i.price_change_percentage_24h}
                  marketCapRank={i.market_cap_rank}
                ></Coin>
              ))}
          {sortBy === "HIGH" &&
            searchedCoins
              .sort((a, b) => b.current_price - a.current_price)
              .map((i) => (
                <Coin
                  key={i.id}
                  symbol={i.symbol}
                  name={i.name}
                  image={i.image}
                  price={i.current_price}
                  marketCap={i.market_cap}
                  priceChange={i.price_change_percentage_24h}
                  marketCapRank={i.market_cap_rank}
                ></Coin>
              ))}
          {sortBy === "LOW" &&
            searchedCoins
              .sort((a, b) => a.current_price - b.current_price)
              .map((i) => (
                <Coin
                  key={i.id}
                  symbol={i.symbol}
                  name={i.name}
                  image={i.image}
                  price={i.current_price}
                  marketCap={i.market_cap}
                  priceChange={i.price_change_percentage_24h}
                  marketCapRank={i.market_cap_rank}
                ></Coin>
              ))}
          {sortBy === "CHANGE_UP" &&
            searchedCoins
              .sort(
                (a, b) =>
                  b.price_change_percentage_24h - a.price_change_percentage_24h
              )
              .map((i) => (
                <Coin
                  key={i.id}
                  symbol={i.symbol}
                  name={i.name}
                  image={i.image}
                  price={i.current_price}
                  marketCap={i.market_cap}
                  priceChange={i.price_change_percentage_24h}
                  marketCapRank={i.market_cap_rank}
                ></Coin>
              ))}
          {sortBy === "CHANGE_DOWN" &&
            searchedCoins
              .sort(
                (a, b) =>
                  a.price_change_percentage_24h - b.price_change_percentage_24h
              )
              .map((i) => (
                <Coin
                  key={i.id}
                  symbol={i.symbol}
                  name={i.name}
                  image={i.image}
                  price={i.current_price}
                  marketCap={i.market_cap}
                  priceChange={i.price_change_percentage_24h}
                  marketCapRank={i.market_cap_rank}
                ></Coin>
              ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
