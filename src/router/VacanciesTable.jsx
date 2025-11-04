import React from "react";
import "../components/Components.css";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { TbEdit } from "react-icons/tb";

const VacanciesTable = () => {
  const data = [
    {
      id: 1,
      name: "Полимикширо МЧЖ",
      rows: [
        { title: "Полимикширо МЧЖ", count: "", phone: "+99895 2247 22 22" },
        { title: "Пайпок ишлаб чиқариш", count: "10", phone: "" },
        { title: "Ойлик иш ҳақи", count: "1 000 000", phone: "" },
        {
          title: "Қулайликлар",
          count: "автотранспорт харажатлари тўлаб қўй",
          phone: "",
        },
      ],
    },
    {
      id: 2,
      name: "Полимикширо МЧЖ",
      rows: [
        { title: "Полимикширо МЧЖ", count: "", phone: "+99895 2247 22 22" },
        { title: "Пайпок ишлаб чиқариш", count: "10", phone: "" },
        { title: "Ойлик иш ҳақи", count: "1 000 000", phone: "" },
        {
          title: "Қулайликлар",
          count: "автотранспорт харажатлари тўлаб қўй",
          phone: "",
        },
      ],
    },
    {
      id: 3,
      name: "Полимикширо МЧЖ",
      rows: [
        { title: "Полимикширо МЧЖ", count: "", phone: "+99895 2247 22 22" },
        { title: "Пайпок ишлаб чиқариш", count: "10", phone: "" },
        { title: "Ойлик иш ҳақи", count: "1 000 000", phone: "" },
        {
          title: "Қулайликлар",
          count: "автотранспорт харажатлари тўлаб қўй",
          phone: "",
        },
      ],
    },
  ];

  return (
    <div className="vacancies-section">
      <h3 className="vacancy-header">Мавжуд бўш иш ўринлари</h3>

      <div className="vacancy-scroll">
        {data.map((item) => (
          <div key={item.id} className="vacancy-box">
            <table className="vacancy-table">
              <thead>
                <tr>
                  <th>МЧЖ номи</th>
                  <th>Сони</th>
                  <th>Тел</th>
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row, i) => (
                  <tr key={i}>
                    <td>{row.title}</td>
                    <td>{row.count}</td>
                    <td>{row.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="table-actions">
              <TbEdit className="edit-btn" />
              <FiTrash2 className="delete-btn" />  
            </div>
          </div>
        ))}

        <div className="table-pagination">
          <span>1 of 28</span>
          <div className="pagination-controls">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesTable;
