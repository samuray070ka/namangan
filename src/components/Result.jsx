// components/Result.jsx
import React from "react";
import "../router/Page.css";
import result_icon_1 from "../assets/Frame.png";
import result_icon_2 from "../assets/Frame (1).png";
import { useLanguage } from "../context/LanguageContext"; // YANGI

function Result() {
  const { t } = useLanguage(); // Tarjima funksiyasi

  // Progress hisoblash funksiyasi
  const calculateProgress = (current, total) => {
    if (total === 0) return 0;
    return (current / total) * 100;
  };

  // SVG progress circle komponenti
  const ProgressCircle = ({ value, total, label, color }) => {
    const percentage = calculateProgress(value, total);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="result_card">
        <svg width="110" height="110" viewBox="0 0 110 110">
          {/* Orqa fon doirasi */}
          <circle
            cx="55"
            cy="55"
            r={radius}
            stroke="#E0E0E0"
            strokeWidth="4"
            fill="none"
          />
          {/* Progress doirasi */}
          <circle
            cx="55"
            cy="55"
            r={radius}
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.5s ease",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
          {/* Markazdagi raqam */}
          <text
            x="55"
            y="55"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="20"
            fontWeight="700"
            fill={color}
          >
            {value.toLocaleString()}
          </text>
        </svg>
        <span>{t(label)}</span>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="result">
        <div className="result_top">
          <h1 className="result_top_h1">{t("result_title")}</h1>
          <button className="result_top_btn1">
            <img src={result_icon_1} alt="" />
            {t("edit_data")}
          </button>
          <button className="result_top_btn2">
            <img src={result_icon_2} alt="" />
          </button>
        </div>

        <div className="result_bottom">
          {/* 1. Ish urin kilish */}
          <div className="result_box">
            <p>{t("workplaces")}</p>
            <div className="result_cards">
              <ProgressCircle value={3} total={2} label="plan" color="#3F8CFF" />
              <ProgressCircle value={3} total={2} label="actual" color="#3F8CFF" />
            </div>
          </div>

          {/* 2. Proizvodstvo */}
          <div className="result_box">
            <p>{t("production")}</p>
            <div className="result_cards">
              <ProgressCircle value={1000} total={750} label="plan" color="#4CAF50" />
              <ProgressCircle value={1200} total={1000} label="actual" color="#4CAF50" />
            </div>
          </div>

          {/* 3. Eksport */}
          <div className="result_box">
            <p>{t("export")}</p>
            <div className="result_cards">
              <ProgressCircle value={4182} total={4182} label="plan" color="#9C27B0" />
              <ProgressCircle value={4182} total={4182} label="actual" color="#9C27B0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;