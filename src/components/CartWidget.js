import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "react-bootstrap";

const CartWidget = ({ count }) => {
  return (
    <Link to="/cart">
      <FaShoppingCart size={25} color="white" />
      <Badge
        pill
        bg="danger"
        className={`position-relative translate-middle ${
          count > 0 ? "d-inline-block" : "d-none"
        }`}
      >
        {count}
      </Badge>
    </Link>
  );
};

export default CartWidget;
