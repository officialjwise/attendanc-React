import React from "react";

const sizeClasses = {
  txtRobotoBold13WhiteA700: "font-bold font-roboto",
  txtOpenSansBold105: "font-bold font-opensans",
  txtRobotoRegular64IndigoA400: "font-normal font-roboto",
  txtOpenSansRegular14BlueA400: "font-normal font-opensans",
  txtOpenSansRegular14Bluegray400: "font-normal font-opensans",
  txtRobotoRegular24: "font-normal font-roboto",
  txtOpenSansRegular14Gray60002: "font-normal font-opensans",
  txtPoppinsMedium18Indigo900: "font-medium font-poppins",
  txtRobotoRegular64: "font-normal font-roboto",
  txtOpenSansRegular14Black900: "font-normal font-opensans",
  txtNunitoSemiBold14: "font-nunito font-semibold",
  txtRobotoRegular14Blue300: "font-normal font-roboto",
  txtRobotoRegular14Gray30001: "font-normal font-roboto",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansRegular12: "font-normal font-opensans",
  txtNunitoSemiBold14Gray800: "font-nunito font-semibold",
  txtOpenSansSemiBold15IndigoA400: "font-opensans font-semibold",
  txtNunitoSemiBold24Indigo900: "font-nunito font-semibold",
  txtInterRegular11: "font-inter font-normal",
  txtRobotoBold13Gray60001: "font-bold font-roboto",
  txtInterRegular12: "font-inter font-normal",
  txtNunitoSemiBold14Bluegray300: "font-nunito font-semibold",
  txtRobotoRegular16Gray900: "font-normal font-roboto",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtRobotoMedium13: "font-medium font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtOpenSansRegular16Gray80087: "font-normal font-opensans",
  txtNunitoSemiBold24: "font-nunito font-semibold",
  txtOpenSansRegular14Gray800: "font-normal font-opensans",
  txtRobotoRegular14WhiteA700: "font-normal font-roboto",
  txtRobotoRegular64Indigo900: "font-normal font-roboto",
  txtNunitoBold28Indigo900: "font-bold font-nunito",
  txtOpenSansRegular16Gray800: "font-normal font-opensans",
  txtOpenSansSemiBold15: "font-opensans font-semibold",
  txtRobotoRegular15LightblueA400: "font-normal font-roboto",
  txtNunitoSemiBold14Black900: "font-nunito font-semibold",
  txtOpenSansSemiBold11: "font-opensans font-semibold",
  txtOpenSansSemiBold14: "font-opensans font-semibold",
  txtOpenSansBold14Gray900: "font-bold font-opensans",
  txtOpenSansRegular14IndigoA400: "font-normal font-opensans",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtOpenSansSemiBold14IndigoA400: "font-opensans font-semibold",
  txtRobotoBold13Gray30001: "font-bold font-roboto",
  txtNunitoBold26: "font-bold font-nunito",
  txtRobotoRegular13Gray60001: "font-normal font-roboto",
  txtNunitoBold28: "font-bold font-nunito",
  txtOpenSansBold14: "font-bold font-opensans",
  txtRobotoRegular13Gray50001: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular13: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtOpenSansRegular16Gray600: "font-normal font-opensans",
  txtRobotoRegular15: "font-normal font-roboto",
  txtRobotoRegular12Gray50001: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtOpenSansBold14Red600: "font-bold font-opensans",
  txtRobotoBold13: "font-bold font-roboto",
  txtRobotoBold14: "font-bold font-roboto",
  txtNunitoSemiBold14Bluegray600: "font-nunito font-semibold",
  txtRobotoRegular10: "font-normal font-roboto",
  txtRobotoBold10: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
