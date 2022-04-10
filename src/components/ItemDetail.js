import {Col, Row} from 'react-materialize';
import ItemCount from './ItemCount';

const ItemDetail = ({data}) => {
  const onAdd = (count) => {
    alert(`Seleccionaste ${count} items`);
  }

  return (
    <>
      <Row>
        <Col s={5}>
          <img className='responsive-img' src={data.image} alt={data.title}/>
        </Col>
        <Col s={4} push='s2'>
          <div className='section'>
            <h4>{data.title}</h4>
          </div>
          <div className='divider teal lighten-2'/>
          <div className='section flow-text'>
            <p className='detail-stock-info'>
              Stock disponible: {data.stock}
              <strong>${data.price}</strong>
            </p>
            <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
          </div>
        </Col>
      </Row>
      <Row>
        <div className='divider teal lighten-2'/>
        <div className='section'>
          <h5>Descripción del producto</h5>
          <p>{data.description}</p>
        </div>
      </Row>
    </>
  )
}

export default ItemDetail;