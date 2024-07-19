
'use client'
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const BlockDataTable = ({ data }) => {
  if (!data || !data.blocks) {
    return <p>No data available</p>;
  }

  return (
    <Table>
      <TableCaption>Block Data</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Number</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Parent Hash</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.blocks.map((block) => (
          <TableRow key={block.id}>
            <TableCell>{block.id}</TableCell>
            <TableCell>{block.number}</TableCell>
            <TableCell>{new Date(parseInt(block.timestamp) * 1000).toLocaleString()}</TableCell>
            <TableCell>{block.parentHash}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BlockDataTable;