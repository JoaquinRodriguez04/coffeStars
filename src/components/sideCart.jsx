

const SideCart = ({item} ) => {
  return (
    <div>
        <div>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
        </div>
        <p>{item.price}</p>
    </div>
  )
}

export default SideCart;
