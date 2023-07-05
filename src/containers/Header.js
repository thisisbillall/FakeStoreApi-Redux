import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.allproducts);
  console.log("header", products);
  return (
    <div>
      <h1>Fakeshop</h1>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Header;

//Middleware (THUNK) is used to create async req in action creators
// apply middleware=> binds thunk & Redux
// compose
