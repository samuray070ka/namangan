import React from "react";
import "./Components.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">
          <div className="footer-box">
            <h3>Contact Us Now</h3>
            <p>
              <span>Phone #1:</span> +998 (69) 228 84 86
            </p>
            <p>
              <span>Phone #2:</span> +998 (93) 911 75 82
            </p>
          </div>

          <div className="footer-box">
            <h3>Send a Message</h3>
            <p>
              <span>Sales department:</span> info@gmail.com
            </p>
            <p>
              <span>Support:</span> infosupport@gmail.com
            </p>
          </div>

          <div className="footer-box">
            <h3>Main Office</h3>
            <p>
              <span>Namangan City 160100, str. Khojayev</span>
            </p>
            <p>
              Weekdays: <span>9:00–18:00</span> Weekends:{" "}
              <span className="closed">Closed</span>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2021 Industrial Zone Management Directorate.</p>
          <p>Follow Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;