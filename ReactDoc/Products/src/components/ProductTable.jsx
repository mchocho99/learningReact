import PropTypes from "prop-types";

import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import React from "react";

const ProductTable = ({ products }) => {
  let category = "";
  let newCategory = false;

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {products.map((product) => {
        if (category !== product.category) {
          category = product.category;
          newCategory = true;
        } else {
          newCategory = false;
        }

        return (
          <React.Fragment key={product.name}>
            {newCategory && <ProductCategoryRow category={category} />}
            <ProductRow
              price={product.price}
              stocked={product.stocked}
              name={product.name}
            />
          </React.Fragment>
        );
      })}
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.object.isRequired,
};

export default ProductTable;
