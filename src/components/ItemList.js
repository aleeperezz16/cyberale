import Item from './Item';
import { Row } from 'react-materialize';

const ItemList = ({ items }) => {
  return (
    <>
      <Row>
        {
          items.map(item => <Item key={item.id} data={item} />)
        }
      </Row>
    </>
  )
}

export default ItemList;