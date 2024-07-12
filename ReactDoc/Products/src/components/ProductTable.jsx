import PropTypes from "prop-types";

import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, searchValue, inStockFilter }) => {
  const renderRows = () => {
    let category = "";
    let newCategory = false;
    let rows = [];

    products.map((product) => {
      if (category !== product.category) {
        category = product.category;
        newCategory = true;
      } else {
        newCategory = false;
      }

      if (newCategory) rows.push(<ProductCategoryRow category={category} />);

      if (searchValue) {
        if (product.name === searchValue) {
          rows.push(
            <ProductRow
              price={product.price}
              stocked={product.stocked}
              name={product.name}
            />
          );
        }
      } else if (inStockFilter) {
        if (product.stocked === inStockFilter) {
          rows.push(
            <ProductRow
              price={product.price}
              stocked={product.stocked}
              name={product.name}
            />
          );
        }
      } else {
        rows.push(
          <ProductRow
            price={product.price}
            stocked={product.stocked}
            name={product.name}
          />
        );
      }
    });

    return rows;
  };

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {renderRows()}
    </table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.object.isRequired,
  searchValue: PropTypes.string,
  inStockFilter: PropTypes.boolean,
};

export default ProductTable;
