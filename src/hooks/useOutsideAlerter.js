import { useEffect } from "react";

/**
 * Fires setDrop(false) when a click occurs outside of `ref`.
 * Fix: `drop` and `setDrop` added to dependency array to prevent stale closure.
 */
const useOutsideAlerter = (ref, setDrop, drop) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "hamburger") {
        setDrop(!drop);
      } else if (ref.current && !ref.current.contains(event.target)) {
        setDrop(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref, drop, setDrop]); // ← fixed: was [ref] only
};

export default useOutsideAlerter;
