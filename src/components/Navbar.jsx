import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  let categories = [
    "Current",
    "World",
    "Politics",
    "Economy",
    "Sport",
    "Entertainment",
    "Other",
  ];

  let renderCategories = categories.map((cat) => {
    return (
      <Menu.Item>
        <NavLink to={`/category/${cat.toLowerCase()}`} id={cat.toLowerCase()}>
          {cat}
        </NavLink>
      </Menu.Item>
    );
  });

  return (
    <div id="navbar">
      <Menu color="lightgrey" centered>
        <Menu.Item>
          <NavLink to="/">
            <Icon name="home" size="big" color="blue"></Icon>
          </NavLink>
        </Menu.Item>
        {renderCategories}
      </Menu>
    </div>
  );
};

export default Navbar;
