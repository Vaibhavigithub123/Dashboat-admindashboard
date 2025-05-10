import React from "react";
import css from "./NewProduct.module.css";

const NewProduct = () => {
  return (
    <div className={`${css.NewProduct} themeContainer`}>
      <h1 className={css.newproductTitle}>New Product</h1>
      <form className={css.newproductform}>
        <div className={css.newproductItem}>
          <label>Product Name</label>
          <input type="text" placeholder="Product name" />
        </div>

        <div className={css.newproductItem}>
          <label>Stock</label>
          <input type="text" placeholder="In stock" />
        </div>

        <div className={css.newproductItem}>
          <label>Price</label>
          <input type="text" placeholder="$" />
        </div>

        <div className={css.newproductItem}>
          <label>Status</label>
          <input type="text" placeholder="active" />
        </div>

        <div className={css.newproductItem}>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
