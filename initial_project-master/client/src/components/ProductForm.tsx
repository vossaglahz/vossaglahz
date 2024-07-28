import { IProduct } from "@/containers/Products";
import { Box, Button, Grid, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { FileInput } from "./UI/Form/FileInput";


interface Props {
  onProductFormSubmit: (product: Omit<FormData, "id">) => Promise<void>
}

export function ProductForm({onProductFormSubmit}: Props) {
  const [product, setProduct] = useState<Omit<IProduct, "id">>({
    description:"",
    price:0,
    title:"",
    image:""
  });

  const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: FormData = new FormData();
    
    Object.entries(product).forEach(([key, value]) => {

      if (typeof value === "object") {
        formData.append(key, value);
      } else {
        formData.append(key, `${value}`);
      }
      
    });
    onProductFormSubmit(formData);
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setProduct((prevProduct) => {
      return {...prevProduct, [name]: value}
    });
  }

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
      if(e?.target?.files?.[0]) {
        const name = e.target.name
        const file = e.target.files[0]
        setProduct(prevState => ({...prevState, [name]: file}))
      }
  }

  return <Box 
      component={"form"} 
      autoComplete="off" 
      onSubmit={submitFormHandler}
      paddingY={2}
    >
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField 
            fullWidth 
            variant="outlined" 
            id="title" 
            name="title" 
            label="Title"
            value={product.title}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField 
            fullWidth 
            variant="outlined" 
            id="price" 
            name="price" 
            label="Price"
            value={product.price}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <TextField 
            fullWidth 
            variant="outlined" 
            id="description" 
            name="description" 
            label="Description"
            value={product.description}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Grid item xs>
          <FileInput
            onChange={onChangeFile}
            name="image"
            label="image"
          />
        </Grid>
        <Grid item xs>
          <Button type="submit" color="primary" variant="contained">
            Create
          </Button>
        </Grid>
      </Grid>
    </Box>;
}
