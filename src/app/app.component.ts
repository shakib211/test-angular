import { Component, ViewEncapsulation } from '@angular/core';
import {
  Dimension,
  Measure,
  PivotGridAxis,
  averageAggregate,
  maxAggregate,
  minAggregate,
  sumAggregate,
} from '@progress/kendo-angular-pivotgrid';
import { createData } from './data';

@Component({
  selector: 'app-root',
  template: `
    <kendo-pivotgrid
      [kendoPivotLocalBinding]="data"
      [dimensions]="dimensions"
      [measures]="measures"
      [rowAxes]="defaultRowAxes"
      [columnAxes]="defaultColumnAxes"
      [measureAxes]="defaultMeasureAxes"
      [configurator]="true"
    >
    </kendo-pivotgrid>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .k-pivotgrid-row-headers table.k-pivotgrid-table {
        table-layout: auto;
      }
    `,
  ],
})
export class AppComponent {
  public data: any = createData();

  public dimensions: { [key: string]: Dimension } = {
    Category: {
      caption: 'Categories',
      displayValue: (item) => item.reportingGroup_name,
      sortValue: (displayValue: string) => displayValue,
    },
    Product: {
      caption: 'Products',
      displayValue: (item) => item.Product,
      sortValue: (displayValue: string) => displayValue,
    },
    Region: {
      caption: 'Regions',
      displayValue: (item) => item.reportingGroup_custom_id,
      sortValue: (displayValue: string) => displayValue,
    },
    Country: {
      caption: 'Countries',
      displayValue: (item) => item.name,
      sortValue: (displayValue: string) => displayValue,
    },
  };

  public measures: Measure[] = [
    {
      name: 'Total',
      value: (item: any): number => item.Price,
      aggregate: sumAggregate,
    },
    {
      name: 'Max',
      value: (item: any): number => item.Price,
      aggregate: maxAggregate,
    },
    {
      name: 'Min',
      value: (item: any): number => item.Price,
      aggregate: minAggregate,
    },
    {
      name: 'Average',
      value: (item: any): number => item.Price,
      aggregate: averageAggregate,
    },
  ];

  public defaultMeasureAxes: PivotGridAxis[] = [{ name: ['Total'] }];

  public defaultRowAxes: PivotGridAxis[] = [
    { name: ['Region'], expand: true },
    { name: ['Country'] },
  ];

  public defaultColumnAxes: PivotGridAxis[] = [
    { name: ['Category'], expand: true },
    { name: ['Product'] },
  ];
}
