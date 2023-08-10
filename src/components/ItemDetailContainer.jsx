import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../firebase/config";


const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(dataBase, "products", id);
    getDoc(docRef)
      .then((res) => {
        setItem(
          {...res.data(), id:res.id }
        )
      })
  }, []);

  return (
    <section className="item-detail-container">
      {item && <ItemDetail item={item} />}
    </section>
  )
};

export default ItemDetailContainer;


// import { RequestItemId } from "../helpers/requestData";

// RequestItemId(id)
// .then((res) => {
//   setItem(res)
// });