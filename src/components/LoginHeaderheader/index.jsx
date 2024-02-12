import React from "react";

import { Img, Input, Text } from "components";

const LoginHeaderheader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start py-2 w-auto">
            <div className="flex flex-col items-start justify-start sm:px-5 px-[30px] w-full">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                size="txtNunitoBold26"
              >
                {props?.attendify}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-10 sm:px-5 px-[68px] w-[29%] md:w-full">
            {!!props?.input ? (
              <Input
                name="input"
                placeholder="Search"
                value={props?.input}
                className="!placeholder:text-gray-600_02 !text-gray-600_02 font-opensans leading-[normal] p-0 text-left text-sm w-full"
                wrapClassName="border border-indigo-900_33 border-solid rounded-[3px] w-full"
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            ) : null}
          </div>
          <div className="flex flex-1 flex-row gap-[25px] items-center justify-end pr-4 w-full">
            {!!props?.dynamicimage ? (
              <Img className="h-[35px] w-6" alt="a" src={props?.dynamicimage} />
            ) : null}
            <div className="flex flex-row items-center justify-center w-[17%]">
              {!!props?.dynamiccircleimage ? (
                <Img
                  className="h-9 md:h-auto rounded-[50%] w-9"
                  alt="profileimgjpg"
                  src={props?.dynamiccircleimage}
                />
              ) : null}
              <div className="flex flex-col items-start justify-start pt-0.5 px-0.5">
                {!!props?.dynamictext ? (
                  <Text
                    className="md:ml-[0] ml-[5px] text-indigo-900 text-sm"
                    size="txtOpenSansSemiBold14"
                  >
                    {props?.dynamictext}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LoginHeaderheader.defaultProps = { attendify: "Attendify" };

export default LoginHeaderheader;
