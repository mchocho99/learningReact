import PropTypes from "prop-types";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
};

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductCategoryRow;
