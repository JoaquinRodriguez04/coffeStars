import Item from './Item';

const ItemList = ( {products} ) => {
  return (
    <div>
        <div className="coffes-all">
            {products.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    </div>
  )
}

export default ItemList;
