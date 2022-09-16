import React from "react";
import DataTable from "react-data-table-component";

const CustomDataTable = ({ columns, data, ...props }) => {
  return (
    <div>
      <DataTable columns={columns} data={data} {...props} />
    </div>
  );
};

export default CustomDataTable;
