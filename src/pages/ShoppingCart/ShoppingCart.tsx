import React from "react";
import styled from "styled-components";

interface IShoppingCartProps {}

const Button = styled.button`
  background-color:${props => (props.color ? '#ED2924' : '#E6E6E6')};
`

const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (props) => {
  return <>
    <Button color="blue">购物车</Button>
  </>;
};

export default ShoppingCart;
