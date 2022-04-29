import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </>
  );
};

export default ItemList;
