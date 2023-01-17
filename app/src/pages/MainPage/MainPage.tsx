import {
  Box,
  Container,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ProductCard from "components/ProductCard/ProductCard";
import React, { useEffect, useState } from "react";
import { IProduct, IResponse } from "types/types";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MainPage = () => {
  const [products, setProducts] = useState<IProduct[]>();
  const [count, setCount] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("hi");
    fetch("https://reqres.in/api/products")
      .then((res) => res.json())
      .then((data: IResponse) => {
        setProducts(data.data);
        setCount(data.total_pages);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClose = () => {
    setOpen(false);
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
        Products {count}
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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default MainPage;
