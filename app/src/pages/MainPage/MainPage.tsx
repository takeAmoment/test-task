import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ModalWindow from "components/ModalWindow/ModalWindow";
import ProductCard from "components/ProductCard/ProductCard";
import { getAllProducts } from "features/product.slice";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import React, { useEffect } from "react";

const MainPage = () => {
  const { products, amountPages } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
        Products
      </Typography>
      <Table
        sx={{ width: "60%", boxShadow: "0px 0px 10px 0.5px #b8b6b6", mb: 3 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 700 }}>
              ID
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>
              Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 700 }}>
              Year
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderTop: "2px solid grey" }}>
          {products?.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </TableBody>
      </Table>
      <ModalWindow />
    </Container>
  );
};

export default MainPage;
