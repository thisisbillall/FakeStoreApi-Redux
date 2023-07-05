import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);

  return (
    <div>
      <h1>ProductComponent</h1>
      <div className="card-wrapper">
        {products.map((curr) => {
          const { id, title, price, category, description, image } = curr;

          return (
            <Link to={`/product/${id}`}>
              <div className="card">
                <img style={{ height: "5rem" }} src={image} alt={title} />
                <div>
                  <h6>{title}</h6>
                  {/* <p>{category}</p> */}
                  {/* <p>{description}</p> */}
                  {/* <h5>{price}</h5> */}
                </div>
              </div>
            </Link>
          );
        })}
        {/* {console.log(id, title, category)} */}
      </div>
    </div>
  );
};

export default ProductComponent;
