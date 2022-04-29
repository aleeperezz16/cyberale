import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Item = ({ data }) => {
  const context = useContext(CartContext);

  return (
    <Col>
      <Card>
        <Card.Img src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            <strong>Precio</strong>: {context.priceFormat(data.price)}
            <span style={{display: "block"}}>Stock disponible: {data.stock}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button as={Link} to={`/detalles/${data.id}`} variant="secondary">
            Más detalles
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Item;
