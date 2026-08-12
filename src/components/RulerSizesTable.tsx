import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const commonSizes = [
  ['Pocket ruler', '15 cm', '6 in'],
  ['School/desk ruler', '30 cm', '12 in'],
  ['Half-metre rule', '50 cm', '19.69 in'],
  ['Metre stick', '100 cm', '39.37 in'],
];

const RulerSizesTable: React.FC = () => (
  <section className="mb-10" aria-labelledby="common-ruler-sizes">
    <h2 id="common-ruler-sizes" className="mb-4 text-2xl font-bold text-ruler-primary">Common Physical Ruler Sizes</h2>
    <div className="overflow-x-auto rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Typical format</TableHead>
            <TableHead>Metric length</TableHead>
            <TableHead>Approximate inches</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {commonSizes.map(([format, metric, inches]) => (
            <TableRow key={format}>
              <TableCell className="font-medium">{format}</TableCell>
              <TableCell>{metric}</TableCell>
              <TableCell>{inches}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </section>
);

export default RulerSizesTable;
