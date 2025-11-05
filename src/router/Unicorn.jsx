// src/pages/Unicorn.jsx
import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Page.css";
import { useLanguage } from "../context/LanguageContext";

// Images
import DefoultImg from '../assets/rayon__img.png';

// Components
import Result from '../components/Result';
import Statistika from '../components/Statistika';

const Unicorn = () => {
  const [tumanlar, setTumanlar] = useState([]);

  // Backenddan ma'lumotlarni olish
  const fetchTumanlar = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/unicorns");
      setTumanlar(res.data);
    } catch (error) {
      console.error("Ma'lumot olishda xato:", error);
    }
  };

  useEffect(() => {
    fetchTumanlar();
  }, []);
  const { t } = useLanguage();

  return (
    <div className="container">
      <Result />
      <Statistika />

      <div className='swiper_all'>
        <div className="header-flex" style={{ marginBottom: '20px' }}>
          <h1 className='swiper_h1'>
          {t("rayonlar_")}
            </h1>
        </div>

        <div className="swiper">
          {tumanlar.length > 0 ? (
            tumanlar.map((item) => (
              <div key={item._id} className='swiper_slide'>
                <div className='swiper_hr'></div>
                <div className='swiper_flex unicorn_slide'>
                  <div className="swiper_text">
                    <h2>{item.title}</h2>
                    <h6>{item.desc}</h6>
                    <p>
                      <small>
                        {new Date(item.date).toLocaleDateString("uz-UZ", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </small>
                    </p>
                  </div>

                  <div className="swiper_edit">
                    <div className="swiper_edit-img">
                      <img
                        src={item.image || DefoultImg}
                        alt={item.title}
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover",
                          borderRadius: "8px"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state" style={{ textAlign: 'center', padding: '40px' }}>
              <p>{t("rayonlar_malumot")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Unicorn;