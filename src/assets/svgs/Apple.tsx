import React from "react";
import Svg, { Path } from "react-native-svg";

const Apple = () => {
  return (
    <Svg
      preserveAspectRatio="xMinYMin slice"
      height="100%"
      width="100%"
      viewBox="-290 -200 1200 1050"
    >
      <Path
        d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zm-21.425 121.689c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
        fill="black"
      />
    </Svg>
  );
};

export default Apple;
