// src/components/Result.jsx
import React, { useState, useEffect } from "react";
import "../router/Page.css";
import result_icon_1 from "../assets/Frame.png";
import result_icon_2 from "../assets/Frame (1).png";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";

function Result() {
  const { t } = useLanguage();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Button uchun
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setMessage("");
    setMessageType("");
  };

  // IDEAL: "Tekshirilmoqda..." faqat buttonda
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { username, email, password } = formData;

    if (username === "admin" && email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("userCredentials", JSON.stringify(formData));
      localStorage.setItem("isAdmin", "true");

      setMessage("Hush kelibsiz!");
      setMessageType("success");
    } else {
      localStorage.setItem("userCredentials", JSON.stringify(formData));
      localStorage.setItem("isAdmin", "false");

      setMessage("Siz admin emassiz!");
      setMessageType("error");
    }

    // 2 soniyadan keyin yopiladi
    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({ username: "", email: "", password: "" });
      setMessage("");
      setIsSubmitting(false);
    }, 2000);
  };

  const ProgressCircle = ({ value, total, label, color }) => {
    const percentage = total === 0 ? 0 : (value / total) * 100;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="result_card">
        <svg width="110" height="110" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r={radius} stroke="#E0E0E0" strokeWidth="4" fill="none" />
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
          <text x="55" y="55" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="700" fill={color}>
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

          {isAdmin && (
            <Link className="link" to={'/edit'}>
              <button className="result_top_btn1">
                <img src={result_icon_1} alt="Edit" />
                {t("edit_data")}
              </button>
            </Link>
          )}

          <button className="result_top_btn2" onClick={() => setIsModalOpen(true)}>
            <img src={result_icon_2} alt="Settings" />
          </button>
        </div>


        <div className="result_bottom">
          <div className="result_box">
            <p>{t("workplaces")}</p>
            <div className="result_cards">
              <ProgressCircle value={3} total={2} label="plan" color="#3F8CFF" />
              <ProgressCircle value={3} total={2} label="actual" color="#3F8CFF" />
            </div>
          </div>
          <div className="result_box">
            <p>{t("production")}</p>
            <div className="result_cards">
              <ProgressCircle value={1000} total={750} label="plan" color="#4CAF50" />
              <ProgressCircle value={1200} total={1000} label="actual" color="#4CAF50" />
            </div>
          </div>
          <div className="result_box">
            <p>{t("export")}</p>
            <div className="result_cards">
              <ProgressCircle value={4182} total={4182} label="plan" color="#9C27B0" />
              <ProgressCircle value={4182} total={4182} label="actual" color="#9C27B0" />
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>X</button>

            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              {t("user_settings") || "Foydalanuvchi sozlamalari"}
            </h2>

            {/* XABAR — darhol chiqadi */}
            {message && (
              <div
                style={{
                  margin: "0 0 20px",
                  padding: "14px 18px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "16px",
                  backgroundColor: messageType === "success" ? "#d4edda" : "#f8d7da",
                  color: messageType === "success" ? "#155724" : "#721c24",
                  border: `1px solid ${messageType === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                }}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>{t("username") || "Foydalanuvchi nomi"}</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  placeholder={t("enter username") || "Ismingizni kiriting"}
                />
              </div>

              <div className="form-group">
                <label>{t("email") || "Email"}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t("enter email") || "Email kiriting"}
                />
              </div>

              <div className="form-group">
                <label>{t("password") || "Parol"}</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder={t("enter password") || "Parolni kiriting"}
                />
              </div>


              {/* BUTTONDA "Tekshirilmoqda..." */}
              <button
                type="submit"
                className="modal-submit-btn"
                disabled={isSubmitting}
                style={{
                  backgroundColor: isSubmitting ? "#ccc" : "#3F8CFF",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Tekshirilmoqda..." : t("submit") || "Saqlash"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
