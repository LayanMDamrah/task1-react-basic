import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [active, setActive] = useState("portfolio");

  return (
    <nav className="navbar bar">
      <div className="container">
        <h1 className="text-white">Bootstrap</h1>

        <div className="d-flex gap-4">
          <div className="d-flex gap-2">
            <a
              className={`text-white ${active === "portfolio" ? "active" : ""}`}
              href="#portfolio"
              onClick={() => setActive("portfolio")}
            >
              PORTFOLIO
            </a>

            <a
              className={`text-white ${active === "about" ? "active" : ""}`}
              href="#about"
              onClick={() => setActive("about")}
            >
              ABOUT
            </a>

            <a
              className={`text-white ${active === "contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => setActive("contact")}
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}