import React from "react";

const MidSection = () => {
  return (
    <div style={{ color: "grey" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 15,
          alignItems: "left",
          alignContent: "left",
        }}
      >
        <img
          src={require("../../assets/images/warning.png")}
          alt="gree-arrow"
          className="arrow"
          style={{
            width: 25,
            height: 25,
            marginRight: 10,
          }}
        />
        This Shop Has Notes.{" "}
        <a href="/" alt="Link">
          Click Here to View
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 15,
          alignItems: "left",
          alignContent: "left",
        }}
      >
        <img
          src={require("../../assets/images/warning.png")}
          alt="gree-arrow"
          className="arrow"
          style={{
            width: 25,
            height: 25,
            marginRight: 10,
          }}
        />
        This account has merged record(s). Clock on the "Log" button to view
      </div>
    </div>
  );
};

export default MidSection;
