// router/VacanciesTable.jsx
import React from "react";
import "../components/Components.css";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext"; // YANGI

const VacanciesTable = () => {
  const { t } = useLanguage(); // Tarjima funksiyasi

  const data = [
    {
      id: 1,
      name: "vacancy_company_1",
      rows: [
        { title: "company_name", count: "", phone: "+99895 2247 22 22" },
        { title: "vacancy_position", count: "10", phone: "" },
        { title: "monthly_salary", count: "1 000 000", phone: "" },
        { title: "benefits", count: "transport_expenses_covered", phone: "" },
      ],
    },
    {
      id: 2,
      name: "vacancy_company_2",
      rows: [
        { title: "company_name", count: "", phone: "+99895 2247 22 22" },
        { title: "vacancy_position", count: "10", phone: "" },
        { title: "monthly_salary", count: "1 000 000", phone: "" },
        { title: "benefits", count: "transport_expenses_covered", phone: "" },
      ],
    },
    {
      id: 3,
      name: "vacancy_company_3",
      rows: [
        { title: "company_name", count: "", phone: "+99895 2247 22 22" },
        { title: "vacancy_position", count: "10", phone: "" },
        { title: "monthly_salary", count: "1 000 000", phone: "" },
        { title: "benefits", count: "transport_expenses_covered", phone: "" },
      ],
    },
  ];

  return (
    <div className="vacancies-section">
      <h3 className="vacancy-header">{t("vacancies_title")}</h3>

      <div className="vacancy-scroll">
        {data.map((item) => (
          <div key={item.id} className="vacancy-box">
            <table className="vacancy-table">
              <thead>
                <tr>
                  <th>{t("table_company")}</th>
                  <th>{t("table_count")}</th>
                  <th>{t("table_phone")}</th>
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{t(row.title)}</td>
                    <td>{row.count || t(row.count)}</td>
                    <td>{row.phone || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="table-actions">
              <TbEdit className="edit-btn" title={t("edit")} />
              <FiTrash2 className="delete-btn" title={t("delete")} />
            </div>
          </div>
        ))}

        <div className="table-pagination">
          <span>{t("pagination_info")}</span>
          <div className="pagination-controls">
            <button aria-label={t("prev_page")}>{"<"}</button>
            <button aria-label={t("next_page")}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesTable;