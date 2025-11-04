// router/Home.jsx
import React from "react";
import "./Page.css";
import Result from "../components/Result";
import Statistika from "../components/Statistika";
import { useLanguage } from "../context/LanguageContext"; // YANGI

function Home() {
  const { t } = useLanguage(); // Tarjima funksiyasi

  // Dinamik districtlar (6 ta)
  const districts = Array(6).fill({
    name: t("district_name"),
    updated: t("last_updated"),
  });

  return (
    <div className="home">
      <div className="container">
        {/* === BANNER === */}
        <div className="banner">
          <div className="dark">
            <h1 className="dark_h1">{t("banner_title")}</h1>
            <div className="dark_hr"></div>
            <p className="dark_p">{t("banner_text")}</p>
          </div>
        </div>

        {/* === RESULT & STATISTIKA === */}
        <Result />
        <Statistika />

        {/* === DISTRICTS (Tumanlar) === */}
        <div className="swiper_all">
          <h1 className="swiper_h1">{t("districts_title")}</h1>
          <div className="swiper">
            {districts.map((district, index) => (
              <div className="swiper_slide" key={index}>
                <div className="swiper_hr"></div>
                <div className="swiper_flex">
                  <h2>{district.name}</h2>
                  <h6>{district.updated}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === ABOUT SECTION === */}
        <div className="about">
          <div className="about_left">
            <h2 className="about_title">{t("about_title")}</h2>
            <h3 className="about_subtitle">{t("about_subtitle")}</h3>
            <p className="about_code">{t("about_code")}</p>
            <p className="about_text">{t("about_text")}</p>
            <button className="about_btn">{t("about_btn")}</button>
          </div>

          {/* === STATISTIKA BOXES === */}
          <div className="about_right">
            {/* 10 000+ */}
            <div className="about_box">
              <p className="about_num">10 000+</p>
              <p className="about_desc">
                {t("stat_new_jobs").split("<br />").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t("stat_new_jobs").split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* 100% */}
            <div className="about_box">
              <p className="about_num">100%</p>
              <p className="about_desc">
                {t("stat_communication").split("<br />").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t("stat_communication").split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* 45+ */}
            <div className="about_box">
              <p className="about_num">45+</p>
              <p className="about_desc">
                {t("stat_zones").split("<br />").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t("stat_zones").split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* 10 лет */}
            <div className="about_box">
              <p className="about_num">10 лет</p>
              <p className="about_desc">
                {t("stat_rent").split("<br />").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < t("stat_rent").split("<br />").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;