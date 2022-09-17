import { useEffect } from "react";

export const usePages = ({
  currentPage,
  itemLength,
  rightButton,
  setRightButton,
  leftButton,
  setLeftButton,
}) => {
  useEffect(() => {
    if (currentPage === itemLength) {
      setRightButton({
        ...rightButton,
        isDisabled: true,
        pointerEvent: "none",
      });
    } else if (currentPage === 1) {
      setLeftButton({
        ...leftButton,
        isDisabled: true,
        pointerEvent: "none",
      });
    } else {
      setRightButton({
        ...rightButton,
        isDisabled: false,
        pointerEvent: "",
      });
      setLeftButton({
        ...leftButton,
        isDisabled: false,
        pointerEvent: "",
      });
    }
  }, [currentPage]);
};
