import { Button } from "react-bootstrap";

const CartOrder = ({ items }) => {
  return (
    <aside className="py-5 px-4 border border-2 border-secondary">
      <h2 className="text-decoration-underline">Resumen de tu pedido</h2>
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">Subtotal:</span>
        <span className="fw-bold fs-5">{items.priceFormat(items.getSubtotal())}</span>
      </article>
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">IVA 35%:</span>
        <span className="fw-bold fs-5">{items.priceFormat(items.getTaxes())}</span>
      </article>
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">Descuento IVA:</span>
        <span className="fw-bold fs-5">{items.priceFormat(-items.getTaxes())}</span>
      </article>
      <div className="dropdown-divider border-secondary" />
      <article className="d-flex align-items-baseline justify-content-between">
        <span className="fs-4 text-body">Total:</span>
        <span className="fw-bold fs-5">{items.priceFormat(items.getTotal())}</span>
      </article>
      <div className="text-center">
        <Button className="mt-4" variant="secondary">
          Finalizar compra
        </Button>
      </div>
    </aside>
  );
};

export default CartOrder;
