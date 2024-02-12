import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";

const buttonreactariaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const buttonreactarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const buttonreactarOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ButtonstylePage = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1600px] mb-[15px] mx-auto md:px-5 w-full">
          <List
            className="flex flex-col gap-[30px] items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
              <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-1/2 md:w-full">
                <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-[13px] text-gray-300_01 uppercase w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    Default buttons
                  </Text>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[365px] w-auto md:w-full">
                    <Text
                      className="text-gray-300_99 text-xs w-auto"
                      size="txtRobotoRegular12"
                    >
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        Use default button with necessary values of properties
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        variant
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        disabled
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[3px] items-start justify-start mt-10 w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[131px] w-auto md:w-full">
                    <Text
                      className="text-gray-300_99 text-xs w-auto"
                      size="txtRobotoRegular12"
                    >
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        Modifier variant{" "}
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        primary
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        success
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        warning
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        danger
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        outline-primary
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        outline-success
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        outline-warning
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        outline-danger
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[597px] w-auto md:w-full">
                    <Text
                      className="text-gray-300_99 text-xs w-auto"
                      size="txtRobotoRegular12"
                    >
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        Modifier disabled{" "}
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        true
                      </span>
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        ,
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        {" "}
                        false
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start my-[29px] pb-5 pr-5 w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-[98%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer min-w-[102px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="gray_300_02"
                        size="lg"
                        variant="outline"
                      >
                        Minimal
                      </Button>
                      <Button
                        className="border border-gray-300_02 border-solid cursor-pointer min-w-[117px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="gray_300_02"
                        size="lg"
                        variant="fill"
                      >
                        Secondary
                      </Button>
                      <Button
                        className="border border-blue_gray-900_95 border-solid cursor-pointer min-w-[105px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="blue_gray_900_95"
                        size="lg"
                        variant="fill"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="border border-blue-300 border-solid cursor-pointer min-w-[100px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="blue_300"
                        size="lg"
                        variant="fill"
                      >
                        Primary
                      </Button>
                      <Button
                        className="border border-green-A200 border-solid cursor-pointer min-w-[104px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="green_A200"
                        size="lg"
                        variant="fill"
                      >
                        Success
                      </Button>
                      <Button
                        className="border border-orange-A100 border-solid cursor-pointer min-w-[103px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="orange_A100"
                        size="lg"
                        variant="fill"
                      >
                        Warning
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-4/5 md:w-full">
                      <Button
                        className="border border-red-A200 border-solid cursor-pointer min-w-[96px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="red_A200"
                        size="lg"
                        variant="fill"
                      >
                        Danger
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[100px] sm:ml-[0] ml-[15px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="blue_300"
                        size="lg"
                        variant="outline"
                      >
                        Primary
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[104px] sm:ml-[0] ml-[15px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="green_A200"
                        size="lg"
                        variant="outline"
                      >
                        Success
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[103px] ml-3.5 sm:ml-[0] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="orange_A100"
                        size="lg"
                        variant="outline"
                      >
                        Warning
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[96px] sm:ml-[0] ml-[15px] rounded-[5px] text-center text-sm"
                        shape="round"
                        color="red_A200"
                        size="lg"
                        variant="outline"
                      >
                        Danger
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-end p-2.5 rounded-[5px] w-1/2 md:w-full">
                <Text
                  className="ml-2.5 md:ml-[0] mt-2.5 text-[13px] text-gray-300_01 uppercase"
                  size="txtRobotoBold13Gray30001"
                >
                  Buttons icons and expand
                </Text>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[31px] text-gray-300_01 text-sm"
                  size="txtRobotoBold14"
                >
                  Icon buttons
                </Text>
                <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] mt-[15px] pb-5 pr-5 w-[98%] md:w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-[94%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[122px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-3.5 mr-1 my-px"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        }
                        shape="round"
                        color="gray_300_02"
                        size="lg"
                        variant="outline"
                      >
                        <div className="font-medium text-center text-sm">
                          Settings
                        </div>
                      </Button>
                      <Button
                        className="border border-blue_gray-900_95 border-solid cursor-pointer flex items-center justify-center min-w-[125px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-3.5 mt-[3px] mr-[5px]"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        }
                        shape="round"
                        color="blue_gray_900_95"
                        size="lg"
                        variant="fill"
                      >
                        <div className="font-medium text-center text-sm">
                          Disabled
                        </div>
                      </Button>
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[122px] rounded-[5px]"
                        rightIcon={
                          <Img
                            className="h-3.5 ml-[5px] my-px"
                            src="images/img_save.svg"
                            alt="save"
                          />
                        }
                        shape="round"
                        color="blue_300"
                        size="lg"
                        variant="outline"
                      >
                        <div className="font-medium text-center text-sm">
                          Settings
                        </div>
                      </Button>
                      <Button
                        className="border border-blue-300 border-solid cursor-pointer flex items-center justify-center min-w-[122px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-3.5 mr-1 my-px"
                            src="images/img_search_white_a700.svg"
                            alt="search"
                          />
                        }
                        shape="round"
                        color="blue_300"
                        size="lg"
                        variant="fill"
                      >
                        <div className="font-medium text-center text-sm">
                          Settings
                        </div>
                      </Button>
                      <Button
                        className="border border-green-A200 border-solid cursor-pointer flex items-center justify-center min-w-[123px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-3.5 mt-0.5 mb-px mr-[5px]"
                            src="images/img_offer.svg"
                            alt="offer"
                          />
                        }
                        shape="round"
                        color="green_A200"
                        size="lg"
                        variant="fill"
                      >
                        <div className="font-medium text-center text-sm">
                          Success
                        </div>
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start w-[38%] md:w-full">
                      <Button
                        className="border border-orange-A100 border-solid cursor-pointer flex items-center justify-center min-w-[115px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-3.5 mr-[5px] my-px"
                            src="images/img_div.svg"
                            alt="Frame"
                          />
                        }
                        shape="round"
                        color="orange_A100"
                        size="lg"
                        variant="fill"
                      >
                        <div className="font-medium text-center text-sm">
                          Danger
                        </div>
                      </Button>
                      <Button
                        className="border border-red-A200 border-solid cursor-pointer flex items-center justify-center min-w-[122px] rounded-[5px]"
                        leftIcon={
                          <Img
                            className="h-3.5 mr-1 my-px"
                            src="images/img_close.svg"
                            alt="close"
                          />
                        }
                        shape="round"
                        color="red_A200"
                        size="lg"
                        variant="fill"
                      >
                        <div className="font-medium text-center text-sm">
                          Warning
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <Text
                  className="ml-2.5 md:ml-[0] mt-[11px] text-gray-300_01 text-sm"
                  size="txtRobotoBold14"
                >
                  Expand
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-start ml-2.5 md:ml-[0] mt-3.5 pb-5 md:pr-10 sm:pr-5 pr-[528.09px] w-auto md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[98px] rounded-[5px] text-center text-sm"
                    shape="round"
                    color="gray_300_02"
                    size="lg"
                    variant="outline"
                  >
                    Expand
                  </Button>
                  <Button
                    className="border border-blue-300 border-solid cursor-pointer font-medium min-w-[103px] rounded-[5px] text-center text-sm"
                    shape="round"
                    color="blue_300"
                    size="lg"
                    variant="fill"
                  >
                    Settings
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between my-0 w-full">
              <div className="bg-gray-900_01 flex md:flex-1 flex-col gap-[30px] items-start justify-start pb-2.5 pt-5 px-5 rounded-[5px] w-auto md:w-full">
                <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-[13px] text-gray-300_01 uppercase w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    Square buttons
                  </Text>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[538px] w-auto md:w-full">
                    <Text
                      className="text-gray-300_99 text-xs w-auto"
                      size="txtRobotoRegular12"
                    >
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        Use default button with a prop{" "}
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        squared
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pb-5 pr-5 w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-[98%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer min-w-[102px] text-center text-sm"
                        shape="square"
                        color="gray_300_02"
                        size="lg"
                        variant="outline"
                      >
                        Minimal
                      </Button>
                      <Button
                        className="border border-gray-300_02 border-solid cursor-pointer min-w-[117px] text-center text-sm"
                        shape="square"
                        color="gray_300_02"
                        size="lg"
                        variant="fill"
                      >
                        Secondary
                      </Button>
                      <Button
                        className="border border-blue_gray-900_95 border-solid cursor-pointer min-w-[105px] text-center text-sm"
                        shape="square"
                        color="blue_gray_900_95"
                        size="lg"
                        variant="fill"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="border border-blue-300 border-solid cursor-pointer min-w-[100px] text-center text-sm"
                        shape="square"
                        color="blue_300"
                        size="lg"
                        variant="fill"
                      >
                        Primary
                      </Button>
                      <Button
                        className="border border-green-A200 border-solid cursor-pointer min-w-[104px] text-center text-sm"
                        shape="square"
                        color="green_A200"
                        size="lg"
                        variant="fill"
                      >
                        Success
                      </Button>
                      <Button
                        className="border border-orange-A100 border-solid cursor-pointer min-w-[103px] text-center text-sm"
                        shape="square"
                        color="orange_A100"
                        size="lg"
                        variant="fill"
                      >
                        Warning
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-4/5 md:w-full">
                      <Button
                        className="border border-red-A200 border-solid cursor-pointer min-w-[96px] text-center text-sm"
                        shape="square"
                        color="red_A200"
                        size="lg"
                        variant="fill"
                      >
                        Danger
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[100px] sm:ml-[0] ml-[15px] text-center text-sm"
                        shape="square"
                        color="blue_300"
                        size="lg"
                        variant="outline"
                      >
                        Primary
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[104px] sm:ml-[0] ml-[15px] text-center text-sm"
                        shape="square"
                        color="green_A200"
                        size="lg"
                        variant="outline"
                      >
                        Success
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[103px] ml-3.5 sm:ml-[0] text-center text-sm"
                        shape="square"
                        color="orange_A100"
                        size="lg"
                        variant="outline"
                      >
                        Warning
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[96px] sm:ml-[0] ml-[15px] text-center text-sm"
                        shape="square"
                        color="red_A200"
                        size="lg"
                        variant="outline"
                      >
                        Danger
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_01 flex md:flex-1 flex-col gap-[30px] items-start justify-start pb-2.5 pt-5 px-5 rounded-[5px] w-auto md:w-full">
                <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-[13px] text-gray-300_01 uppercase w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    Rounded buttons
                  </Text>
                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[537px] w-auto md:w-full">
                    <Text
                      className="text-gray-300_99 text-xs w-auto"
                      size="txtRobotoRegular12"
                    >
                      <span className="text-gray-300_01 font-roboto text-left font-normal">
                        Use default button with a prop{" "}
                      </span>
                      <span className="text-red-A200 font-roboto text-left font-normal">
                        rounded
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pb-5 pr-5 w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-[98%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer min-w-[102px] rounded-[21px] text-center text-sm"
                        color="gray_300_02"
                        size="lg"
                        variant="outline"
                      >
                        Minimal
                      </Button>
                      <Button
                        className="border border-gray-300_02 border-solid cursor-pointer min-w-[117px] rounded-[21px] text-center text-sm"
                        color="gray_300_02"
                        size="lg"
                        variant="fill"
                      >
                        Secondary
                      </Button>
                      <Button
                        className="border border-blue_gray-900_95 border-solid cursor-pointer min-w-[105px] rounded-[21px] text-center text-sm"
                        color="blue_gray_900_95"
                        size="lg"
                        variant="fill"
                      >
                        Disabled
                      </Button>
                      <Button
                        className="border border-blue-300 border-solid cursor-pointer min-w-[100px] rounded-[21px] text-center text-sm"
                        color="blue_300"
                        size="lg"
                        variant="fill"
                      >
                        Primary
                      </Button>
                      <Button
                        className="border border-green-A200 border-solid cursor-pointer min-w-[104px] rounded-[21px] text-center text-sm"
                        color="green_A200"
                        size="lg"
                        variant="fill"
                      >
                        Success
                      </Button>
                      <Button
                        className="border border-orange-A100 border-solid cursor-pointer min-w-[103px] rounded-[21px] text-center text-sm"
                        color="orange_A100"
                        size="lg"
                        variant="fill"
                      >
                        Warning
                      </Button>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-4/5 md:w-full">
                      <Button
                        className="border border-red-A200 border-solid cursor-pointer min-w-[96px] rounded-[21px] text-center text-sm"
                        color="red_A200"
                        size="lg"
                        variant="fill"
                      >
                        Danger
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[100px] sm:ml-[0] ml-[15px] rounded-[21px] text-center text-sm"
                        color="blue_300"
                        size="lg"
                        variant="outline"
                      >
                        Primary
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[104px] sm:ml-[0] ml-[15px] rounded-[21px] text-center text-sm"
                        color="green_A200"
                        size="lg"
                        variant="outline"
                      >
                        Success
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[103px] ml-3.5 sm:ml-[0] rounded-[21px] text-center text-sm"
                        color="orange_A100"
                        size="lg"
                        variant="outline"
                      >
                        Warning
                      </Button>
                      <Button
                        className="cursor-pointer min-w-[96px] sm:ml-[0] ml-[15px] rounded-[21px] text-center text-sm"
                        color="red_A200"
                        size="lg"
                        variant="outline"
                      >
                        Danger
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="bg-gray-900_01 flex flex-col items-center justify-end p-2.5 rounded-[5px] w-full">
            <div className="flex flex-col items-start justify-start mt-2.5 w-[99%] md:w-full">
              <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-[13px] text-gray-300_01 uppercase w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Status buttons
                </Text>
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[1348px] w-auto md:w-full">
                  <Text
                    className="text-gray-300_99 text-xs w-auto"
                    size="txtRobotoRegular12"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      Use default buttons with a property{" "}
                    </span>
                    <span className="text-red-A200 font-roboto text-left font-normal">
                      size
                    </span>
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[30px] text-gray-300_01 text-sm"
                size="txtRobotoBold14"
              >
                Small buttons
              </Text>
              <div className="flex flex-col items-start justify-start mt-10 md:pr-10 sm:pr-5 pr-[1452px] w-auto md:w-full">
                <Text
                  className="text-gray-300_99 text-xs w-auto"
                  size="txtRobotoRegular12"
                >
                  <span className="text-gray-300_01 font-roboto text-left font-normal">
                    Use the modifier{" "}
                  </span>
                  <span className="text-red-A200 font-roboto text-left font-normal">
                    sm
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start mt-[30px] pb-5 md:pr-10 sm:pr-5 pr-[274.88px] w-auto md:w-full">
                <Button
                  className="cursor-pointer min-w-[102px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="gray_300_02"
                  size="sm"
                  variant="outline"
                >
                  Minimal
                </Button>
                <Button
                  className="border border-gray-300_02 border-solid cursor-pointer min-w-[117px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="gray_300_02"
                  size="sm"
                  variant="fill"
                >
                  Secondary
                </Button>
                <Button
                  className="border border-blue_gray-900_95 border-solid cursor-pointer min-w-[105px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="blue_gray_900_95"
                  size="sm"
                  variant="fill"
                >
                  Disabled
                </Button>
                <Button
                  className="border border-blue-300 border-solid cursor-pointer min-w-[100px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="blue_300"
                  size="sm"
                  variant="fill"
                >
                  Primary
                </Button>
                <Button
                  className="border border-green-A200 border-solid cursor-pointer min-w-[104px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="green_A200"
                  size="sm"
                  variant="fill"
                >
                  Success
                </Button>
                <Button
                  className="border border-orange-A100 border-solid cursor-pointer min-w-[103px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="orange_A100"
                  size="sm"
                  variant="fill"
                >
                  Warning
                </Button>
                <Button
                  className="border border-red-A200 border-solid cursor-pointer min-w-[96px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="red_A200"
                  size="sm"
                  variant="fill"
                >
                  Danger
                </Button>
                <Button
                  className="cursor-pointer min-w-[100px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="blue_300"
                  size="sm"
                  variant="outline"
                >
                  Primary
                </Button>
                <Button
                  className="cursor-pointer min-w-[104px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="green_A200"
                  size="sm"
                  variant="outline"
                >
                  Success
                </Button>
                <Button
                  className="cursor-pointer min-w-[103px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="orange_A100"
                  size="sm"
                  variant="outline"
                >
                  Warning
                </Button>
                <Button
                  className="cursor-pointer min-w-[96px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="red_A200"
                  size="sm"
                  variant="outline"
                >
                  Danger
                </Button>
              </div>
              <Text
                className="mt-[11px] text-gray-300_01 text-sm"
                size="txtRobotoBold14"
              >
                Large buttons
              </Text>
              <div className="flex flex-col items-start justify-start mt-[39px] md:pr-10 sm:pr-5 pr-[1460px] w-auto md:w-full">
                <Text
                  className="text-gray-300_99 text-xs w-auto"
                  size="txtRobotoRegular12"
                >
                  <span className="text-gray-300_01 font-roboto text-left font-normal">
                    Use the modifier{" "}
                  </span>
                  <span className="text-red-A200 font-roboto text-left font-normal">
                    lg
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start mt-[30px] pb-5 md:pr-10 sm:pr-5 pr-[274.88px] w-auto md:w-full">
                <Button
                  className="cursor-pointer min-w-[102px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="gray_300_02"
                  size="lg"
                  variant="outline"
                >
                  Minimal
                </Button>
                <Button
                  className="border border-gray-300_02 border-solid cursor-pointer min-w-[117px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="gray_300_02"
                  size="lg"
                  variant="fill"
                >
                  Secondary
                </Button>
                <Button
                  className="border border-blue_gray-900_95 border-solid cursor-pointer min-w-[105px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="blue_gray_900_95"
                  size="lg"
                  variant="fill"
                >
                  Disabled
                </Button>
                <Button
                  className="border border-blue-300 border-solid cursor-pointer min-w-[100px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="blue_300"
                  size="lg"
                  variant="fill"
                >
                  Primary
                </Button>
                <Button
                  className="border border-green-A200 border-solid cursor-pointer min-w-[104px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="green_A200"
                  size="lg"
                  variant="fill"
                >
                  Success
                </Button>
                <Button
                  className="border border-orange-A100 border-solid cursor-pointer min-w-[103px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="orange_A100"
                  size="lg"
                  variant="fill"
                >
                  Warning
                </Button>
                <Button
                  className="border border-red-A200 border-solid cursor-pointer min-w-[96px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="red_A200"
                  size="lg"
                  variant="fill"
                >
                  Danger
                </Button>
                <Button
                  className="cursor-pointer min-w-[100px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="blue_300"
                  size="lg"
                  variant="outline"
                >
                  Primary
                </Button>
                <Button
                  className="cursor-pointer min-w-[104px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="green_A200"
                  size="lg"
                  variant="outline"
                >
                  Success
                </Button>
                <Button
                  className="cursor-pointer min-w-[103px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="orange_A100"
                  size="lg"
                  variant="outline"
                >
                  Warning
                </Button>
                <Button
                  className="cursor-pointer min-w-[96px] rounded-[5px] text-center text-sm"
                  shape="round"
                  color="red_A200"
                  size="lg"
                  variant="outline"
                >
                  Danger
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-end pt-5 px-5 rounded-[5px] w-1/2 md:w-full">
              <Text
                className="text-[13px] text-gray-300_01 uppercase"
                size="txtRobotoBold13Gray30001"
              >
                Button group
              </Text>
              <Text
                className="mt-[33px] text-gray-300_01 text-sm"
                size="txtRobotoBold14"
              >
                Icon group
              </Text>
              <div className="flex flex-col items-start justify-start mt-[39px] md:pr-10 sm:pr-5 pr-[555px] w-auto md:w-full">
                <Text
                  className="text-gray-300_99 text-xs w-auto"
                  size="txtRobotoRegular12"
                >
                  <span className="text-gray-300_01 font-roboto text-left font-normal">
                    Use default button group with
                  </span>
                  <span className="text-red-A200 font-roboto text-left font-normal">
                    {" "}
                    icons
                  </span>
                </Text>
              </div>
              <Img
                className="h-[50px] mt-[30px] w-[125px]"
                src="images/img_div_gray_300_02.svg"
                alt="div"
              />
              <Text className="text-gray-300_01 text-sm" size="txtRobotoBold14">
                Large buttons
              </Text>
              <Text
                className="mt-[41px] text-gray-300_99 text-xs"
                size="txtRobotoRegular12"
              >
                Use default button group
              </Text>
              <div className="flex flex-row gap-[-1px] items-start justify-start mt-[30px] pb-5 w-auto">
                <Button
                  className="cursor-pointer font-medium rounded-bl-[5px] rounded-tl-[5px] text-center text-sm w-full"
                  color="gray_300_02"
                  size="lg"
                  variant="outline"
                >
                  Left
                </Button>
                <Button
                  className="cursor-pointer font-medium text-center text-sm w-full"
                  shape="square"
                  color="gray_300_02"
                  size="lg"
                  variant="outline"
                >
                  Middle
                </Button>
                <Button
                  className="cursor-pointer font-medium rounded-br-[5px] rounded-tr-[5px] text-center text-sm w-full"
                  color="gray_300_02"
                  size="lg"
                  variant="outline"
                >
                  Right
                </Button>
              </div>
              <Text className="text-gray-300_01 text-sm" size="txtRobotoBold14">
                Justify buttons
              </Text>
              <div className="flex flex-col items-start justify-start mt-[39px] md:pr-10 sm:pr-5 pr-[505px] w-auto md:w-full">
                <Text
                  className="text-gray-300_99 text-xs w-auto"
                  size="txtRobotoRegular12"
                >
                  <span className="text-gray-300_01 font-roboto text-left font-normal">
                    Use default button group with a prop
                  </span>
                  <span className="text-red-A200 font-roboto text-left font-normal">
                    {" "}
                    justified
                  </span>
                </Text>
              </div>
              <div className="gap-[-1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start mt-[30px] pb-5 w-auto md:w-full">
                <Button
                  className="border border-blue-300 border-solid cursor-pointer font-medium min-w-[249px] rounded-bl-[5px] rounded-tl-[5px] text-center text-sm w-full"
                  color="blue_300"
                  size="lg"
                  variant="fill"
                >
                  Left
                </Button>
                <Button
                  className="border border-blue-300 border-solid cursor-pointer font-medium min-w-[249px] text-center text-sm w-full"
                  shape="square"
                  color="blue_300"
                  size="lg"
                  variant="fill"
                >
                  Middle
                </Button>
                <Button
                  className="border border-blue-300 border-solid cursor-pointer font-medium min-w-[249px] rounded-br-[5px] rounded-tr-[5px] text-center text-sm w-full"
                  color="blue_300"
                  size="lg"
                  variant="fill"
                >
                  Right
                </Button>
              </div>
            </div>
            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-start justify-start p-5 rounded-[5px] w-1/2 md:w-full">
              <Text
                className="text-[13px] text-gray-300_01 uppercase"
                size="txtRobotoBold13Gray30001"
              >
                Button dropdown
              </Text>
              <Text
                className="mt-[33px] text-gray-300_01 text-sm"
                size="txtRobotoBold14"
              >
                Basic buttons with dropdown
              </Text>
              <Text
                className="mt-[41px] text-gray-300_99 text-xs"
                size="txtRobotoRegular12"
              >
                Use default dropdown toggle
              </Text>
              <div className="gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start mt-[30px] pb-5 md:pr-10 sm:pr-5 pr-[372.3px] w-auto md:w-full">
                <SelectBox
                  className="font-medium text-center text-sm w-full"
                  placeholderClassName="text-gray-300_01"
                  indicator={
                    <Img
                      className="h-[18px] w-full"
                      src="images/img_arrowdown_gray_300_01.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="buttonreactaria"
                  options={buttonreactariaOptionsList}
                  isSearchable={false}
                  placeholder="Dropdown"
                  shape="round"
                  color="gray_300_02"
                  size="sm"
                  variant="outline"
                />
                <SelectBox
                  className="border border-gray-300_02 border-solid font-medium text-center text-sm w-full"
                  placeholderClassName="text-gray-600_04"
                  indicator={
                    <Img
                      className="h-[18px] w-full"
                      src="images/img_arrowdown_gray_600_04.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="buttonreactar"
                  options={buttonreactarOptionsList}
                  isSearchable={false}
                  placeholder="Dropdown"
                  shape="round"
                  color="gray_300_02"
                  size="sm"
                  variant="fill"
                />
                <SelectBox
                  className="font-medium text-center text-sm w-full"
                  placeholderClassName="text-blue-300"
                  indicator={
                    <Img
                      className="h-[18px] w-full"
                      src="images/img_arrowdown_blue_300.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="buttonreactar_One"
                  options={buttonreactarOneOptionsList}
                  isSearchable={false}
                  placeholder="Dropdown"
                  shape="round"
                  color="blue_300"
                  size="sm"
                  variant="outline"
                />
              </div>
              <Text
                className="mt-[11px] text-gray-300_01 text-sm"
                size="txtRobotoBold14"
              >
                Buttons with divided dropdown
              </Text>
              <div className="flex flex-col items-start justify-start mt-[39px] md:pr-10 sm:pr-5 pr-[528px] w-auto md:w-full">
                <Text
                  className="text-gray-300_99 text-xs w-auto"
                  size="txtRobotoRegular12"
                >
                  <span className="text-gray-300_01 font-roboto text-left font-normal">
                    Use default dropdown toggle with{" "}
                  </span>
                  <span className="text-red-A200 font-roboto text-left font-normal">
                    button
                  </span>
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start mb-[126px] mt-[30px] sm:pr-5 pr-[31.25px] w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-[-1px] items-start justify-start pb-5 w-auto">
                  <Text
                    className="border border-gray-300_02 border-solid flex-1 pl-[15px] py-3 rounded-bl-[5px] rounded-tl-[5px] text-center text-gray-300_01 text-sm w-full"
                    size="txtRobotoRegular14Gray30001"
                  >
                    Dropdown
                  </Text>
                  <div className="border border-gray-300_02 border-solid flex flex-col items-start justify-start px-2 py-[12.5px] rounded-br-[5px] rounded-tr-[5px] w-full">
                    <Img
                      className="h-[18px]"
                      src="images/img_arrowdown_gray_300_01.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[-1px] items-start justify-start pb-5 w-auto">
                  <Text
                    className="border border-blue-300 border-solid flex-1 pl-[15px] py-3 rounded-bl-[5px] rounded-tl-[5px] text-blue-300 text-center text-sm w-full"
                    size="txtRobotoRegular14Blue300"
                  >
                    Dropdown
                  </Text>
                  <div className="border border-blue-300 border-solid flex flex-col items-start justify-start px-2 py-[12.5px] rounded-br-[5px] rounded-tr-[5px] w-full">
                    <Img
                      className="h-[18px]"
                      src="images/img_arrowdown_blue_300.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[-1px] items-start justify-start pb-5 w-auto">
                  <Text
                    className="border border-blue-300 border-solid flex-1 pl-[15px] py-3 rounded-bl-[5px] rounded-tl-[5px] text-blue-300 text-center text-sm w-full"
                    size="txtRobotoRegular14Blue300"
                  >
                    Dropdown
                  </Text>
                  <div className="bg-blue-300 border border-blue-300 border-solid flex flex-col items-start justify-start px-2 py-[12.5px] rounded-br-[5px] rounded-tr-[5px] w-full">
                    <Img
                      className="h-[18px]"
                      src="images/img_arrowdown_white_a700.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[-1px] items-start justify-start pb-5 w-auto">
                  <Text
                    className="bg-blue-300 border border-blue-300 border-solid flex-1 justify-center pl-[15px] py-3 rounded-bl-[5px] rounded-tl-[5px] text-center text-sm text-white-A700 w-full"
                    size="txtRobotoRegular14WhiteA700"
                  >
                    Dropdown
                  </Text>
                  <div className="bg-blue-300 border border-blue-300 border-solid flex flex-col items-start justify-start px-2 py-[12.5px] rounded-br-[5px] rounded-tr-[5px] w-full">
                    <Img
                      className="h-[18px]"
                      src="images/img_arrowdown_white_a700.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[-1px] items-start justify-start pb-5 w-auto">
                  <Text
                    className="bg-blue_gray-900_95 border border-blue_gray-900_95 border-solid flex-1 justify-center pl-[15px] py-3 rounded-bl-[5px] rounded-tl-[5px] text-center text-gray-300_01 text-sm w-full"
                    size="txtRobotoRegular14Gray30001"
                  >
                    Dropdown
                  </Text>
                  <div className="bg-blue_gray-900_95 border border-blue_gray-900_95 border-solid flex flex-col items-start justify-start px-2 py-[12.5px] rounded-br-[5px] rounded-tr-[5px] w-full">
                    <Img
                      className="h-[18px]"
                      src="images/img_arrowdown_gray_300_01.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonstylePage;
