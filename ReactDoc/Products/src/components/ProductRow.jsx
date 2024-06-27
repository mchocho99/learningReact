import PropTypes from "prop-types";

const ProductRow = ({ price, stocked, name }) => {
  return (
    <tr>
      <td style={stocked ? {} : { color: "red" }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

ProductRow.propTypes = {
  price: PropTypes.string.isRequired,
  stocked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductRow;
