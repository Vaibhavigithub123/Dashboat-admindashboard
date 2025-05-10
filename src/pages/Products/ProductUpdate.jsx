import React from "react";
import css from "./ProductUpdate.module.css";
import { Link } from "react-router-dom";
const ProductUpdate = () => {
  return (
    <div className={css.ProductUpdate}>
      <div className={css.productTitleContainer}>
        <h1 className={css.productTitle}>Edit User</h1>
        <Link to="/newproduct">
          <button className={css.productAddbtn}>Create</button>
        </Link>
      </div>

      <div className={css.productContainer}>
        <div className={`${css.productShow} themeContainer`}>
          <div className={css.productProfile}>
            <img
              src="https://images.pexels.com/photos/3735617/pexels-photo-3735617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="user-profile"
            />
            <span className={css.productProfileTitle}>Jerrom Harris</span>
          </div>

          <div className={css.productdetailsBottom}>
            <div className={css.productAccountInfo}>
              <span>Id</span>
              <span>1</span>
            </div>

            <div className={css.productAccountInfo}>
              <span>Stock</span>
              <span>158</span>
            </div>

            <div className={css.productAccountInfo}>
              <span>Price</span>
              <span>$150</span>
            </div>

            <div className={css.productAccountInfo}>
              <span>Status</span>
              <span>active</span>
            </div>
          </div>
        </div>

        <div className={`${css.productUpdate} themeContainer`}>
          <span className={css.edit}>Edit</span>
          <form className={css.productUpdateForm}>
            <div className={css.productUpdateItem}>
              <div className={css.productUpdateInput}>
                <label>Product Name</label>
                <input type="text" placeholder="Product name" />
              </div>

              <div className={css.productUpdateInput}>
                <label>Stock</label>
                <input type="text" placeholder="In stock" />
              </div>
            </div>

            <div className={css.productUpdateItem}>
              <div className={css.productUpdateInput}>
                <label>Price</label>
                <input type="text" placeholder="$" />
              </div>

              <div className={css.productUpdateInput}>
                <label>Status</label>
                <input type="text" placeholder="active" />
              </div>
            </div>

            <div className={css.productUpdatebtn}>
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
