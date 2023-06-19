// const continents = [
//   'Asia',
//   'Africa',
//   'Europe',
//   'North America',
//   'South America',
// ];
// const countries: any = {
//   Africa: [{ countryName: 'Algeria' }, { countryName: 'Egypt' }],
//   Asia: [{ countryName: 'China' }, { countryName: 'Russia' }],
//   Europe: [{ countryName: 'Germany' }, { countryName: 'Italy' }],
//   'North America': [
//     { countryName: 'United States' },
//     { countryName: 'Canada' },
//   ],
//   'South America': [{ countryName: 'Argentina' }, { countryName: 'Brazil' }],
// };

// const products = [
//   { Product: 'Chai', Category: 'Beverages', Price: 18 },
//   { Product: 'Chang', Category: 'Beverages', Price: 19 },
//   { Product: 'Ikura', Category: 'Seafood', Price: 31 },
//   { Product: 'Konbu', Category: 'Seafood', Price: 6 },
//   { Product: 'Spegesild', Category: 'Seafood', Price: 12 },
// ];

// const randomNum = (min: any, max: any) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// export interface DataItem {
//   Region: string;
//   Country: string;
//   Category: string;
//   Product: string;
//   Price: number;
// }

const groups = [
  {
    id: 1,
    reporting_group_id: 10,
    custom_id: '1680',
    name: 'porro',
    created_at: '2023-06-18T09:46:07+00:00',
    updated_at: '2023-06-18T09:46:07+00:00',
    reportingGroup: {
      id: 10,
      custom_id: '1724',
      name: 'dolorem',
      created_at: '2023-06-18T09:46:07+00:00',
      updated_at: '2023-06-18T09:46:07+00:00',
    },
  },
  {
    id: 2,
    reporting_group_id: 10,
    custom_id: '1763',
    name: 'nisi',
    created_at: '2023-06-18T09:46:07+00:00',
    updated_at: '2023-06-18T09:46:07+00:00',
    reportingGroup: {
      id: 10,
      custom_id: '1724',
      name: 'dolorem',
      created_at: '2023-06-18T09:46:07+00:00',
      updated_at: '2023-06-18T09:46:07+00:00',
    },
  },
  {
    id: 3,
    reporting_group_id: 3,
    custom_id: '1909',
    name: 'est',
    created_at: '2023-06-18T09:46:07+00:00',
    updated_at: '2023-06-18T09:46:07+00:00',
    reportingGroup: {
      id: 3,
      custom_id: '1368',
      name: 'aut',
      created_at: '2023-06-18T09:46:07+00:00',
      updated_at: '2023-06-18T09:46:07+00:00',
    },
  },
];

export function createData(): any {
  const formattedData: any = [];

  groups.forEach((item) => {
    formattedData.push({
      id: item.id,
      reporting_group_id: item.reporting_group_id,
      custom_id: item.custom_id,
      name: item.name,
      created_at: item.created_at,
      updated_at: item.updated_at,
      reportingGroup_custom_id: item.reportingGroup.id,
      reportingGroup_name: item.reportingGroup.name,
      reportingGroup_created_at: item.reportingGroup.created_at,
      reportingGroup_updated_at: item.reportingGroup.updated_at,
    });
  });
  console.log(formattedData);
  return formattedData;
}
