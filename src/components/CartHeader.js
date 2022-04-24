import { Button, Stack } from "react-bootstrap";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartHeader = ({ empty, items }) => {
  return (
    <>
      {empty ? (
        <Stack className="center align-items-center" gap={3}>
          <Stack direction="horizontal" gap={2}>
            <RiErrorWarningFill size={50} />
            <span className="fs-1">Tu carrito se encuentra vacío</span>
          </Stack>
          <Button as={Link} to="/" variant="secondary">
            Ir de compras
          </Button>
        </Stack>
      ) : (
        <>
          <h1 className="text-center mt-3">Tu carrito</h1>
          <Stack direction="horizontal" className="justify-content-between">
            <Button as={Link} to="/" variant="success">
              Seguir comprando
            </Button>
            <Button
              onClick={() => items.removeFromCart()}
              variant="warning"
            >
              Vaciar carrito
            </Button>
          </Stack>
        </>
      )}
    </>
  );
};

export default CartHeader;
