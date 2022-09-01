import React from "react";
import Header from "./header/Header";
import MidSection from "./midSection/MidSection";
import MidSearchButton from "./midSectionButtons/MidSearchButton";
import MidSectionButtons from "./midSectionButtons/MidSectionButtons";
import ShopIndex from "./shop/ShopIndex";

const Components = () => {
  return (
    <div>
      <Header />
      <hr />
      <MidSection />
      <MidSectionButtons />
      <MidSearchButton />
      <ShopIndex />
    </div>
  );
};

export default Components;
