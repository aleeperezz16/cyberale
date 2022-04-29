import { Button, Image, Stack } from "react-bootstrap";

const CartItemList = ({ items }) => {
  return (
    <section style={{ width: "60%" }}>
      {items.cartList.map((item) => (
        <div key={item.id}>
          <div className="dropdown-divider border-primary" />
          <Stack direction="horizontal" gap={5}>
            <Image fluid src={item.image} alt={item.title} className="w-25" />
            <div>
              <h3>{item.title}</h3>
              <h4>
                <strong>{items.priceFormat(item.price * item.quantity)}</strong>
              </h4>
              <h6>
                <i>
                  Cantidad: {item.quantity} - {items.priceFormat(item.price)} c/u
                </i>
              </h6>
              <Button
                variant="danger"
                onClick={() => items.removeFromCart(item)}
              >
                Eliminar
              </Button>
            </div>
          </Stack>
        </div>
      ))}
    </section>
  );
};

export default CartItemList;
