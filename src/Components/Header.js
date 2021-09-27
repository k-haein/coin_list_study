import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  margin-bottom: 30px;
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  padding: 10px;
  border-radius: 20px;
  margin-right: 30px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${(props) => (props.selected ? "white" : "black")};
  background-color: ${(props) => (props.selected ? "blue" : "white")};
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item selected={pathname === "/"}>
        <Link to="/">Prices</Link>
      </Item>
      <Item selected={pathname === "/exchanges"}>
        <Link to="/exchanges">Exchanges</Link>
      </Item>
      <Item selected={pathname === "/coins"}>
        <Link to="/coins">Coins</Link>
      </Item>
    </List>
  </Header>
));
