// components/Statistika.jsx
import React, { useState, useEffect } from "react";
import "./Components.css";
import { FaRegFolderOpen } from "react-icons/fa6";
import Img from "../assets/image.png";
import { useLanguage } from "../context/LanguageContext"; // YANGI

function Statistika() {
  const { t } = useLanguage(); // Tarjima funksiyasi

    const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = () => {
      const status = localStorage.getItem("isAdmin");
      setIsAdmin(status === "true");
    };
    checkAdmin();
    const interval = setInterval(checkAdmin, 500);
    return () => clearInterval(interval);
  }, []);


  const info = [
    {
      id: 1,
      icon: FaRegFolderOpen,
      color: "#00d097",
      num: 71,
      title: "small_industrial_zones",
      background: "#FFFFFF",
    },
    {
      id: 2,
      icon: FaRegFolderOpen,
      color: "#fdc748",
      num: "64 095",
      title: "internal_capacity",
      background: "#FFFFFF",
    },
    {
      id: 3,
      icon: FaRegFolderOpen,
      color: "#15c0e6",
      num: 1.25,
      title: "bank_funds",
      background: "#FFFFFF",
    },
    {
      id: 4,
      icon: FaRegFolderOpen,
      color: "#6d5dd3",
      num: 76,
      title: "export",
      background: "#FFFFFF",
    },
    {
      id: 5,
      icon: FaRegFolderOpen,
      color: "#15c0e6",
      num: 820.8,
      title: "total_area",
      background: "#FFFFFF",
    },
    {
      id: 6,
      icon: FaRegFolderOpen,
      color: "#fdc748",
      num: 8.675,
      title: "own_funds",
      background: "#FFFFFF",
    },
    {
      id: 7,
      icon: FaRegFolderOpen,
      color: "#6d5dd3",
      num: 1285,
      title: "projects",
      background: "#FFFFFF",
    },
    {
      id: 8,
      icon: FaRegFolderOpen,
      color: "#00d097",
      num: 8.875,
      title: "project_cost",
      background: "#FFFFFF",
    }
  ];

  return (
    <div className="statistika">
      <div className="container">
        <h2 className="title">{t("statistics_title")}</h2>
        <div className="pages">
          {/* Mavjud ish o'rinlari */}
          <div className="work">
            <div className="text">
              <h2>875</h2>
              <span>{t("vacant_jobs")}</span>
            </div>
            <div className="img">
              <img src={Img} alt="Vacant jobs" />
            </div>
          </div>

          {/* Info kartalar */}
          {info.map((item) => (
            <div key={item.id} className="page">
              <item.icon color={item.color} className="icon" />
              <h2>{item.num}</h2>
              <span>{t(item.title)}</span>
            </div>
          ))}

            {/* IJARA — faqat admin uchun */}
          {isAdmin && (
            <div className="ijara">
              <FaRegFolderOpen color="#6d5dd3" className="icon" />
              <h2>{t("Ижара")}</h2>
            </div>
          )}
        </div>

        </div>
      </div>
  );
}

export default Statistika;