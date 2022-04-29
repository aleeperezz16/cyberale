import {
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { Button } from "react-bootstrap";
import db from "../utils/firebaseConfig";

const CartOrder = ({ items }) => {
  const createOrder = () => {
    const order = {
      buyer: {
        name: "María Laura",
        phone: "1193458203",
        email: "email@email.com",
      },
      items: items.cartList.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      date: serverTimestamp(),
      total: items.getTotal(),
    };

    const decrementStock = () => {
      items.cartList.forEach(async (item) => {
        await updateDoc(doc(db, "products", item.id), {
          stock: increment(-item.quantity),
        });
      });
    };

    const setOrderToFirestore = async () => {
      const document = doc(collection(db, "orders"));
      await setDoc(document, order);
      return document.id;
    };

    setOrderToFirestore()
      .then((result) => {
        alert(
          `Tu orden fue generada con éxito. ¡Muchas gracias por tu compra!\n\nCódigo de orden: ${result}`
        );
        decrementStock();
        items.removeFromCart();
      })
      .catch((error) => console.log(error));
  };

  return (
    <aside className="py-5 px-4 border border-2 border-secondary">
      <h2 className="text-decoration-underline">Resumen de tu pedido</h2>
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">Subtotal:</span>
        <span className="fw-bold fs-5">
          {items.priceFormat(items.getSubtotal())}
        </span>
      </article>
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">IVA 35%:</span>
        <span className="fw-bold fs-5">
          {items.priceFormat(items.getTaxes())}
        </span>
      </article>
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">Descuento IVA:</span>
        <span className="fw-bold fs-5">
          {items.priceFormat(-items.getTaxes())}
        </span>
      </article>
      <div className="dropdown-divider border-secondary" />
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">Total:</span>
        <span className="fw-bold fs-5">
          {items.priceFormat(items.getTotal())}
        </span>
      </article>
      <div className="text-center">
        <Button className="mt-4" variant="secondary" onClick={createOrder}>
          Finalizar compra
        </Button>
      </div>
    </aside>
  );
};

export default CartOrder;
