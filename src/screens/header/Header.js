import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        marginRight: 10,
        alignItems: "left",
        alignContent: "left",
        fontWeight: "bold",
      }}
    >
      <div style={{ paddingLeft: 10 }}>
        <b>Shops</b>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/rightGreen.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Log
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/rightGreen.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Tracker
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/rightGreen.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Warranty Claim
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/settings.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Program Selection
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/wifi.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Exit Interviews
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
    </div>
  );
};

export default Header;
