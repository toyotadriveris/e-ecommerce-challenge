import { FaMinus, FaPlus } from "react-icons/fa";

function Counter() {
  return (
    <>
      <button type="button">
        <FaMinus />
      </button>

      <strong>0</strong>

      <button type="button">
        <FaPlus />
      </button>
    </>
  );
}

export default Counter;
