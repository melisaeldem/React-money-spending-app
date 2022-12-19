import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import products from "./products.json";
import Basket from "./components/Basket";
import BasketItem from "./components/BasketItem";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket =() => {
    setBasket ([]);
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);
  return (
    <>
      <Header  total= {total} money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
        ))}
        <Basket products={products} total={total} basket={basket}/>
        <button onClick={resetBasket}>Sepeti Temizle</button>
    </>
  );
}

export default App;
