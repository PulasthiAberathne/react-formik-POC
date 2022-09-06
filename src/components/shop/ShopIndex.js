import React from "react";
import FormikTabs from "./FormikTabs/FormikTabs";
import HeaderShop from "./header/HeaderShop";
// import FormikTest from "./LeftFormikForm/FormikTest";
import LeftFormikForm from "./LeftFormikForm/LeftFormikForm";

const ShopIndex = () => {
  const isTab = true;
  return (
    <div>
      <HeaderShop />
      {!isTab ? (
        <div>
          <LeftFormikForm />
        </div>
      ) : (
        <div>
          <FormikTabs />
        </div>
      )}
    </div>
  );
};

export default ShopIndex;
