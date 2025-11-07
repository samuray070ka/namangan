// src/pages/UnicPage.jsx (Tug'irlangan: Back link district'ni to'g'ri olish uchun)
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Page.css";
import { useLanguage } from "../context/LanguageContext";
// Images
import DefoultImg from '../assets/rayon__img.png';

// Components
import Result from '../components/Result';
import Statistika from '../components/Statistika';

const UnicPage = () => {
  const { location } = useParams(); // /unicpage/chust (qishloq nomi)
  const [mchjs, setMchjs] = useState([]); // MChJ ro'yxati
  const [villageData, setVillageData] = useState(null); // Qishloq statistikasi
  const [district, setDistrict] = useState(''); // Tuman nomini saqlash (back link uchun)
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchMchjs = async () => {
      if (!location) return;
      try {
        setLoading(true);
        const res = await axios.get(`https://namangan-back-api.onrender.com/api/unicorns/location/${location}`);
        setMchjs(res.data);
        setVillageData({ location, totalMchj: res.data.length });
        // Birinchi MChJ'dan district'ni olish (hammasi bir xil bo'lishi kerak)
        if (res.data.length > 0) {
          setDistrict(res.data[0].district);
        }
      } catch (error) {
        console.error("MChJ ma'lumotlarini olishda xato:", error);
        if (error.response?.status === 404) {
          setMchjs([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchMchjs();
  }, [location]);

  if (loading) return <div className="container" style={{ textAlign: 'center', padding: '40px' }}><p>Yuklanmoqda...</p></div>;
  if (mchjs.length === 0) return (
    <div className="container" style={{ textAlign: 'center', padding: '40px' }}>
      <p>{location} qishlog'i uchun MChJ topilmadi</p>
      <Link to="/unicorn">← Orqaga</Link>
    </div>
  );

  return (
    <div className="container">
      <Result data={villageData} type="village" />
      <Statistika data={villageData} />

      <div className='swiper_all'>
        <div className="header-flex" style={{ marginBottom: '20px' }}>
          <h1 className='swiper_h1'>{location} qishlog'i MChJlari ({mchjs.length} ta)</h1>
          <Link to={`/district/${district}`} className="back-link">← Orqaga ({district} tumani)</Link> {/* Tuzatildi: district'dan orqaga */}
        </div>
        
        <div className="swiper">
          {mchjs.map((item) => (
            <div key={item._id} className='swiper_slide'>
              <div className='swiper_hr'></div>
              <div className='swiper_flex unicorn_slide'>
                <div className="swiper_text">
                  <h2>{item.title}</h2> {/* MChJ nomi */}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnicPage;