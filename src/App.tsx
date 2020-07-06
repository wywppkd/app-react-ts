import React from "react";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import Center from "./pages/Center/Center";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

/**
 * 获取store仓库
 */
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Center />
        <ShoppingCart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
