import { useAtom } from "jotai";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { cartAtom } from "./ShoppingCart";

const InCartProductLayout = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
const ProductImg = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;
const ProductInfo = styled.div`
  font-size: 0.9rem;
  text-align: left;
  p {
    text-transform: capitalize;
  }
  strong {
    color: var(--blue-200);
    padding: 0 4px;
  }
`;

const DeleteBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: var(--blue-600);
  transition: color 0.2s;
  padding: 10px 0;
  &:hover {
    color: var(--blue-200);
    transition: color 0.2s;
  }
`;

function InCartProduct({ product }) {
  const [cart, setCart] = useAtom(cartAtom);

  function handleDelete(id) {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  }

  return (
    <InCartProductLayout>
      <ProductImg>
        <img
          width="50px"
          height="50px"
          src={product.img}
          alt={`image of ${product.title}`}
        />
      </ProductImg>

      <ProductInfo>
        <p>{product.title}</p>
        <span>
          ${product.price} x {product.quantity}{" "}
          <strong>${Number(product.price * product.quantity)}</strong>
        </span>
      </ProductInfo>

      <DeleteBtn
        onClick={() => handleDelete(product.id)}
        type="button"
        role="button"
      >
        <FaTrash />
      </DeleteBtn>
    </InCartProductLayout>
  );
}

export default InCartProduct;
