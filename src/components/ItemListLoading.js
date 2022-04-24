import { Spinner, Stack } from "react-bootstrap";

const ItemListLoading = () => {
  return (
    <Stack bsPrefix="loading" direction="horizontal" gap={2}>
      <Spinner animation="border" variant="primary" />
      <h3 className="m-0">Cargando...</h3>
    </Stack>
  );
};

export default ItemListLoading;
