// import styles from "../styles/Home.module.css";
import { useState } from "react";
import { products, getTotalBelanja } from "../utils";

const Card = ({ title, price, imgSrc, type, handleBuy, cartMode }) => {
  return (
    <div className="col">
      <div className="card p-2 h-100" style={{ backgroundColor: "#ecf0f1" }}>
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small className="text-muted">{type}</small>
          </p>
          <p className="card-text">
            {new Intl.NumberFormat("id", {
              style: "currency",
              currency: "IDR",
            }).format(price)}
          </p>
        </div>
        {!cartMode && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleBuy(title)}
          >
            Beli
          </button>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const [boughtProducts, setBought] = useState([]);
  const [cartMode, setCardMode] = useState(false);
  const totalBelanja = getTotalBelanja(boughtProducts);

  const handleBuy = (title) => {
    const prd = products.find((p) => p.title === title);
    if (!cartMode && !boughtProducts.includes(prd)) {
      setBought((prev) => [...prev, prd]);
    }
  };

  const displayedProducts = cartMode
    ? boughtProducts
    : products.filter((val) => !boughtProducts.includes(val));

  return (
    <div className="p-4">
      <div className="float-end">
        <button
          className="btn btn-secondary mb-3 "
          onClick={() => setCardMode((prev) => !prev)}
        >
          {cartMode ? "Listing" : "Cart"}
        </button>
        {cartMode && (
          <div style={{ color: "white" }}>
            <h1>Total belanja: </h1>
            <h5>
              {new Intl.NumberFormat("id", {
                style: "currency",
                currency: "IDR",
              }).format(totalBelanja)}
            </h5>
          </div>
        )}
        {cartMode && (
          <ol style={{ color: "white" }}>
            {boughtProducts.map((e) => (
              <li key={e.title}>{e.title}</li>
            ))}
          </ol>
        )}
      </div>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {displayedProducts.map((product, i) => (
          <Card
            key={i}
            price={product.price}
            title={product.title}
            imgSrc={product.img}
            type={product.type}
            handleBuy={handleBuy}
            cartMode={cartMode}
          />
        ))}
      </div>
      <style global jsx>
        {`
          body {
            background-color: #34495e;
            color: #2c3e50;
          }
          .btn-primary {
            background-color: #2c3e50;
          }
          h1 {
            color: white;
          }
        `}
      </style>
    </div>
  );
}
