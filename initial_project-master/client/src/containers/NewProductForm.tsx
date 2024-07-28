import { ProductForm } from "@/components/ProductForm";
import { createProduct } from "@/features/productsSlice";
import { useAppDispatch } from "@/store/hook";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function NewProductForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onProductFormSubmit = async (product: Omit<FormData, "id">) => {
    await dispatch(createProduct(product));
    navigate("/");
  }

  return <>
    <Typography variant="h4">New product</Typography>
    <ProductForm onProductFormSubmit={onProductFormSubmit}/>
  </>
}