import { useEffect, useRef } from "react";

export function useWhenOutsideComponent(
  fn,
  listenCapturing = true,
  toggleRef = null
) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        (!toggleRef || !toggleRef.current.contains(e.target))
      ) {
        fn();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [fn, listenCapturing, toggleRef]);

  return ref;
}
