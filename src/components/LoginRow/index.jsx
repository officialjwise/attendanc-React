import React from "react";

import { Text } from "components";

const LoginRow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-100 border border-indigo-A200 border-solid flex flex-row gap-3 items-center justify-center px-2 py-4 rounded-lg w-[207px]">
          <div className="border border-indigo-A400_01 border-solid flex flex-col h-6 items-center justify-start p-1.5 rounded-[50%] w-6">
            <div className="bg-indigo-A400_01 h-3 rounded-[50%] w-3"></div>
          </div>
          <Text
            className="flex-1 text-indigo-A400_01 text-sm w-auto"
            size="txtRobotoRomanRegular14"
          >
            {props?.dynamicprop3}
          </Text>
        </div>
        <div className="bg-gray-100 border border-indigo-A200 border-solid flex flex-row gap-3 items-center justify-center px-2 py-4 rounded-lg w-[207px]">
          <div className="border border-indigo-A400_01 border-solid h-6 rounded-[50%] w-6"></div>
          <Text
            className="flex-1 text-indigo-A400_01 text-sm w-auto"
            size="txtRobotoRomanRegular14"
          >
            {props?.dynamicprop5}
          </Text>
        </div>
      </div>
    </>
  );
};

LoginRow.defaultProps = { dynamicprop3: "Teacher", dynamicprop5: "Admin" };

export default LoginRow;
