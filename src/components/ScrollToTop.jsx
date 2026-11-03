import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { key } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the page on route change
    window.scrollTo(0, 0);
  }, [key]);

  return null;
};

export default ScrollToTop;
