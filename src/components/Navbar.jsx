import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const { t } = useTranslation();
  let categories = [
    t("Current"),
    t("Local"),
    t("World"),
    t("Politics"),
    t("Economy"),
    t("Sport"),
    t("Entertainment"),
    t("Other"),
  ];

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  let renderCategories = categories.map((cat) => {
    return (
      <Menu.Item
        name={cat}
        active={activeItem === cat}
        onClick={handleItemClick}
      >
        <NavLink to={`/category/${cat.toLowerCase()}`} id={cat.toLowerCase()}>
          {cat}
        </NavLink>
      </Menu.Item>
    );
  });

  return (
    <div style={{ backgroundColor: "teal" }}>
      <Menu id="navbar" inverted pointing secondary width={10}>
        <Menu.Item></Menu.Item>
        <Menu.Item name="home" active={activeItem === "home"}>
          <NavLink to="/">
            <span id="logo">DNS</span>
          </NavLink>
        </Menu.Item>
        {renderCategories}
        <Menu.Item></Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
