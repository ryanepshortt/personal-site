import { useEffect } from "react";

const useOutsideAlerter = (ref, setDrop, drop) => {
  useEffect(() => {
    /**
     * Alert if clicked outside of provided ref
     */
    const handleClickOutside = (event) => {
      if (event.target.id === "hamburger") {
        setDrop(!drop);
      } else if (ref.current && !ref.current.contains(event.target)) {
        setDrop(false);
      }
    };
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideAlerter;
