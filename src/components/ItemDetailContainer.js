import {Container} from 'react-materialize';
import {useEffect, useState} from 'react';
import customFetch from '../utils/customFetch';
import products from '../utils/products';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemListLoading from './ItemListLoading';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {productId} = useParams();

  useEffect(() => {
    customFetch(2000, products[productId - 1])
      .then(result => setProduct(result))
      .catch(error => console.log(error))
  }, [productId])

  return (
    <Container>
      {
        product.id ? <ItemDetail key={product.id} data={product} /> : <ItemListLoading />
      }
    </Container>
  )
}

export default ItemDetailContainer;