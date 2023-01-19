import {
  Box,
  List,
  ListItem,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import { useAppSelector } from "hooks/redux";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 200, sm: 250 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalCard = () => {
  const { product } = useAppSelector((state) => state.product);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [product]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h3" align="center">
          {product &&
            product.name.slice(0, 1).toUpperCase() + product.name.slice(1)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box
            component="span"
            sx={{
              width: 100,
              height: 60,
              backgroundColor: `${product?.color}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>{product?.color}</Typography>
          </Box>
          <List>
            <ListItem sx={{ p: 0 }}>
              <ListItemText primary={"Id: " + `${product?.id}`} />
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemText primary={"Year: " + `${product?.year}`} />
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemText primary={product?.pantone_value} />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalCard;
