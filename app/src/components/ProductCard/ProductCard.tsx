import { TableCell, TableRow } from "@mui/material";
import { setProduct } from "features/product.slice";
import { useAppDispatch } from "hooks/redux";
import React, { FC } from "react";
import { IProductCardProps } from "types/types";

const ProductCard: FC<IProductCardProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setProduct(item));
  };
  return (
    <TableRow
      sx={{ backgroundColor: `${item.color}`, cursor: "pointer" }}
      onClick={handleClick}
    >
      <TableCell align="center">{item.id}</TableCell>
      <TableCell align="center">{item.name}</TableCell>
      <TableCell align="center">{item.year}</TableCell>
    </TableRow>
  );
};

export default ProductCard;
