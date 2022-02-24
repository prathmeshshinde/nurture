import React from "react";

export const Menu = () => {
  return (
    <div className="section-menu">
      <div className="head">
        <div className="name">
          <img alt="bit" src="./icons/N.svg" style={{ width: "30px" }} />
          <text style={{ marginTop: "7px", marginLeft: "10px" }}>Name</text>
        </div>

        <div className="closing">
          <img alt="bit" src="./icons/closing.svg" />
        </div>
      </div>

      <div className="nav">
        <div className="nav-section">
          <img alt="bit" src="./icons/home.svg" />
          <p className="nav-text">Home</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 1</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 2</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 3</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 4</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 5</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 6</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 7</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text">Section 8</p>
        </div>
        <div className="nav-section">
          <img alt="bit" src="./icons/graph.svg" />
          <p className="nav-text"> Documentation</p>
        </div>
      </div>

      <div className="menu-footer">
        <div className="section-value">
          <div className="value">
            <img alt="bit" src="./icons/N.svg" style={{ width: "20px" }} />
            <p>$0.90</p>
          </div>
          <div className="buy">
            <p>Buy $XYZ</p>
          </div>
        </div>

        <div className="vector">
          <div className="vector-img">
            <img alt="bit" src="./icons/Vector.svg" style={{ width: "22px" }} />
          </div>
          <div className="toggle">
            <img alt="bit" src="./icons/moon.svg" style={{ width: "20px" }} />
            <span className="circle"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
