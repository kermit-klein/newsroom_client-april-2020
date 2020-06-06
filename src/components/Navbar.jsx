import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Navbar = () => {
  const activeItem = useSelector((state) => {
    return state.category.selectedCategory;
  });

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

  let renderCategories = categories.map((cat) => {
    return (
      <Menu.Item name={cat} active={activeItem === cat.toLowerCase()}>
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
        <Menu.Item name="home" active={activeItem === ""}>
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
