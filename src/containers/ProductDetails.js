import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  fetchProduct
} from "../redux/actions/productActions";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;

  console.log(image, title, price, category, description);

  const { productId } = useParams();
  console.log(productId);

  const dispatch = useDispatch();

  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return Object.keys(product).length === 0 ? (
    <div>
      <Skeleton height={"5rem"} width={"4rem"} />

      <Skeleton height={"3rem"} />

      <Skeleton height={"2rem"} width={"5rem"} />

      <Skeleton height={"8rem"} width={"25rem"} />
    </div>
  ) : (
    <div style={{ width: "25rem" }}>
      <img style={{ height: "5rem" }} src={image} alt={title} />
      <div>
        <b>{title}</b>
        <h4>Rs {price}/-</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
