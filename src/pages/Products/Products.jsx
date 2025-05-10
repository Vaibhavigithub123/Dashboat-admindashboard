import React, { useState } from "react";
import { ordersData as initialData } from "../../data/data";
import css from "./Product.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const Products = () => {
  const [products, setProducts] = useState(initialData);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((_, index) => index + 1 !== id);
    setProducts(updatedProducts);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productname", headerName: "Productname", width: 170 },
    { field: "items", headerName: "Stock", width: 150 },
    { field: "price", headerName: "Price ($)", width: 130 },
    { field: "status", headerName: "Status", width: 140 },
    {
      field: "image",
      headerName: "Avatar",
      width: 120,
      renderCell: (params) => {
        return params.value ? (
          <img src={params.value} alt="User Avatar" className={css.avatar} />
        ) : (
          "-"
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className={css.actionBtns}>
            <Link to={"/product/" + params.row.id}>
              <button className={css.productListEdit}>Edit</button>
            </Link>
            <AiOutlineDelete
              className={css.productListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  const rows = products.map((product, index) => ({
    id: index + 1,
    productname: product.name,
    items: product.items || "-",
    image: product.image ? String(product.image) : null, // Ensuring it's a string as MUI takes everything as a text
    price: product.price || "-",
    status: product.status || "-",
  }));
  return (
    <div className={css.productslists}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          color: "white",
          ".MuiDataGrid-container--top [role=row]": {
            background: "transparent",
            "& .MuiCheckbox-root svg": {
              fill: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default Products;
