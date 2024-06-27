import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({ products }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

FilterableProductTable.propTypes = {
  products: PropTypes.object.isRequired,
};

export default FilterableProductTable;
