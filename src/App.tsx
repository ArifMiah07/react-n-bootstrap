import React from "react";
import "./App.css";
// import Sidebar from "./components/sidebar/Sidebar";
import "./custom.scss";

function App() {
  return (
    <div className="main-container">
      {/* Sidebar Column (1fr) */}
      <div className="all_bars_height sidebar my-element">
        <div className="inner text-white d-flex flex-column align-items-center">
          <div className="d-flex flex-column align-items-center gap-3">
            <img src="../src/assets/Random Symboles 5.png" alt="" />
            <img src="../src/assets/Icon - Home.png" alt="" />
            <img src="../src/assets/Icon - Message.png" alt="" />
            <img src="../src/assets/Icon - Buy.png" alt="" />
            <img src="../src/assets/Icon - Activity.png" alt="" />
            <img src="../src/assets/Icon - Time Circle.png" alt="" />
          </div>
          {/* 2nd row */}
          <div className="d-flex flex-column align-items-center gap-3">
            <img src="../src/assets/Random Symboles 5.png" alt="" />
            <img src="../src/assets/Icon - Home.png" alt="" />
            <img src="../src/assets/Icon - Message.png" alt="" />
            <img src="../src/assets/Icon - Buy.png" alt="" />
            <img src="../src/assets/Icon - Activity.png" alt="" />
            <img src="../src/assets/Icon - Time Circle.png" alt="" />
          </div>
          <div className="d-flex flex-column align-items-center gap-3">
            <img src="../src/assets/Random Symboles 5.png" alt="" />
            <img src="../src/assets/Icon - Home.png" alt="" />
            <img src="../src/assets/Icon - Message.png" alt="" />
            <img src="../src/assets/Icon - Buy.png" alt="" />
            <img src="../src/assets/Icon - Activity.png" alt="" />
            <img src="../src/assets/Icon - Time Circle.png" alt="" />
          </div>
        </div>
      </div>

      {/* Content Column (8fr) */}
      <div className="middle-section all_bars_height content col-12 col-sm-8 col-md-6 col-lg-7">
        <div className="bg-primary text-white p-3">Column or Middle or Center</div>
      </div>

      {/* Right Column (3fr) */}
      <div className=" end-section all_bars_height right col-12 col-sm-12 col-md-3 col-lg-3">
        <div className="bg-primary text-white p-3">Column 3 or Right or Last</div>
      </div>
    </div>
  );
}

export default App;
