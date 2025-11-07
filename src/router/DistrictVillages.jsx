// src/pages/DistrictVillages.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./Page.css";
import { useLanguage } from "../context/LanguageContext";
import DefoultImg from "../assets/rayon__img.png";
// import Result from "../components/Result";
import Statistika from "../components/Statistika";
import result_icon_1 from "../assets/Frame.png";
import result_icon_2 from "../assets/Frame (1).png";

const DistrictVillages = () => {
  const { district: urlDistrict } = useParams();               // /district/namangan-sh
  const district = urlDistrict?.trim();                        // "namangan-sh"

  const [qishloqlar, setQishloqlar] = useState([]);
  const [districtData, setDistrictData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [sections, setSections] = useState([]);

  // Section tartibini belgilash uchun funksiya
  const getSectionOrder = (title) => {
    const orderMap = {
      'workplaces': 1,
      'export': 2,
      'production': 3
    };
    return orderMap[title] || 0;
  };

  // Section rangini belgilash uchun funksiya
  const getSectionColor = (title) => {
    const colorMap = {
      'workplaces': '#3F8CFF',   // Ish joylari → ko'k
      'export': '#9C27B0',       // Eksport → binafsha
      'production': '#4CAF50'    // Ishlab chiqarish → yashil
    };
    return colorMap[title] || '#3F8CFF';
  };

  useEffect(() => {
    const fetchQishloqlar = async () => {
      if (!district) return;
      try {
        setLoading(true);
        setError(null);
        console.log("Frontend so‘rovi →", district);

        const res = await axios.get(
          `https://namangan-back-api.onrender.com/api/unicorns/district/${district}/locations`
        );

        console.log("Backend javobi →", res.data);
        setQishloqlar(res.data || []);
        setDistrictData({ district: urlDistrict, totalQishloq: (res.data || []).length });
      } catch (err) {
        console.error("Xato:", err.response?.data || err.message);
        setError(err.response?.data?.message || "Ma'lumot olishda xato");
        if (err.response?.status === 404) setQishloqlar([]);
      } finally {
        setLoading(false);
      }
    };
    fetchQishloqlar();
  }, [district]);

  useEffect(() => {
    const saved = localStorage.getItem("userCredentials");
    if (saved) {
      const { email, password } = JSON.parse(saved);
      if (email === "admin@gmail.com" && password === "admin") setIsAdmin(true);
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://namangan-back-api.onrender.com/api/results/district/Namangan");
        const apiData = res.data;
        console.log(apiData);
        

        const plan = Number(apiData.totalPlan);
        const actual = Number(apiData.totalActual);
        const village = Number(apiData.villageCount);

        // Ma'lumotlarni tartibli qilish
        const newSections = (apiData.titles || []).map(title => {
          const isWorkplaces = title === "workplaces";

          return {
            title,
            plan: isWorkplaces ? village : plan,
            actual: isWorkplaces ? village : actual,
            total: isWorkplaces ? (village || 1) : plan,
            color: getSectionColor(title),
            order: getSectionOrder(title),
          };
        });

        // Tartib bo'yicha saralash
        newSections.sort((a, b) => a.order - b.order);

        setSections(newSections);
      } catch (e) {
        console.error("Ma'lumotlarni yuklashda xatolik:", e);
        setSections([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* UI qismi o‘zgarishsiz – faqat “district” o‘rniga “urlDistrict” ko‘rsatiladi */
  if (loading) return <div className="container" style={{ textAlign: "center", padding: "40px" }}><p>Yuklanmoqda...</p></div>;
  if (error) return <div className="container" style={{ textAlign: "center", padding: "40px" }}><p>Xato: {error}</p><Link to="/unicorn">← Orqaga</Link></div>;
  if (qishloqlar.length === 0) return <div className="container" style={{ textAlign: "center", padding: "40px" }}><p>{urlDistrict} tumani uchun qishloq topilmadi</p><Link to="/unicorn">← Orqaga</Link></div>;

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    setMessage(""); setMessageType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { email, password } = formData;
    const admin = email === "admin@gmail.com" && password === "admin";

    localStorage.setItem("userCredentials", JSON.stringify(formData));
    localStorage.setItem("isAdmin", admin ? "true" : "false");
    setIsAdmin(admin);

    setMessage(admin ? "Hush kelibsiz!" : "Siz admin emassiz!");
    setMessageType(admin ? "success" : "error");

    setTimeout(() => {
      setIsModalOpen(false);
      setFormData({ email: "", password: "" });
      setMessage(""); setIsSubmitting(false);
    }, 2000);
  };

  const ProgressCircle = ({ value, total, label, color }) => {
    const pct = total === 0 ? 0 : (value / total) * 100;
    const r = 45;
    const c = 2 * Math.PI * r;
    const offset = c - (pct / 100) * c;

    return (
      <div className="result_card">
        <svg width="110" height="110" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r={r} stroke="#E0E0E0" strokeWidth="4" fill="none" />
          <circle
            cx="55" cy="55" r={r}
            stroke={color} strokeWidth="4" fill="none"
            strokeDasharray={c} strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset .5s ease", transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
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
      {/* <Result data={districtData} type="district" /> */}
      <div className="container">
      <div className="result">
        <div className="result_top">
          <h1 className="result_top_h1">{t("result_title")}</h1>
          {isAdmin && (
            <Link className="link" to="/add">
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
          {loading ? (
            <div className="loading-placeholder">
              <p>{t("loading") || "Yuklanmoqda..."}</p>
            </div>
          ) : sections.length === 0 ? (
            <div className="loading-placeholder">
              <p>{t("no_data") || "Ma'lumot topilmadi"}</p>
            </div>
          ) : (
            sections.map(section => (
              <div
                key={section.title}
                className="result_box"
                style={{
                  borderRadius: "20px",
                  padding: "24px",
                  backgroundColor: "#fff",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                }}
              >
                <p
                  style={{
                    color: section.color,
                    fontWeight: "700",
                    fontSize: "18px",
                    marginBottom: "18px",
                    textAlign: "center",
                  }}
                >
                  {t(section.title)}
                </p>
                <div className="result_cards">
                  <ProgressCircle value={section.totalPlan} total={section.total} label="plan" color={section.color} />
                  <ProgressCircle value={section.totalActual} total={section.total} label="actual" color={section.color} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>X</button>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{t("user_settings")}</h2>

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
                {t(messageType === "success" ? "welcome_admin" : "not_admin")}
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>{t("email")}</label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleInputChange} required placeholder={t("enter_email")}
                />
              </div>
              <div className="form-group">
                <label>{t("password")}</label>
                <input
                  type="password" name="password" value={formData.password}
                  onChange={handleInputChange} required placeholder={t("enter_password")}
                />
              </div>
              <button
                type="submit" className="modal-submit-btn" disabled={isSubmitting}
                style={{ backgroundColor: isSubmitting ? "#ccc" : "#3F8CFF", cursor: isSubmitting ? "not-allowed" : "pointer" }}
              >
                {isSubmitting ? t("checking") || "Tekshirilmoqda..." : t("submit")}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>

      <Statistika data={districtData} />

      <div className="swiper_all">
        <div className="header-flex" style={{ marginBottom: "20px" }}>
          <h1 className="swiper_h1">{urlDistrict} tumani qishloqlari ({qishloqlar.length} ta)</h1>
          <Link to="/" className="back-link">← Orqaga</Link>
        </div>

        <div className="swiper">
          {qishloqlar.map((q) => (
            <Link key={q._id} to={`/unicpage/${encodeURIComponent(q._id)}`} className="link">
              <div className="swiper_slide">
                <div className="swiper_hr"></div>
                <div className="swiper_flex unicorn_slide">
                  <div className="swiper_text">
                    <h2>{q._id}</h2>
                    <h6>{q.firstDesc || "Izoh yo'q"}</h6>
                    <p>{q.totalCount} ta MChJ</p>
                    <small>
                      {new Date().toLocaleDateString("uz-UZ", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </small>
                  </div>

                  <div className="swiper_edit">
                    <div className="swiper_edit-img">
                      <img
                        src={q.firstImage || DefoultImg}
                        alt={q._id}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictVillages;