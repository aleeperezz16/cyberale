import { useContext } from "react";
import { Container, Stack } from "react-bootstrap";
import { CartContext } from "./CartContext";
import CartHeader from "./CartHeader";
import CartItemList from "./CartItemList";
import CartOrder from "./CartOrder";

const Cart = () => {
  const cartItems = useContext(CartContext);

  return (
    <Container>
      <CartHeader empty={!cartItems.cartList.length} items={cartItems} />
      {cartItems.cartList.length > 0 && (
        <Stack
          direction="horizontal"
          gap={2}
          className="mt-5 align-items-start justify-content-around"
        >
          <CartItemList items={cartItems} />
          <CartOrder items={cartItems} />
        </Stack>
      )}
    </Container>
  );
};

export default Cart;
