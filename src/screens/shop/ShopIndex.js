import React from "react";
import FormikComponents from "./FormikComponent/FormikComponents";
// import FormikTabs from "./FormikTabs/FormikTabs";
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
          <FormikComponents />
        </div>
      )}
    </div>
  );
};

export default ShopIndex;
