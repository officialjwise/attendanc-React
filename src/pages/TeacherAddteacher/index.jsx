import React from "react";

import { Button, Img, Input, Text } from "components";
import LoginHeaderheader from "components/LoginHeaderheader";
import Sidebar3 from "components/Sidebar3";

const TeacherAddteacherPage = () => {
  return (
    <>
      <div className="bg-blue_gray-50 font-opensans h-[900px] mx-auto relative w-full">
        <Sidebar3 className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
        <LoginHeaderheader
          className="absolute bg-white-A700 flex flex-row font-nunito inset-x-[0] items-center justify-start max-w-[1648px] mx-auto px-5 py-[9px] shadow-bs top-[0] w-full"
          dynamicimage="images/img_a.svg"
          dynamiccircleimage="images/img_profileimgjpg.png"
          dynamictext="Peterpan"
        />
        <div className="absolute flex flex-col font-nunito gap-[47px] justify-start md:px-5 right-[5%] top-[12%] w-[74%]">
          <div className="md:h-[33px] h-[53px] md:ml-[0] ml-[5px] md:pr-10 sm:pr-5 pr-[47px] relative w-full">
            <Text
              className="absolute left-[0] text-2xl md:text-[22px] text-indigo-A400 sm:text-xl top-[0]"
              size="txtNunitoSemiBold24"
            >
              Teacher
            </Text>
            <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[929px] w-[96%]">
              <Text
                className="mt-0.5 text-gray-500 text-sm"
                size="txtNunitoSemiBold14"
              >
                Manage
              </Text>
              <div className="md:h-[21px] h-[22px] relative w-[77%]">
                <div className="absolute flex flex-row gap-[7.17px] items-center justify-end pl-2 right-[0] top-[0] w-auto">
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
                    Add Teacher
                  </Text>
                </div>
                <div className="absolute bottom-[0] flex flex-row gap-[7.17px] items-center justify-start left-[0] pl-2 w-auto">
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
                    Teacher
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mr-[641px] rounded-[5px] shadow-bs2 w-auto sm:w-full">
            <div className="flex flex-col gap-2 items-start justify-start px-3 py-5 rounded-[5px] w-auto sm:w-full">
              <Text
                className="text-indigo-900 text-lg w-auto"
                size="txtPoppinsMedium18Indigo900"
              >
                Add a teacher
              </Text>
              <div className="flex flex-col font-opensans gap-4 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col h-[70px] md:h-auto items-start justify-start w-[540px] sm:w-full">
                  <div className="flex flex-col gap-1.5 h-[70px] md:h-auto items-start justify-start px-2 w-[540px] sm:w-full">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtOpenSansRegular16Gray800"
                    >
                      Full name
                    </Text>
                    <Input
                      name="inputinputpassw"
                      placeholder="Name"
                      className="leading-[normal] md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                      wrapClassName="outline outline-[1px] outline-blue_gray-100 rounded-md w-full"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-[540px] sm:w-full">
                  <div className="flex flex-col gap-[9px] items-start justify-end w-[49%] sm:w-full">
                    <Text
                      className="md:ml-[0] ml-[7px] text-base text-gray-800"
                      size="txtOpenSansRegular16Gray800"
                    >
                      Username
                    </Text>
                    <Input
                      name="inputinputemail"
                      placeholder="Username"
                      className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                      wrapClassName="ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[94%]"
                      type="text"
                      shape="round"
                      color="white_A700"
                      size="xs"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col h-[70px] md:h-auto items-start justify-start w-full">
                    <div className="flex flex-col gap-1.5 h-full items-start justify-start px-2 w-full">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Password
                      </Text>
                      <Input
                        name="inputinputemail_One"
                        placeholder="Password"
                        className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                        wrapClassName="outline outline-[1px] outline-blue_gray-100 rounded-md w-full"
                        type="password"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] text-base text-gray-800"
                    size="txtOpenSansRegular16Gray800"
                  >
                    Email
                  </Text>
                  <div className="h-9 ml-2 md:ml-[0] px-3 py-[7px] relative w-[524px] sm:w-full">
                    <div className="absolute bg-white-A700 h-9 inset-[0] m-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-full"></div>
                    <div className="absolute flex flex-col h-max inset-[0] items-start justify-start m-auto md:pr-10 sm:pr-5 pr-[401px] w-auto">
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtOpenSansRegular16Gray600"
                      >
                        sam@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] text-base text-gray-800"
                    size="txtOpenSansRegular16Gray800"
                  >
                    Address{" "}
                  </Text>
                  <Input
                    name="inputinputaddre"
                    placeholder="Apartment, studio, or floor"
                    className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                    wrapClassName="ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start px-2 w-auto">
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
        </div>
      </div>
    </>
  );
};

export default TeacherAddteacherPage;
