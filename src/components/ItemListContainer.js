import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import db from "../utils/firebaseConfig";
import ItemList from "./ItemList";
import ItemListLoading from "./ItemListLoading";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const firestore = async () => {
      const querySnapshot = await getDocs(
        categoryName === undefined
          ? query(collection(db, "products"))
          : query(
              collection(db, "products"),
              where("category", "==", categoryName)
            )
      );
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    };

    firestore()
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, [categoryName]);

  useEffect(() => {
    setData([]);
  }, []);

  return (
    <Container>
      {data.length > 0 ? (
        <Row xs={3} className="mt-1 g-4">
          <ItemList items={data} />
        </Row>
      ) : (
        <ItemListLoading />
      )}
    </Container>
  );
};

export default ItemListContainer;
