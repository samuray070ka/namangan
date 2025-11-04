// router/ProfileForm.jsx
import React from "react";
import "../components/Components.css";
import { FiUploadCloud } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext"; // YANGI

function ProfileForm() {
  const { t } = useLanguage(); // Tarjima funksiyasi

  return (
    <div className="profile-page">
      {/* === FOTO QISMI === */}
      <div className="photo-section">
        <div className="photo-box">
          <FiUploadCloud className="upload-icon" />
          <p className="upload-text">
            {t("upload_click_text").split("<br />").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t("upload_click_text").split("<br />").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
          <span className="upload-types">{t("upload_types")}</span>
          <button className="upload-btn">{t("upload_button")}</button>
        </div>

        <button className="edit1-btn">{t("edit_data")}</button>
      </div>

      {/* === FORMA QISMI === */}
      <div className="form-section">
        <h3>{t("general_info")}</h3>

        <div className="form-grid">
          <div className="form-item">
            <label>{t("company_name")}</label>
            <input type="text" placeholder={t("company_name_ph")} />
          </div>
          <div className="form-item">
            <label>{t("workplace")}</label>
            <input type="text" placeholder={t("workplace_ph")} />
          </div>

          <div className="form-item">
            <label>{t("name")}</label>
            <input type="text" placeholder={t("name_ph")} />
          </div>
          <div className="form-item">
            <label>{t("participation_date")}</label>
            <input type="text" placeholder={t("participation_date_ph")} />
          </div>

          <div className="form-item">
            <label>{t("project_branch")}</label>
            <input type="text" placeholder={t("project_branch_ph")} />
          </div>
          <div className="form-item">
            <label>{t("project_duration")}</label>
            <input type="text" placeholder={t("project_duration_ph")} />
          </div>

          <div className="form-item">
            <label>{t("initiator_name")}</label>
            <input type="text" placeholder={t("initiator_name_ph")} />
          </div>
          <div className="form-item">
            <label>{t("project_status")}</label>
            <input type="text" placeholder={t("project_status_ph")} />
          </div>

          <div className="form-item">
            <label>{t("land_area")}</label>
            <input type="text" placeholder={t("land_area_ph")} />
          </div>
          <div className="form-item">
            <label>{t("vacant_jobs")}</label>
            <input type="text" placeholder={t("vacant_jobs_ph")} />
          </div>

          <div className="form-item">
            <label>{t("allocated_lots")}</label>
            <input type="text" placeholder={t("allocated_lots_ph")} />
          </div>
          <div className="form-item">
            <label>{t("phone_number")}</label>
            <input type="text" placeholder={t("phone_number_ph")} />
          </div>
        </div>

        {/* === Pastdagi bloklar === */}
        <div className="form-section-bottom">
          <div className="bottom-box">
            <h4>{t("production_capacity")}</h4>
            <div className="double-inputs">
              <div>
                <label>{t("plan")}</label>
                <input type="text" placeholder={t("plan_ph")} />
              </div>
              <div>
                <label>{t("actual")}</label>
                <input type="text" placeholder={t("actual_ph")} />
              </div>
            </div>
          </div>

          <div className="bottom-box">
            <h4>{t("total_project_cost")}</h4>
            <div className="quad-inputs">
              <input type="text" placeholder={t("own_funds_ph")} />
              <input type="text" placeholder={t("bank_loan_ph")} />
              <input type="text" placeholder={t("foreign_funds_ph")} />
            </div>
          </div>

          <div className="bottom-box">
            <h4>{t("export_value")}</h4>
            <div className="double-inputs">
              <div>
                <label>{t("plan")}</label>
                <input type="text" placeholder={t("plan_ph")} />
              </div>
              <div>
                <label>{t("actual")}</label>
                <input type="text" placeholder={t("actual_ph")} />
              </div>
            </div>
          </div>

          <div className="bottom-box">
            <h4>{t("allocated_funds")}</h4>
            <div className="double-inputs">
              <div>
                <label>{t("plan")}</label>
                <input type="text" placeholder={t("plan_ph")} />
              </div>
              <div>
                <label>{t("actual")}</label>
                <input type="text" placeholder={t("actual_ph")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;