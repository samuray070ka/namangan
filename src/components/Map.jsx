// src/components/Map.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Map.css";
import mapImage from "../assets/123.svg";
import { IoLocationSharp } from "react-icons/io5";

export default function Map() {
  const [hovered, setHovered] = useState(null);

  const districts = [
    { id: 1, name: "Pop", slog: "Pop" },
    { id: 2, name: "Chust", slog: "Chust" },
    { id: 3, name: "Kosonsoy", slog: "Kosonsoy" },
    { id: 4, name: "Turakurg'on", slog: "Toraqorgon" },
    { id: 5, name: "Namangan tuman", slog: "Namangan Tuman" },
    { id: 6, name: "Mingbuloq", slog: "Mingbuloq" },
    { id: 7, name: "Davlatobod", slog: "Davlatobod" },
    { id: 8, name: "Yangiqoʻrgʻon", slog: "Yangiqorgon" },
    { id: 9, name: "Namangan sh", slog: "Namangan Shahar" },
    { id: 10, name: "Yangi Namangan", slog: "Yangi Namangan" },
    { id: 11, name: "Chortoq", slog: "Chortoq" },
    { id: 12, name: "Uchqoʻrgʻon", slog: "Uchqorgon" },
    { id: 13, name: "Uychi", slog: "Uychi" },
    { id: 14, name: "Norin", slog: "Norin" },
  ];

  return (
    <div className="container">
      <div className="map-wrapper">
        <div className="map-container">
          <img src={mapImage} alt="Namangan map" className="map-image" />

          {districts.map((d) => (
            <Link
              key={d.id}
              to={`/district/${d.slog}`}
              className={`district ${hovered === d.id ? "active" : ""}`}
              onMouseEnter={() => setHovered(d.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: hovered && hovered !== d.id ? 0.35 : 1,
                transform: hovered === d.id ? "translateY(-6px) scale(1.08)" : "none",
              }}
            >
              <div className="d1">
                <IoLocationSharp className="icon" />
                <span className="district-text">{d.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
