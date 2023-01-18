import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import ModalWindow from "components/ModalWindow/ModalWindow";
import ProductCard from "components/ProductCard/ProductCard";
import { getAllProducts, getProductById } from "features/product.slice";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import React, { useEffect, useState } from "react";

const MainPage = () => {
  const { products, amountPages } = useAppSelector((state) => state.product);
  const [page, setPage] = useState<number>(1);
  const [validationError, setValidationError] = useState<boolean>(false);
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

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && !e.target.value.match(/\d/i)) {
      setValidationError(true);
      return;
    }

    if (e.target.value) {
      dispatch(getProductById(Number(e.target.value)));
      setValidationError(false);
    } else {
      dispatch(getAllProducts(page));
      setValidationError(false);
    }
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
      <Typography variant="h4" component="h2" sx={{ mt: 2 }}>
        Title
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          width: { xs: "80%", sm: "60%" },
        }}
      >
        <FormControl error={validationError} sx={{ mb: 2, mt: 1 }}>
          <TextField
            id="outlined-search"
            label="Filter by id"
            type="search"
            size="small"
            onChange={handleFilter}
            error={validationError}
          />
          <FormHelperText sx={{ height: 10 }}>
            {validationError ? "* Value must be number" : ""}
          </FormHelperText>
        </FormControl>
      </Box>
      <Table
        sx={{
          width: { xs: "80%", sm: "60%" },
          boxShadow: "0px 0px 10px 0.5px #b8b6b6",
          mb: 3,
        }}
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
      {products.length < 1 && (
        <Typography variant="h6" component="body">
          Unfortunately item with this id does not exist :&#40;
        </Typography>
      )}
      {products.length > 1 && (
        <Pagination
          sx={{ mb: 4 }}
          count={amountPages}
          color="primary"
          onChange={handleChangePage}
        />
      )}
      <ModalWindow />
    </Container>
  );
};

export default MainPage;
