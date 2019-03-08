import { useState, useEffect } from "react";

const maxMobile = 425;
const maxTablet = 1024;

export function useDevice(width) {
  const [device, setDevice] = useState(false);

  useEffect(
    () => {
      if (width <= maxMobile) {
        setDevice("Mobile");
      } else if (width > maxMobile && width <= maxTablet) {
        setDevice("Tablet");
      } else {
        setDevice("Desktop");
      }
    },
    [width]
  );

  return { device };
}
