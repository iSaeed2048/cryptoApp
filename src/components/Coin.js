import React from "react";

// Style
import styles from "./Coin.module.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  marketCap,
  priceChange,
  marketCapRank,
}) => {
  return (
    <div className={styles.container}>
      <span className={styles.marketCapRank}>{marketCapRank}</span>
      <img src={image} alt={name} className={styles.image} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>${price.toLocaleString()}</span>
      <span
        className={
          priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
      >
        %{priceChange.toFixed(2)}
      </span>
      <span className={styles.marketCap}>${marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
