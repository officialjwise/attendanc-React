import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text, TextArea } from "components";
import LoginHeaderheader from "components/LoginHeaderheader";
import Sidebar4 from "components/Sidebar4";

const SendAbsentLetterPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 font-opensans h-[900px] mx-auto relative w-full">
        <Sidebar4 className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
        <LoginHeaderheader
          className="absolute bg-white-A700 flex flex-row font-nunito inset-x-[0] items-center justify-start max-w-[1648px] mx-auto px-5 py-[9px] shadow-bs top-[0] w-full"
          dynamicimage="images/img_a.svg"
          dynamiccircleimage="images/img_profileimgjpg.png"
          dynamictext="Peterpan"
        />
        <div className="absolute flex flex-col font-nunito gap-12 justify-start md:px-5 right-[5%] top-[12%] w-[74%]">
          <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] w-full">
            <Text
              className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
              size="txtNunitoSemiBold24"
            >
              Absent Application
            </Text>
            <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[931px] w-[96%] md:w-full">
              <Text
                className="mt-0.5 text-gray-500 text-sm"
                size="txtNunitoSemiBold14"
              >
                Manage
              </Text>
              <div className="flex flex-row gap-[7.17px] items-start justify-start pl-2 w-auto">
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtNunitoSemiBold14"
                >
                  /
                </Text>
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtNunitoSemiBold14"
                >
                  Subject
                </Text>
              </div>
              <div className="flex flex-row gap-[7.17px] items-start justify-start pl-2 w-auto">
                <Text
                  className="text-gray-500 text-sm w-auto"
                  size="txtNunitoSemiBold14"
                >
                  /
                </Text>
                <Text
                  className="text-gray-800 text-sm w-auto"
                  size="txtNunitoSemiBold14Gray800"
                >
                  Add Subject
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-poppins gap-2.5 h-[529px] md:h-auto items-start justify-start mr-[620px] px-4 py-6 rounded-[5px] shadow-bs2 w-auto sm:w-full">
            <div className="flex flex-col gap-2 h-full items-start justify-start px-3 py-5 w-full">
              <Text
                className="text-indigo-900 text-lg w-auto"
                size="txtPoppinsMedium18Indigo900"
              >
                Send Absent Application
              </Text>
              <div className="flex flex-col font-opensans gap-2.5 h-[363px] md:h-auto items-start justify-start px-2 w-auto sm:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-1.5 h-[91px] md:h-auto items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtOpenSansRegular16Gray800"
                    >
                      Date
                    </Text>
                    <Input
                      name="inputinputpassw"
                      placeholder="YYYY/MM/DD"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="flex md:h-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-[233px]"
                      suffix={
                        <Img
                          className="h-[26px] ml-[35px] my-auto"
                          src="images/img_uilcalender.svg"
                          alt="uil:calender"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 h-[91px] md:h-auto items-start justify-start w-full">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtOpenSansRegular16Gray800"
                    >
                      Number of Days
                    </Text>
                    <Input
                      name="inputinputpassw_One"
                      placeholder="No. of days"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="outline outline-[1px] outline-blue_gray-100 rounded-md w-[91%]"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <Text
                  className="text-base text-gray-800 w-auto"
                  size="txtOpenSansRegular16Gray800"
                >
                  Reason
                </Text>
                <TextArea
                  className="bg-white-A700 border-0 leading-[normal] max-w-[514px] outline outline-[1px] outline-blue_gray-100 pb-[35px] pl-2 pr-[5px] pt-1.5 rounded-md text-base placeholder:text-gray-600 text-gray-600 text-left"
                  name="inputinputemail"
                  placeholder={`Reason for being absent............................................................................
.....................................................................................................................`}
                ></TextArea>
              </div>
            </div>
            <div className="flex flex-row font-opensans gap-[18px] items-start justify-start px-2 w-auto">
              <Button
                className="border border-blue-A400 border-solid cursor-pointer min-w-[78px] rounded-md text-base text-center"
                shape="round"
                color="blue_A400"
                size="sm"
                variant="fill"
              >
                Submit
              </Button>
              <Button
                className="border border-gray-600 border-solid cursor-pointer min-w-[67px] rounded-md text-base text-center"
                shape="round"
                color="gray_600"
                size="sm"
                variant="fill"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendAbsentLetterPage;
