import React from "react";
import { Menu } from "semantic-ui-react";
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
      <Menu.Item fitted >
        <NavLink to={`/category/${cat.toLowerCase()}`} id={cat.toLowerCase()}>
          {cat}
        </NavLink>
      </Menu.Item>
    );
  });

  return (
    <div>
      <Menu
        id="navbar"
        inverted
        secondary
        fluid widths="8"
        color="grey"
        borderless
        stackable
        fitted
      >
        <Menu.Item fitted>
          <NavLink to="/">
            <span id="logo">DNS</span>
          </NavLink>
        </Menu.Item>
        {renderCategories}
      </Menu>
    </div>
  );
};

export default Navbar;
