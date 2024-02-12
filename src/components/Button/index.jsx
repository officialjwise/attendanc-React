import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded",
};
const variants = {
  fill: {
    blue_300: "bg-blue-300 text-white-A700",
    orange_A100: "bg-orange-A100 text-white-A700",
    blue_200: "bg-blue-200",
    green_A200_01: "bg-green-A200_01",
    amber_200: "bg-amber-200",
    red_A100: "bg-red-A100",
    gray_50: "bg-gray-50",
    green_A200: "bg-green-A200 text-white-A700",
    blue_gray_900_7e: "bg-blue_gray-900_7e",
    blue_gray_900: "bg-blue_gray-900",
    green_500: "bg-green-500",
    red_A200: "bg-red-A200 text-white-A700",
    blue_A400: "bg-blue-A400 text-white-A700",
    gray_300_02: "bg-gray-300_02 text-gray-600_04",
    blue_gray_900_95: "bg-blue_gray-900_95 text-gray-300_01",
    gray_600: "bg-gray-600 text-white-A700",
    indigo_A400: "bg-indigo-A400 text-white-A700",
    white_A700: "bg-white-A700 text-indigo-900",
  },
  outline: {
    green_A200: "border border-green-A200 border-solid text-green-A200",
    orange_A100: "border border-orange-A100 border-solid text-orange-A100",
    red_A200: "border border-red-A200 border-solid text-red-A200",
    blue_300: "border border-blue-300 border-solid text-blue-300",
    gray_300_02: "border border-gray-300_02 border-solid text-gray-300_01",
  },
};
const sizes = {
  xs: "p-[3px]",
  sm: "p-[9px]",
  md: "px-2.5 py-3",
  lg: "p-[13px]",
  xl: "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_300",
    "orange_A100",
    "blue_200",
    "green_A200_01",
    "amber_200",
    "red_A100",
    "gray_50",
    "green_A200",
    "blue_gray_900_7e",
    "blue_gray_900",
    "green_500",
    "red_A200",
    "blue_A400",
    "gray_300_02",
    "blue_gray_900_95",
    "gray_600",
    "indigo_A400",
    "white_A700",
  ]),
};

export { Button };
