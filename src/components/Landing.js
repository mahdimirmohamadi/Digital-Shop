import React, { useState, useEffect } from "react";
//API
import { getProduct } from "../services/api";

//Components
import Loader from "./Loader";
import Product from "./Product";

//Styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getProduct();
      console.log(data);
      setProducts(data);
    };

    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <br />
      <input
        className={styles.input}
        placeholder="Search What you need..."
        list="product-search"
        value={search}
        onChange={searchHandler}
      />

      <datalist id="product-search">
        {products.length ? (
          <div className={styles.productContainer}>
            {searchedProducts.map((product) => (
              <option value={product.title} />
            ))}
          </div>
        ) : (
          <Loader />
        )}

        {/* <option value="Chocolate">Chocolate</option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option> */}
      </datalist>

      {products.length ? (
        <div className={styles.productContainer}>
          {searchedProducts.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.images[2] ? product.images[2] : <p>no photo!</p>}
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
