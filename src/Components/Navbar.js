import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import log from "../Imgs/ak_kalpak.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  // Set initial theme on load
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setIsDarkTheme(false);
  }, []);

  const switchTheme = (e) => {
    const isChecked = e.target.checked;
    setIsDarkTheme(isChecked);

    if (isChecked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageMenuOpen(false); // Close menu after selection
  };

  return (
    <header>
      <div className="logo">
        <img src={log} alt="Logo" />
        <div className="logo-text">Mr Kalpak</div>
      </div>

      <nav>
        <div className="togglebtn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navlinks ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/students">Projects</Link>
          </li>

          {/* Language Selector */}
          <li>
            <div className="language-selector">
              <button onClick={toggleLanguageMenu}>
                {selectedLanguage}
              </button>
              {isLanguageMenuOpen && (
                <ul className="language-menu">
                  <li onClick={() => handleLanguageChange("EN")}>EN</li>
                  <li onClick={() => handleLanguageChange("RU")}>RU</li>
                  <li onClick={() => handleLanguageChange("KG")}>KG</li>
                </ul>
              )}
            </div>
          </li>

          {/* Theme Switch */}
          <li>
            <label className="switch">
              <input
                type="checkbox"
                onChange={switchTheme}
                checked={isDarkTheme}
              />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
