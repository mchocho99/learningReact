import { useState } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState("");
  const [productsInStock, setProductsInStock] = useState(false);

  return (
    <div>
      <SearchBar
        searchValue={filteredProducts}
        onChangeSearch={setFilteredProducts}
        checkBoxValue={productsInStock}
        onChangeCheckBox={setProductsInStock}
      />
      <ProductTable
        products={products}
        searchValue={filteredProducts}
        inStockFilter={productsInStock}
      />
    </div>
  );
};

FilterableProductTable.propTypes = {
  products: PropTypes.object.isRequired,
};

export default FilterableProductTable;
