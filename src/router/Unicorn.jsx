import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// Components
import "../components/Map.css";
import mapImage from "../assets/123.svg"; // assets ga rasmni joylashtiring
import { IoLocationOutline } from "react-icons/io5";
import Result from '../components/Result';
import Statistika from '../components/Statistika';

const Unicorn = () => {
  const [hovered, setHovered] = useState(null);
    const districts = [
      { id: 1, name: "Pop", slog: "pop", slug_in:"pop_slug", },
      { id: 2, name: "Chust", slog: "chust", slug_in:"chust_slug", },
      { id: 3, name: "Kosonsoy", slog: "kosonsoy", slug_in:"kosonsoy_slug", },
      { id: 4, name: "Turakurg'on", slog: "turakurgon", slug_in:"turakurgon_slug", },
      { id: 5, name: "Namangan tuman", slog: "namangan-tuman", slug_in:"namangan-tuman_slug", },
      { id: 6, name: "Minbuloq", slog: "minbuloq", slug_in:"minbuloq_slug", },
      { id: 7, name: "Davlatobod", slog: "davlatobod", slug_in:"davlatobod_slug", },
      { id: 8, name: "Yangiqoʻrgʻon", slog: "yangiqorgon", slug_in:"yangiqorgon_slug", },
      { id: 9, name: "Namangan sh", slog: "namangan-sh", slug_in:"namangan-sh_slug", },
      { id: 10, name: "Yangi Namangan", slog: "yangi-namangan", slug_in:"yangi-namangan_slug", },
      { id: 11, name: "Chortoq", slog: "chortoq", slug_in:"chortoq_slug", },
      { id: 12, name: "Uchqoʻrgʻon", slog: "uchqorgon", slug_in:"uchqorgon_slug", },
      { id: 13, name: "Uychi", slog: "uychi", slug_in:"uychi_slug", },
      { id: 14, name: "Norin", slog: "norin", slug_in:"norin_slug", }
    ];

  // Agar kerak bo‘lsa, slog ni tekshirish uchun quyidagi kod ishlaydi:
  // console.log("District slug:", slog);

  return (
    <div className="container">
      {/* Yuqoridagi bo‘limlar */}
      <Result />
      <Statistika />

      {/* Xarita bo‘limi */}
          <div className="map-wrapper">
      <div className="map-container">
        <img src={mapImage} alt="Namangan map" className="map-image" />

        {districts.map((d, idx) => (
            <Link
            key={d.id}
            to={`/${d.slog}/${d.slug_in}`}
            className={`district ${hovered === d.id ? "active" : ""}`}
            onMouseEnter={() => setHovered(d.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
                opacity: hovered && hovered !== d.id ? 0.35 : 1,
                transform: hovered === d.id ? "translateY(-6px) scale(1.08)" : "none"
            }}
            >
                <div className="d1">

            <IoLocationOutline  className="icon"/>
            <span className="district-text">{d.name}</span>
                </div>
          </Link>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Unicorn;
