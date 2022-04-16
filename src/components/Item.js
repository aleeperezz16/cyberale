import { Card, CardTitle, Col } from 'react-materialize';
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
  return (
    <Col s={4}>
      <Card className='hoverable' actions={[<Link to={`/details/${data.id}`} className='cyan-text'>Más detalles</Link>]}
        header={<CardTitle image={data.image} />}
        title={data.title}>
        <div className='card-item-info'>
          <p style={{ fontSize: '1.2em' }}><strong>Precio</strong>: ${data.price}</p>
          <p>Stock disponible: {data.stock}</p>
        </div>
      </Card>
    </Col>
  )
}

export default Item;