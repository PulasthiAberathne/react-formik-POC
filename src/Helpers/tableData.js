export const columns = [
  {
    name: "Custom Column Main",
    selector: (row) => row.title,
  },
  {
    name: "Cost",
    selector: (row) => row.cost,
  },
  {
    name: "Sales",
    selector: (row) => row.sales,
  },
  {
    name: "Gross Profit",
    selector: (row) => row.grossProfit,
  },
  {
    name: "Over Head",
    selector: (row) => row.overHead,
  },
];

export const row = [
  {
    id: 1,
    title: "Eric & Jones",
    cost: 190288,
    sales: 198455,
    grossProfit: 8167,
    overHead: 600,
  },
  {
    id: 2,
    title: "General Sales",
    cost: 202500,
    sales: 300000,
    grossProfit: 97500,
    overHead: 300,
  },
  {
    id: 3,
    title: "Soap",
    cost: 30000,
    sales: 50000,
    grossProfit: 20000,
    overHead: 100,
  },
  {
    id: 4,
    title: "Validation Products",
    cost: 202500,
    sales: 300000,
    grossProfit: 97500,
    overHead: 300,
  },
  {
    id: 6,
    title: "Unilever Products",
    cost: 202500,
    sales: 300000,
    grossProfit: 97500,
    overHead: 300,
  },
];
