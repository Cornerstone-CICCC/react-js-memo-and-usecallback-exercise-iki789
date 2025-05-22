import { memo } from "react";

interface Props {
  onClick: () => void;
}

const GetProductsButton = ({ onClick }: Props) => {
  console.log("Rendered GetProductsButton Component");
  return <button onClick={onClick}>Fetch Products</button>;
};

export default memo(GetProductsButton);
