import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import NavBarSections from "./NavBarSections";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../firebase/config";

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([]);
    const [titleSection, setTitleSection] = useState('productos');
    const category = useParams().category;

    useEffect(() => {
        const productsRef = collection(dataBase, "products");

        const q = category ? query(productsRef, where("category", "==", category)) : productsRef;

        getDocs(q)
            .then((res) => {
                setProducts(
                    res.docs.map(doc => {
                        return {...doc.data(), id: doc.id}
                    })
                );
                category ? setTitleSection(category) : setTitleSection("productos");
            });

    }, [category]);
    
    return (    
        <section className="item-list-container">
            <NavBarSections titleSection={titleSection} products={products} />
            <ItemList products={products} />
        </section>
  )
}

export default ItemListContainer;
