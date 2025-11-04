// src/router/VacanciesTable.jsx
import React, { useState, useEffect, useRef } from "react";
import "../components/Components.css";
import { FiUploadCloud, FiX } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { FiTrash2 } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

const VacanciesTable = () => {
  const { t } = useLanguage();
  const [companies, setCompanies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingId, setEditingId] = useState(null); // null = yangi, string = edit
  const [modalFormData, setModalFormData] = useState({
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
  const [modalImagePreview, setModalImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  // === localStorage dan yuklash ===
  const loadCompanies = () => {
    const loaded = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("company_")) {
        const id = key.replace("company_", "");
        try {
          const data = JSON.parse(localStorage.getItem(key));
          loaded.push({ id, ...data });
        } catch (e) {
          localStorage.removeItem(key);
        }
      }
    }
    setCompanies(loaded);
  };

  useEffect(() => {
    loadCompanies();
    window.addEventListener("storage", loadCompanies);
    return () => window.removeEventListener("storage", loadCompanies);
  }, []);

  // === Modal ochish ===
  const openModal = (company = null) => {
    if (company) {
      setEditingId(company.id);
      setModalFormData(company.formData || {});
      setModalImagePreview(company.imagePreview || null);
    } else {
      setEditingId(null);
      setModalFormData({
        company_name: "", workplace: "", name: "", participation_date: "",
        project_branch: "", project_duration: "", initiator_name: "", project_status: "",
        land_area: "", vacant_jobs: "", allocated_lots: "", phone_number: "",
        production_plan: "", production_actual: "", own_funds: "", bank_loan: "",
        foreign_funds: "", export_plan: "", export_actual: "", allocated_plan: "", allocated_actual: ""
      });
      setModalImagePreview(null);
    }
    setModalIsOpen(true);
  };

  // === Modal yopish ===
  const closeModal = () => {
    setModalIsOpen(false);
    setEditingId(null);
  };

  // === Input o‘zgarishi ===
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalFormData(prev => ({ ...prev, [name]: value }));
  };

  // === Rasm yuklash ===
  const handleImageClick = () => fileInputRef.current?.click();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setModalImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // === Saqlash ===
  const handleSave = () => {
    const id = editingId || Date.now().toString();
    const dataToSave = { formData: modalFormData, imagePreview: modalImagePreview };
    localStorage.setItem(`company_${id}`, JSON.stringify(dataToSave));
    loadCompanies();
    closeModal();
    alert(t("data_saved") || "Ma'lumotlar saqlandi!");
  };

  // === O‘chirish ===
  const handleDelete = (id) => {
    if (window.confirm(t("delete_confirm") || "O‘chirishni xohlaysizmi?")) {
      localStorage.removeItem(`company_${id}`);
      loadCompanies();
    }
  };

  // === Bo‘sh holat ===
  if (companies.length === 0 && !modalIsOpen) {
    return (
      <div className="vacancies-section">
        <h3 className="vacancy-header">{t("vacancies_title")}</h3>
        <p>{t("no_data") || "Hali hech qanday kompaniya qo‘shilmagan."}</p>
        <button className="save-btn" onClick={() => openModal()}>
          {t("add_company") || "Yangi kompaniya qo‘shish"}
        </button>
      </div>
    );
  }

  return (
    <>
      {/* === JADVAL === */}
      <div className="vacancies-section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h3 className="vacancy-header">{t("vacancies_title")}</h3>
          <button className="save-btn" onClick={() => openModal()}>
            {t("add_company") || "Yangi qo‘shish"}
          </button>
        </div>

        <div className="vacancy-scroll">
          {companies.map(company => {
            const f = company.formData;
            const rows = [
              { title: "company_name", count: f.company_name || "-", phone: f.phone_number || "-" },
              { title: "vacancy_position", count: f.vacant_jobs || "0", phone: "" },
              { title: "monthly_salary", count: "1 000 000", phone: "" },
              { title: "benefits", count: "transport_expenses_covered", phone: "" },
            ];

            return (
              <div key={company.id} className="vacancy-box">
                <table className="vacancy-table">
                  <thead>
                    <tr>
                      <th>{t("table_company")}</th>
                      <th>{t("table_count")}</th>
                      <th>{t("table_phone")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => (
                      <tr key={i}>
                        <td>{t(row.title)}</td>
                        <td>{row.count}</td>
                        <td>{row.phone || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="table-actions">
                  <TbEdit
                    className="edit-btn"
                    title={t("edit")}
                    onClick={() => openModal(company)}
                    style={{ cursor: "pointer" }}
                  />
                  <FiTrash2
                    className="delete-btn"
                    title={t("delete")}
                    onClick={() => handleDelete(company.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            );
          })}

          <div className="table-pagination">
            <span>{t("pagination_info")}</span>
            <div className="pagination-controls">
              <button aria-label={t("prev_page")}>{"<"}</button>
              <button aria-label={t("next_page")}>{">"}</button>
            </div>
          </div>
        </div>
      </div>

      {/* === MODAL (ProfileForm ichida) === */}
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingId ? t("edit_data") : t("add_company")}</h3>
              <FiX className="modal-close" onClick={closeModal} style={{ cursor: "pointer", fontSize: "24px" }} />
            </div>

            {/* FOTO */}
            <div className="photo-section">
              <div className="photo-box" onClick={handleImageClick} style={{ cursor: "pointer" }}>
                {modalImagePreview ? (
                  <img src={modalImagePreview} alt="Preview" className="preview-image" />
                ) : (
                  <>
                    <FiUploadCloud className="upload-icon" />
                    <p className="upload-text">
                      {t("upload_click_text")?.split("<br />").map((line, i) => (
                        <React.Fragment key={i}>{line}{i < t("upload_click_text").split("<br />").length - 1 && <br />}</React.Fragment>
                      ))}
                    </p>
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
                <button type="button" className="upload-btn" onClick={e => { e.stopPropagation(); handleImageClick(); }}>
                  {t("upload_button")}
                </button>
              </div>
            </div>

            {/* FORMA */}
            <div className="form-section" style={{ maxHeight: "60vh", overflowY: "auto", padding: "0 10px" }}>
              <h4>{t("general_info")}</h4>
              <div className="form-grid">
                {Object.keys(modalFormData).map(key => (
                  <div className="form-item" key={key}>
                    <label>{t(key)}</label>
                    <input
                      type="text"
                      name={key}
                      placeholder={t(`${key}_ph`) || ""}
                      value={modalFormData[key]}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
              </div>

              {/* Pastdagi bloklar */}
              <div className="form-section-bottom">
                <div className="bottom-box">
                  <h4>{t("production_capacity")}</h4>
                  <div className="double-inputs">
                    <div><label>{t("plan")}</label><input name="production_plan" value={modalFormData.production_plan} onChange={handleInputChange} placeholder={t("plan_ph")} /></div>
                    <div><label>{t("actual")}</label><input name="production_actual" value={modalFormData.production_actual} onChange={handleInputChange} placeholder={t("actual_ph")} /></div>
                  </div>
                </div>

                <div className="bottom-box">
                  <h4>{t("total_project_cost")}</h4>
                  <div className="quad-inputs">
                    <input name="own_funds" value={modalFormData.own_funds} onChange={handleInputChange} placeholder={t("own_funds_ph")} />
                    <input name="bank_loan" value={modalFormData.bank_loan} onChange={handleInputChange} placeholder={t("bank_loan_ph")} />
                    <input name="foreign_funds" value={modalFormData.foreign_funds} onChange={handleInputChange} placeholder={t("foreign_funds_ph")} />
                  </div>
                </div>

                <div className="bottom-box">
                  <h4>{t("export_value")}</h4>
                  <div className="double-inputs">
                    <div><label>{t("plan")}</label><input name="export_plan" value={modalFormData.export_plan} onChange={handleInputChange} placeholder={t("plan_ph")} /></div>
                    <div><label>{t("actual")}</label><input name="export_actual" value={modalFormData.export_actual} onChange={handleInputChange} placeholder={t("actual_ph")} /></div>
                  </div>
                </div>

                <div className="bottom-box">
                  <h4>{t("allocated_funds")}</h4>
                  <div className="double-inputs">
                    <div><label>{t("plan")}</label><input name="allocated_plan" value={modalFormData.allocated_plan} onChange={handleInputChange} placeholder={t("plan_ph")} /></div>
                    <div><label>{t("actual")}</label><input name="allocated_actual" value={modalFormData.allocated_actual} onChange={handleInputChange} placeholder={t("actual_ph")} /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* TUGMALAR */}
            <div className="modal-buttons" style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
              <button className="edit1-btn" onClick={closeModal} style={{ background: "#ddd" }}>
                {t("cancel") || "Bekor qilish"}
              </button>
              <button className="save-btn" onClick={handleSave}>
                {t("save_data") || "Saqlash"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VacanciesTable;