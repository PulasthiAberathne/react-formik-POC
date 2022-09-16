import data from "./dataSources.json";
import constantsData from "./constants.json";
import { row, columns } from "./tableData";
const option = data.data;
const constants = constantsData.constantsData.formConstants;
const placeholders = constantsData.constantsData.placeholdersList;

export { option, constants, placeholders, row, columns };
