import data from "./dataSources.json";
import tableData from "./dataTable.json";
import constantsData from "./constants.json";

const option = data.data;
const table_data = tableData.tableData;
const constants = constantsData.constantsData.formConstants;
const placeholders = constantsData.constantsData.placeholdersList;

export { option, table_data, constants, placeholders };
