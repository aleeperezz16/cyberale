import { useContext, useState } from "react";
import { Container, Image, Stack } from "react-bootstrap";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const cart = useContext(CartContext);
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (count) => {
    alert(`Seleccionaste ${count} items`);
    setGoToCart(true);

    cart.addToCart(data, count);
  };

  return (
    <>
      <Stack direction="horizontal" gap={4}>
        <Image fluid className="w-50" src={data.image} alt={data.title} />
        <Container style={{ width: "40%" }}>
          <section>
            <h2>{data.title}</h2>
            <div className="dropdown-divider border-primary" />
          </section>
          <section className="mt-4">
            <p className="fs-3">
              <strong>{cart.priceFormat(data.price)}</strong> - Stock disponible: {data.stock}
            </p>
          </section>
          <ItemCount
            stock={data.stock}
            initial={0}
            onAdd={onAdd}
            goToCart={goToCart}
          />
        </Container>
      </Stack>
      <div className="dropdown-divider border-primary" />
      <section>
        <h3>Descripción del producto</h3>
        <p className="mt-4">{data.description}</p>
      </section>
    </>
  );
};

export default ItemDetail;
