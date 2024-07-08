import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import homeimg from "../../utils/images/yoga_pose.png";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <p>PoseMasterAI : Your AI asan timing tutor</p>
        <Link to="/about">
          <button className="btn btn-secondary" id="about-btn">
            About
          </button>
        </Link>
      </div>

      <div className="home-main">
        <div className="description">
          <div className="btn-section">
            <Link to="/Login">
              <button className="btn start-btn">Login</button>
            </Link>
            <Link to="/tutorials">
              <button className="btn start-btn">Tutorials</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
