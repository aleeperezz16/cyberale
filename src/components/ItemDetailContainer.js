import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig";
import ItemListLoading from "./ItemListLoading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const firestore = async () => {
      const querySnapshot = await getDoc(doc(db, "products", productId));
      return { id: productId, ...querySnapshot.data() };
    };

    firestore()
      .then((result) => setProduct(result))
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <Container>
      {product.id ? <ItemDetail data={product} /> : <ItemListLoading />}
    </Container>
  );
};

export default ItemDetailContainer;
