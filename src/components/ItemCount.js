import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd, goToCart }) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      {goToCart ? (
        <Button as={Link} to="/cart" className="mt-5" variant="secondary">
          Ir al carrito
        </Button>
      ) : (
        <Stack direction="horizontal" className="justify-content-around mt-5">
          <div className="d-flex align-items-center gap-4">
            <Button
              variant="outline-danger"
              className="border-0 shadow-none"
              onClick={() => setCount(count > 0 ? count - 1 : count)}
            >
              <IoMdRemove size={30} />
            </Button>
            <span className="fs-3">{count}</span>
            <Button
              variant="outline-success"
              className="border-0 shadow-none"
              onClick={() => setCount(count < stock ? count + 1 : count)}
            >
              <IoMdAdd size={30} />
            </Button>
          </div>
          <Button variant="secondary" disabled={!count} onClick={() => onAdd(count)}>
            Agregar al carrito
          </Button>
        </Stack>
      )}
    </>
  );
};

export default ItemCount;
