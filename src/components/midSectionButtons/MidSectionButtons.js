import React from "react";

const MidSectionButtons = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 10,
        alignItems: "right",
        alignContent: "right",
        fontWeight: "bold",
      }}
    >
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>First</button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/leftGreen.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Previous
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          Next
          <img
            src={require("../../assets/images/rightGreen.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginLeft: 10,
            }}
          />
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>Last</button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div style={{ paddingLeft: 10 }}>
        <b>1</b>
      </div>
    </div>
  );
};

export default MidSectionButtons;
