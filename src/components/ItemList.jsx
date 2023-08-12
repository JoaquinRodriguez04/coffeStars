import Item from './Item';

const ItemList = ( {products} ) => {
  return (
      <div className="coffes-all">
        {products.map((prod) => <Item key={prod.id} prod={prod}/>)}
      </div>
  )
}

export default ItemList;
