import React, { useState, useEffect, useRef } from "react";
import "./Components.css";
import Logo from "../assets/photo_2025-11-04_15-33-59.jpg";
import FlagEN from "../assets/photo_2025-11-04_15-34-09.jpg";
import FlagUZ from "../assets/photo_2025-11-04_15-34-06.jpg";
import FlagRU from "../assets/photo_2025-11-04_15-34-03.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState({
    code: "EN",
    flag: FlagEN,
  });

  const dropdownRef = useRef(null);

  const handleSelect = (code, flag) => {
    setLanguage({ code, flag });
    setOpen(false);
  };

  // tashqariga bosilganda yopiladi
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // tildagi variantlar (tanlangan tilni chiqarma)
  const languages = [
    { code: "EN", flag: FlagEN },
    { code: "UZ", flag: FlagUZ },
    { code: "RU", flag: FlagRU },
  ].filter((lang) => lang.code !== language.code);

  return (
    <div className='navbar'>
      <div className="nav_contanier">
        <div className="nav_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav_center">
          <ul className="nav_center_ul">
            <li>Главный</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div className="nav_lan" ref={dropdownRef}>
          <div className="lang-selector" onClick={() => setOpen(!open)}>
            <img
              src={language.flag}
              alt={language.code}
              className="flag-icon"
            />
            <span className="lang-code">{language.code}</span>
            {/* 👇 arrow endi rotate bo‘ladi */}
            <span className={`arrow ${open ? "open" : ""}`}>
                <MdOutlineArrowDropDown className="arrow_i" />
            </span>
          </div>

          {open && (
            <div className="lang-dropdown">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="lang-option"
                  onClick={() => handleSelect(lang.code, lang.flag)}
                >
                  <img src={lang.flag} alt={lang.code} className="flag-icon" />
                  <span>{lang.code}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;