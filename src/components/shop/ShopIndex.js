import React from "react";
import FormikTabs from "./FormikTabs/FormikTabs";
import HeaderShop from "./header/HeaderShop";
// import FormikTest from "./LeftFormikForm/FormikTest";
import LeftFormikForm from "./LeftFormikForm/LeftFormikForm";

const ShopIndex = () => {
  const isTab = true;
  return (
    <div>
      {!isTab ? (
        <div>
          <HeaderShop />
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
