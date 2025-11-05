// router/Home.jsx
import React from "react";
import "./Page.css";
import Result from "../components/Result";
import Statistika from "../components/Statistika";
import { useLanguage } from "../context/LanguageContext"; // YANGI
import { Link } from "react-router-dom"
import { BiSolidPhoneCall, BiSolidEnvelope } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import Map from "../components/Map";

function Home() {
  const { t } = useLanguage(); // Tarjima funksiyasi

  // Dinamik districtlar (6 ta)
  // const districts = Array(6).fill({
  //   name: t("district_name"),
  //   updated: t("last_updated"),
  // });
  const tumanlar = [
    {
      slog: "slog1",
      id: 1,
      title: "Поп миршикори мчж",
      desc: "Дата изменения | 18:37"
    },
    {
      slog: "slog2",
      id: 2,
      title: "Поп миршикори мчж",
      desc: "Дата изменения | 18:37"
    },
    {
      slog: "slog3",
      id: 3,
      title: "Поп миршикори мчж",
      desc: "Дата изменения | 18:37"
    },
    {
      slog: "slog4",
      id: 4,
      title: "Поп миршикори мчж",
      desc: "Дата изменения | 18:37"
    },
    {
      slog: "slog5",
      id: 5,
      title: "Поп миршикори мчж",
      desc: "Дата изменения | 18:37"
    },
    {
      slog: "slog6",
      id: 6,
      title: "Поп миршикори мчж",
      desc: "Дата изменения | 18:37"
    }
  ]

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
        {/* <div className='swiper_all'>
          <h1 className='swiper_h1'>Туманлар</h1>
          <div className="swiper">
            {
              tumanlar.map((item, index) => {
                return (
                  <Link
                    key={index} className='swiper_slide'
                    to={`/${item.slog}`}
                  >
                    <div className='swiper_hr'></div>
                    <div className='swiper_flex'>
                      <h2>{item.title}</h2>
                      <h6>{item.desc}</h6>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div> */}
        <Map/>



       {/* === ABOUT SECTION === */}
        <div className="about">
          <div className="about_left">
            <h2 className="about_title">{t("about_title")}</h2>
            <h3 className="about_subtitle">{t("about_subtitle")}</h3>
            <p className="about_code">{t("about_code")}</p>
            <p className="about_text">{t("about_text")}</p>
            <Link className="link" to={'/about'}>
              <button className="about_btn">{t("about_btn")}</button>
            </Link>
          </div>
          <div className="about_border"></div>

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
        <div className='contact'>
          <div className="container">
            <div className="contact__page">
              <div className="contact__page-img">
                <div className="contact__text">
                  <div className="contact__text-top">
                    <h2>Контактная информация</h2>
                    <span>Отправьте свои данные для связи</span>
                  </div>
                  <ul className='items'>
                    <li className='item'>
                      <BiSolidPhoneCall className='item__icon' />
                      +1012 3456 789
                    </li>
                    <li className='item'>
                      <BiSolidEnvelope className='item__icon' />
                      demo@gmail.com
                    </li>
                    <li className='item'>
                      <FaLocationDot className='item__icon' />
                      132 Dartmouth Street Boston, Massachusetts 02156 United States
                    </li>
                  </ul>
                  <ul className="socials">
                    <li className="social">
                      <FaTwitter />
                    </li>
                    <li className="social">
                      <FaInstagram />
                    </li>
                    <li className="social">
                      <FaDiscord />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact__form">
                <form>
                  <label>
                    <span>Имя</span>
                    <input type="text" />
                  </label>
                  <label>
                    <span>Фамилия</span>
                    <input placeholder='Doe' type="text" />
                  </label>
                  <label>
                    <span>Электронная почта</span>
                    <input type="email" />
                  </label>
                  <label>
                    <span>Номер телефона</span>
                    <input placeholder='+1 012 3456 789' type="tel" />
                  </label>
                  <label className='message'>
                    <span>Сообщение</span>
                    <input placeholder='Напишите своё сообщение..' type="text" />
                  </label>

                  <div className="contact__button">
                    <button>
                      Отправить сообщение
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;