import React from "react";
import DataTable from "react-data-table-component";
import tableData from "../../Helpers/tableData.json";

const DataTableComponent = () => {
  const tableDataArr = tableData.tableData;

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={tableDataArr}
        highlightOnHover
        pointerOnHover
        expandableRows
        expandOnRowClicked
      />
    </div>
  );
};

export default DataTableComponent;
