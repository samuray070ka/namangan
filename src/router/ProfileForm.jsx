import React from "react";
import "../components/Components.css";
import { FiUploadCloud } from "react-icons/fi";

function ProfileForm() {
  return (
    <div className="profile-page">
      {/* === FOTO QISMI === */}
      <div className="photo-section">
        <div className="photo-box">
          <FiUploadCloud className="upload-icon" />
          <p className="upload-text">
            Нажмите что бы загрузить свои <br /> рисунки
          </p>
          <span className="upload-types">Jpg, Png, Svg.</span>
          <button className="upload-btn">Загрузить фото</button>
        </div>

        <button className="edit1-btn">Изменить данные</button>
      </div>

      {/* === FORMA QISMI === */}
      <div className="form-section">
        <h3>Umumiy ma’lumot</h3>

        <div className="form-grid">
          <div className="form-item">
            <label>Korxona nomi</label>
            <input type="text" placeholder="UI/UX Designer" />
          </div>
          <div className="form-item">
            <label>Ish urini</label>
            <input type="text" placeholder="UI/UX Designer" />
          </div>

          <div className="form-item">
            <label>Ism</label>
            <input type="text" placeholder="Erkak" />
          </div>
          <div className="form-item">
            <label>Ishtirokni ma’lum olgan sana</label>
            <input type="text" placeholder="Erkak" />
          </div>

          <div className="form-item">
            <label>Loyiha tarmogi</label>
            <input type="text" placeholder="Erkak" />
          </div>
          <div className="form-item">
            <label>Loyiha yashash muddati</label>
            <input type="text" placeholder="Erkak" />
          </div>

          <div className="form-item">
            <label>Loyiha tashabbuskori ismi</label>
            <input type="text" placeholder="Erkak" />
          </div>
          <div className="form-item">
            <label>Loyiha holati</label>
            <input type="text" placeholder="Erkak" />
          </div>

          <div className="form-item">
            <label>Er maydoni</label>
            <input type="text" placeholder="Erkak" />
          </div>
          <div className="form-item">
            <label>Mavjud bo‘sh ish o‘rinlari</label>
            <input type="text" placeholder="Erkak" />
          </div>

          <div className="form-item">
            <label>Ajratilgan lotlar soni</label>
            <input type="text" placeholder="Erkak" />
          </div>
          <div className="form-item">
            <label>Telefon raqam</label>
            <input type="text" placeholder="Erkak" />
          </div>
        </div>

        {/* === Pastdagi bloklar === */}
        <div className="form-section-bottom">
          <div className="bottom-box">
            <h4>Ishlab chiqarish quvvati</h4>
            <div className="double-inputs">
              <div>
                <label>Reja</label>
                <input type="text" placeholder="AA" />
              </div>
              <div>
                <label>Amalda</label>
                <input type="text" placeholder="AA" />
              </div>
            </div>
          </div>

          <div className="bottom-box">
            <h4>Loyiha umumiy qiymati</h4>
            <div className="quad-inputs">
              <input type="text" placeholder="O‘z mablag‘i" />
              <input type="text" placeholder="Bank krediti" />
              <input type="text" placeholder="Xorijiy mablag‘ ($)" />
            </div>
          </div>

          <div className="bottom-box">
            <h4>Eksport qiymati</h4>
            <div className="double-inputs">
              <div>
                <label>Reja</label>
                <input type="text" placeholder="AA" />
              </div>
              <div>
                <label>Amalda</label>
                <input type="text" placeholder="AA" />
              </div>
            </div>
          </div>

          <div className="bottom-box">
            <h4>O‘zlashtirilgan mablag‘</h4>
            <div className="double-inputs">
              <div>
                <label>Reja</label>
                <input type="text" placeholder="AA" />
              </div>
              <div>
                <label>Amalda</label>
                <input type="text" placeholder="AA" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;