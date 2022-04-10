import {Preloader} from 'react-materialize';

const ItemListLoading = () => {
  return (
    <div className='loading-items'>
      <Preloader active flashing={true} size='small' />
      <h5>Cargando...</h5>
    </div>
  )
}

export default ItemListLoading;