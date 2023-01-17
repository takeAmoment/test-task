import {
  Container,
  Pagination,
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
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const { products, amountPages } = useAppSelector((state) => state.product);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts(page));
  }, [dispatch, page]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

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
      <Pagination
        sx={{ mb: 4 }}
        count={amountPages}
        color="primary"
        onChange={handleChangePage}
      />
      <ModalWindow />
    </Container>
  );
};

export default MainPage;
