import React, { useState, useEffect } from "react";
import { useDevice } from "./useDevice";

// import { useDevice } from './useDevice'

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  const listener = () => {
    setWidth(window.innerWidth);
  };

  const { device } = useDevice(width);

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return { width, device };
}
