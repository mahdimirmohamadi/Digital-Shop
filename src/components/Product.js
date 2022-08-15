import React from "react";
import styles from "./Product.module.css";

const Product = ({ title, description, image, price, discountPercentage }) => {
  console.log(price.toLocaleString() * discountPercentage);
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.image} />
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <span className={styles.price}>
        <del>${price.toLocaleString()}</del> -{discountPercentage.toFixed(0)}%
        <ins>
          {" "}
          $
          {price -
            ((price * discountPercentage) / 100).toFixed().toLocaleString()}
        </ins>
      </span>
    </div>
  );
};

export default Product;
