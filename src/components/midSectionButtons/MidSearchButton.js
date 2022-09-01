import React from "react";

const MidSearchButton = () => {
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
        <button>
          <img
            src={require("../../assets/images/add.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Add
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/Custom-Icon-Design-Flatastic-1-Edit.ico")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Edit
        </button>
      </div>
      <div style={{ paddingLeft: 10 }}>
        <input
          type="text"
          placeholder="Quick Search"
          style={{ color: "grey", fontStyle: "italic" }}
        />
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div className="button-container">
        <button>
          <img
            src={require("../../assets/images/search-removebg-preview.png")}
            alt="gree-arrow"
            className="arrow"
            style={{
              width: 15,
              height: 15,
              marginRight: 10,
            }}
          />
          Search
        </button>
      </div>
      <div style={{ paddingRight: 10 }}></div>
      <div style={{ paddingLeft: 10 }}>
        <button>Clear Search</button>
      </div>
    </div>
  );
};

export default MidSearchButton;
