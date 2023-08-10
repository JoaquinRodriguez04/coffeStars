import { Link } from "react-router-dom";

const Item = ( {prod} ) => {
  return (
    <div className='coffe-container'>
      <Link to={`/detail/${prod.id}`}><img src={prod.image} className='coffe-img' alt={prod.title} /></Link>
      <div className='coffe-info-pars'>
          <p>{prod.title}</p>
          <span className="point">·</span>
          <p>{prod.category}</p>
      </div>
      <Link to={`/detail/${prod.id}`} className="coffe-link">ver mas</Link>
    </div>
  )
}

export default Item;
