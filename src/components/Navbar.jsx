import React from "react";
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
    [t("Current"), "current"],
    [t("Local"), "local"],
    [t("World"), "world"],
    [t("Politics"), "politics"],
    [t("Economy"), "economy"],
    [t("Sport"), "sport"],
    [t("Entertainment"), "entertainment"],
    [t("Other"), "other"],
  ];

  let renderCategories = categories.map((cat) => {
    return (
      <Menu.Item name={cat[1]} active={activeItem === cat[1]}>
        <NavLink
          to={`/category/${cat[1]}`}
          id={cat[1].toLowerCase()}
          className="cat-btn-text"
        >
          {cat[0]}
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
