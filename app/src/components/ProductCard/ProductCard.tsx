import { TableCell, TableRow } from "@mui/material";
import React, { FC } from "react";
import { IProductCardProps } from "types/types";

const ProductCard: FC<IProductCardProps> = ({ item }) => {
  return (
    <TableRow sx={{ backgroundColor: `${item.color}`, cursor: "pointer" }}>
      <TableCell align="center">{item.id}</TableCell>
      <TableCell align="center">{item.name}</TableCell>
      <TableCell align="center">{item.year}</TableCell>
    </TableRow>
  );
};

export default ProductCard;
