import { Container } from 'react-materialize';
import { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import products from '../utils/products';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import ItemListLoading from './ItemListLoading';

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    setData([]);

    customFetch(2000, categoryName === undefined ? products : products.filter(item => item.category === categoryName))
      .then(result => setData(result))
      .catch(error => console.log(error))
  }, [categoryName])

  return (
    <Container>
      {
        data.length > 0 ? <ItemList items={data} /> : <ItemListLoading />
      }
    </Container>
  )
}

export default ItemListContainer;