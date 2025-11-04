// components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Components.css";
import Logo from "../assets/photo_2025-11-04_15-33-59.jpg";
import FlagEN from "../assets/photo_2025-11-04_15-34-09.jpg";
import FlagUZ from "../assets/photo_2025-11-04_15-34-06.jpg";
import FlagRU from "../assets/photo_2025-11-04_15-34-03.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext"; // YANGI
import {Link} from "react-router-dom"

function Navbar() {
  const { language, setLanguage, t } = useLanguage(); // YANGI: Contextdan olamiz
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Barcha tillar
  const languages = [
    { code: "UZ", flag: FlagUZ },
    { code: "RU", flag: FlagRU },
    { code: "EN", flag: FlagEN },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[1]; // Default: RU

  const handleSelect = (code) => {
    setLanguage(code); // Global til o'zgaradi
    setOpen(false);
  };

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      <div className="nav_contanier">
        <div className="nav_logo">
          <Link className="link nav_logo" to={'/'}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav_center">
          <ul className="nav_center_ul">
            <Link className="link" to={'/'}>
              <li>{t("nav_home")}</li>
            </Link>
            <Link className="link" to={'/about'}>
              <li>{t("nav_about")}</li>
            </Link>
            <Link className="link" to={'/contact'}>
              <li>{t("nav_contact")}</li>
            </Link>
          </ul>
        </div>
        <div className="nav_lan" ref={dropdownRef}>
          <div className="lang-selector" onClick={() => setOpen(!open)}>
            <img src={currentLang.flag} alt={language} className="flag-icon" />
            <span className="lang-code">{language}</span>
            <span className={`arrow ${open ? "open" : ""}`}>
              <MdOutlineArrowDropDown className="arrow_i" />
            </span>
          </div>

          {open && (
            <div className="lang-dropdown">
              {languages
                .filter((lang) => lang.code !== language)
                .map((lang) => (
                  <div
                    key={lang.code}
                    className="lang-option"
                    onClick={() => handleSelect(lang.code)}
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