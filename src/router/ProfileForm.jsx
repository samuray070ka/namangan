// src/router/ProfileForm.jsx
import React, { useState, useRef, useEffect } from "react";
import "../components/Components.css";
import { FiUploadCloud } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

function ProfileForm({ companyId, onClose, onSave }) {
  const { t } = useLanguage();
  const isEdit = !!companyId;
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    company_name: "",
    workplace: "",
    name: "",
    participation_date: "",
    project_branch: "",
    project_duration: "",
    initiator_name: "",
    project_status: "",
    land_area: "",
    vacant_jobs: "",
    allocated_lots: "",
    phone_number: "",
    production_plan: "",
    production_actual: "",
    own_funds: "",
    bank_loan: "",
    foreign_funds: "",
    export_plan: "",
    export_actual: "",
    allocated_plan: "",
    allocated_actual: "",
  });

  // === localStorage dan yuklash (edit uchun) ===
  useEffect(() => {
    if (isEdit && companyId) {
      const saved = localStorage.getItem(`company_${companyId}`);
      if (saved) {
        const data = JSON.parse(saved);
        setFormData(data.formData || {});
        setImagePreview(data.imagePreview || null);
      }
    }
  }, [companyId, isEdit]);

  // === Rasm tanlash ===
  const handleImageClick = () => fileInputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // === Input o‘zgarishi ===
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // === SAQLASH (localStorage + modal yopish) ===
  const handleSave = () => {
    const id = companyId || Date.now().toString(); // yangi ID
    const dataToSave = { formData, imagePreview };

    localStorage.setItem(`company_${id}`, JSON.stringify(dataToSave));
    alert(t("data_saved") || "Ma'lumotlar saqlandi!");

    if (onSave) onSave(id);
    if (onClose) onClose(); // Modalni yopish
  };

  return (
    <div className="profile-modal-content">
      {/* Modal Header */}
      <div className="modal-header">
        <h3>{isEdit ? t("edit_company") : t("add_company")}</h3>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      {/* Foto */}
      <div className="photo-section">
        <div className="photo-box" onClick={handleImageClick}>
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className="preview-image" />
          ) : (
            <>
              <FiUploadCloud className="upload-icon" />
              <p className="upload-text">{t("upload_click_text")}</p>
              <span className="upload-types">{t("upload_types")}</span>
            </>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageChange}
          />
          <button type="button" className="upload-btn" onClick={(e) => { e.stopPropagation(); handleImageClick(); }}>
            {t("upload_button")}
          </button>
        </div>
      </div>

      {/* Forma */}
      <div className="form-section">
        <h4>{t("general_info")}</h4>
        <div className="form-grid">
          {Object.keys(formData).map((key) => (
            <div className="form-item" key={key}>
              <label>{t(key)}</label>
              <input
                type="text"
                name={key}
                placeholder={t(`${key}_ph`) || ""}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>

        {/* Pastdagi bloklar (production, cost, export, allocated) */}
        <div className="form-section-bottom">
          {/* Production Capacity */}
          <div className="bottom-box">
            <h4>{t("production_capacity")}</h4>
            <div className="double-inputs">
              <div><label>{t("plan")}</label><input name="production_plan" value={formData.production_plan} onChange={handleInputChange} placeholder={t("plan_ph")} /></div>
              <div><label>{t("actual")}</label><input name="production_actual" value={formData.production_actual} onChange={handleInputChange} placeholder={t("actual_ph")} /></div>
            </div>
          </div>

          {/* Total Project Cost */}
          <div className="bottom-box">
            <h4>{t("total_project_cost")}</h4>
            <div className="quad-inputs">
              <input name="own_funds" value={formData.own_funds} onChange={handleInputChange} placeholder={t("own_funds_ph")} />
              <input name="bank_loan" value={formData.bank_loan} onChange={handleInputChange} placeholder={t("bank_loan_ph")} />
              <input name="foreign_funds" value={formData.foreign_funds} onChange={handleInputChange} placeholder={t("foreign_funds_ph")} />
            </div>
          </div>

          {/* Export Value */}
          <div className="bottom-box">
            <h4>{t("export_value")}</h4>
            <div className="double-inputs">
              <div><label>{t("plan")}</label><input name="export_plan" value={formData.export_plan} onChange={handleInputChange} placeholder={t("plan_ph")} /></div>
              <div><label>{t("actual")}</label><input name="export_actual" value={formData.export_actual} onChange={handleInputChange} placeholder={t("actual_ph")} /></div>
            </div>
          </div>

          {/* Allocated Funds */}
          <div className="bottom-box">
            <h4>{t("allocated_funds")}</h4>
            <div className="double-inputs">
              <div><label>{t("plan")}</label><input name="allocated_plan" value={formData.allocated_plan} onChange={handleInputChange} placeholder={t("plan_ph")} /></div>
              <div><label>{t("actual")}</label><input name="allocated_actual" value={formData.allocated_actual} onChange={handleInputChange} placeholder={t("actual_ph")} /></div>
            </div>
          </div>
        </div>

        {/* TUGMALAR: Faqat "Save" va "Cancel" */}
        <div className="modal-actions" style={{ marginTop: "20px", textAlign: "right" }}>
          <button className="cancel-btn" onClick={onClose}>
            {t("cancel") || "Bekor qilish"}
          </button>
          <button className="save-btn" onClick={handleSave} style={{ marginLeft: "10px" }}>
            {t("save_data") || "Saqlash"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;