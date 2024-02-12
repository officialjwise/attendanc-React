import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, SelectBox, Text } from "components";

const selectinputstatOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FormPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-opensans sm:gap-5 md:gap-5 items-start mx-auto pb-[86px] w-full">
        <Sidebar className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 rounded top-[0]">
          <div className="flex flex-col items-start justify-start mb-[74px] mt-5 mx-auto w-[87%]">
            <Text
              className="bg-white-A700 h-11 justify-center sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Dashboard
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Components
            </Text>
            <div className="flex flex-col items-center justify-start mt-[5px] w-full">
              <Text
                className="bg-gray-50 h-11 justify-center sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-A400 w-[260px]"
                size="txtOpenSansSemiBold15IndigoA400"
              >
                Forms
              </Text>
              <div className="flex flex-col items-center justify-start pt-[5px] w-full">
                <div className="flex flex-col items-start justify-end p-2.5 w-full">
                  <Text
                    className="md:ml-[0] ml-[43px] text-indigo-900 text-sm"
                    size="txtOpenSansSemiBold14"
                  >
                    Form Elements
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start p-2 w-full">
                  <div className="bg-indigo-A400 h-1.5 ml-[31px] my-[9px] rounded-[50%] w-1.5"></div>
                  <Text
                    className="mt-1 text-indigo-A400 text-sm"
                    size="txtOpenSansSemiBold14IndigoA400"
                  >
                    Form Layouts
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-2.5 w-full">
                  <Text
                    className="md:ml-[0] ml-[43px] text-indigo-900 text-sm"
                    size="txtOpenSansSemiBold14"
                  >
                    Form Editors
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-2.5 w-full">
                  <Text
                    className="md:ml-[0] ml-[43px] text-indigo-900 text-sm"
                    size="txtOpenSansSemiBold14"
                  >
                    Form Validation
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Tables
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Charts
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Icons
            </Text>
            <Text
              className="md:ml-[0] ml-[15px] mt-2.5 text-[11px] text-blue_gray-300 uppercase"
              size="txtOpenSansSemiBold11"
            >
              Pages
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Profile
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              F.A.Q
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Contact
            </Text>
            <a
              href="javascript:"
              className="bg-white-A700 h-11 justify-center mt-[5px] pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
            >
              <Text size="txtOpenSansSemiBold15">Register</Text>
            </a>
            <a
              href="javascript:"
              className="bg-white-A700 h-11 justify-center mt-[5px] pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
            >
              <Text size="txtOpenSansSemiBold15">Login</Text>
            </a>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Error 404
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mt-[5px] sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Blank
            </Text>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col font-nunito gap-4 items-center justify-start p-[18px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
              size="txtNunitoSemiBold24Indigo900"
            >
              Form Layouts
            </Text>
            <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[982px] w-full">
              <Text
                className="text-blue_gray-300 text-sm"
                size="txtNunitoSemiBold14Bluegray300"
              >
                Home
              </Text>
              <div className="flex flex-row gap-[7.17px] items-start justify-start pl-2 w-auto">
                <Text
                  className="text-blue_gray-300 text-sm w-auto"
                  size="txtNunitoSemiBold14Bluegray300"
                >
                  /
                </Text>
                <Text
                  className="text-blue_gray-300 text-sm w-auto"
                  size="txtNunitoSemiBold14Bluegray300"
                >
                  Forms
                </Text>
              </div>
              <div className="flex flex-row gap-[7.17px] items-start justify-start pl-2 w-auto">
                <Text
                  className="text-blue_gray-300 text-sm w-auto"
                  size="txtNunitoSemiBold14Bluegray300"
                >
                  /
                </Text>
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtNunitoSemiBold14Bluegray600"
                >
                  Layouts
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-start mb-0.5 w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start pb-3 px-3 w-1/2 md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[22.59px] items-start justify-start p-5 rounded-[5px] w-auto sm:w-full">
                  <Text
                    className="text-indigo-900 text-lg w-auto"
                    size="txtPoppinsMedium18Indigo900"
                  >
                    Horizontal Form
                  </Text>
                  <div className="flex flex-col font-opensans gap-4 items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-12 items-start justify-between w-full">
                      <Text
                        className="leading-[24.00px] sm:ml-[0] ml-[11px] sm:mt-0 my-1.5 text-base text-gray-800"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Your Name
                      </Text>
                      <div className="bg-white-A700 h-9 mb-6 mr-3 outline outline-[1px] outline-blue_gray-100 rounded-md w-[79%]"></div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[51.33px] items-center justify-start pl-3 pr-[13.02px] w-auto sm:w-full">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Email
                      </Text>
                      <div className="bg-white-A700 h-9 outline outline-[1px] outline-blue_gray-100 rounded-md w-[83%]"></div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[30px] items-start justify-between w-full">
                      <Text
                        className="leading-[24.00px] sm:ml-[0] ml-[11px] sm:mt-0 my-1.5 text-base text-gray-800"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Password
                      </Text>
                      <div className="bg-white-A700 h-9 mb-6 mr-3 outline outline-[1px] outline-blue_gray-100 rounded-md w-[79%]"></div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[29.33px] items-start justify-start pl-3 pr-[0.02px] w-auto sm:w-full">
                      <Text
                        className="text-base text-gray-800 w-auto"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Radios
                      </Text>
                      <div className="flex flex-col gap-0.5 items-start justify-start px-3 w-auto sm:w-full">
                        <div className="flex flex-row gap-2 items-center justify-start md:pr-10 sm:pr-5 pr-[332.66px] w-auto sm:w-full">
                          <div className="bg-blue-A400 border border-blue-A400 border-solid flex flex-col h-4 items-center justify-start p-1 rounded-[50%] w-4">
                            <div className="bg-white-A700 h-[7px] rounded-[3px] w-[7px]"></div>
                          </div>
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtOpenSansRegular16Gray800"
                          >
                            First radio
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-full">
                          <div className="bg-white-A700 border border-black-900_3f border-solid h-4 my-[3px] rounded-[50%] w-4"></div>
                          <Text
                            className="text-base text-gray-800"
                            size="txtOpenSansRegular16Gray800"
                          >
                            Second radio
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start w-full">
                          <div className="bg-white-A700_87 border border-black-900_43 border-solid h-4 my-[3px] rounded-[50%] w-4"></div>
                          <Text
                            className="text-base text-gray-800_87"
                            size="txtOpenSansRegular16Gray80087"
                          >
                            Third disabled radio
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-2 items-center justify-end md:ml-[0] ml-[103px] pr-0.5 pt-0.5 w-[79%] md:w-full">
                      <div className="bg-white-A700 border border-black-900_3f border-solid h-4 mb-1 rounded w-4"></div>
                      <Text
                        className="mr-[267px] text-base text-gray-800"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Example checkbox
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[4.16px] items-start justify-start ml-3 md:ml-[0] pl-[186.86px] pr-[186.88px] md:px-10 sm:px-5 w-auto sm:w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[266px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col justify-center p-3 rounded-[5px] w-full">
                  <Text
                    className="ml-2 md:ml-[0] mr-[350px] mt-1 text-indigo-900 text-lg"
                    size="txtPoppinsMedium18Indigo900"
                  >
                    Multi Columns Form
                  </Text>
                  <div className="flex flex-col font-opensans items-center justify-start mb-2 mt-1 pt-4 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-end w-full">
                        <Text
                          className="md:ml-[0] ml-[7px] text-base text-gray-800"
                          size="txtOpenSansRegular16Gray800"
                        >
                          Your Name
                        </Text>
                        <Input
                          name="inputinputnameFive"
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                          shape="round"
                          color="white_A700"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-1/2 sm:w-full">
                          <Text
                            className="md:ml-[0] ml-[7px] text-base text-gray-800"
                            size="txtOpenSansRegular16Gray800"
                          >
                            Email
                          </Text>
                          <Input
                            name="inputinputemail_One"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[94%]"
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-2.5 items-start justify-start w-1/2 sm:w-full">
                          <Text
                            className="md:ml-[0] ml-[7px] text-base text-gray-800"
                            size="txtOpenSansRegular16Gray800"
                          >
                            Password
                          </Text>
                          <Input
                            name="inputinputpassw_One"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[94%]"
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[7px] text-base text-gray-800"
                          size="txtOpenSansRegular16Gray800"
                        >
                          Address
                        </Text>
                        <Input
                          name="inputinputaddre"
                          placeholder="1234 Main St"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[7px] text-base text-gray-800"
                          size="txtOpenSansRegular16Gray800"
                        >
                          Address 2
                        </Text>
                        <Input
                          name="inputinputaddre_One"
                          placeholder="Apartment, studio, or floor"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                        <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-end w-1/2 sm:w-full">
                          <Text
                            className="md:ml-[0] ml-[7px] mt-0.5 text-base text-gray-800"
                            size="txtOpenSansRegular16Gray800"
                          >
                            City
                          </Text>
                          <Input
                            name="inputinputcity"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[94%]"
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start px-2 w-auto">
                          <Text
                            className="text-base text-gray-800 w-auto"
                            size="txtOpenSansRegular16Gray800"
                          >
                            State
                          </Text>
                          <Input
                            name="selectinputstat"
                            placeholder="Choose..."
                            className="!placeholder:text-gray-900 !text-gray-900 p-0 text-base text-left w-full"
                            wrapClassName="border border-blue_gray-100 border-solid flex rounded-md w-auto"
                            suffix={
                              <Img
                                className="mt-1 mb-[5px] h-3 ml-[35px]"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          ></Input>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-end w-[17%] sm:w-full">
                          <Text
                            className="md:ml-[0] ml-[7px] mt-0.5 text-base text-gray-800"
                            size="txtOpenSansRegular16Gray800"
                          >
                            Zip
                          </Text>
                          <Input
                            name="inputinputzip"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-4/5"
                            shape="round"
                            color="white_A700"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[98%] md:w-full">
                        <div className="bg-white-A700 border border-black-900_3f border-solid h-4 my-[3px] rounded w-4"></div>
                        <Text
                          className="text-base text-gray-800"
                          size="txtOpenSansRegular16Gray800"
                        >
                          Check me out
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[4.16px] items-start justify-start pl-[194.86px] pr-[194.88px] md:px-10 sm:px-5 w-auto sm:w-full">
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
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start pb-3 px-3 w-1/2 md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col justify-center p-3 rounded-[5px] w-full">
                  <Text
                    className="ml-2 md:ml-[0] mr-[411px] mt-1 text-indigo-900 text-lg"
                    size="txtPoppinsMedium18Indigo900"
                  >
                    Vertical Form
                  </Text>
                  <div className="flex flex-col font-opensans gap-4 items-start justify-start mb-2 mt-1 pt-4 w-auto sm:w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-end w-full">
                      <Text
                        className="md:ml-[0] ml-[7px] text-base text-gray-800"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Your Name
                      </Text>
                      <Input
                        name="inputinputnanme"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[7px] text-base text-gray-800"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Email
                      </Text>
                      <Input
                        name="inputinputemail_Two"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[7px] text-base text-gray-800"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Password
                      </Text>
                      <Input
                        name="inputinputpassw_Two"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex h-9 ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                        shape="round"
                        color="white_A700"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[7px] text-base text-gray-800"
                        size="txtOpenSansRegular16Gray800"
                      >
                        Address
                      </Text>
                      <Input
                        name="inputinputaddre_Two"
                        placeholder="1234 Main St"
                        className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                        wrapClassName="ml-2 md:ml-[0] outline outline-[1px] outline-blue_gray-100 rounded-md w-[97%]"
                        shape="round"
                        color="white_A700"
                        size="xs"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-[4.16px] items-start justify-start pl-[194.86px] pr-[194.88px] md:px-10 sm:px-5 w-auto sm:w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[5px] justify-center p-3 rounded-[5px] w-full">
                  <Text
                    className="ml-2 md:ml-[0] mr-[172px] mt-1 text-indigo-900 text-lg"
                    size="txtPoppinsMedium18Indigo900"
                  >
                    No Labels / Placeholders as labels Form
                  </Text>
                  <div className="flex flex-col font-opensans items-center justify-start mb-2 pt-[17px] w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[97%] md:w-full">
                        <Input
                          name="input"
                          placeholder="Your Name"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="outline outline-[1px] outline-blue_gray-100 rounded-md w-full"
                          type="text"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-full">
                          <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray-100 px-3 py-[7px] rounded-md w-auto">
                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[187px] w-auto">
                              <Text
                                className="text-base text-gray-600 w-auto"
                                size="txtOpenSansRegular16Gray600"
                              >
                                Email
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray-100 px-3 py-[7px] rounded-md w-auto">
                            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[155px] w-auto">
                              <Text
                                className="text-base text-gray-600 w-auto"
                                size="txtOpenSansRegular16Gray600"
                              >
                                Password
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Input
                          name="input_One"
                          placeholder="Address"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="outline outline-[1px] outline-blue_gray-100 rounded-md w-full"
                          shape="round"
                          color="white_A700"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-between w-full">
                          <Input
                            name="input_Two"
                            placeholder="City"
                            className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                            wrapClassName="sm:flex-1 outline outline-[1px] outline-blue_gray-100 rounded-md sm:w-full"
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          ></Input>
                          <SelectBox
                            className="border border-blue_gray-100 border-solid sm:flex-1 rounded-md text-base text-left w-[32%] sm:w-full"
                            placeholderClassName="text-gray-900"
                            indicator={
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="selectinputstat_One"
                            options={selectinputstatOneOptionsList}
                            isSearchable={false}
                            placeholder="Choose..."
                            shape="round"
                            color="white_A700"
                            size="xs"
                            variant="fill"
                          />
                          <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[1px] outline-blue_gray-100 px-3 py-[7px] rounded-md w-auto">
                            <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-auto">
                              <Text
                                className="text-base text-gray-600 w-auto"
                                size="txtOpenSansRegular16Gray600"
                              >
                                Zip
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[4.16px] items-start justify-start pl-[194.86px] pr-[194.88px] md:px-10 sm:px-5 w-auto sm:w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[18px] rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col justify-center p-3 rounded-[5px] w-full">
                  <Text
                    className="ml-2 md:ml-[0] mr-[348px] mt-[7px] text-indigo-900 text-lg"
                    size="txtPoppinsMedium18Indigo900"
                  >
                    Floating labels Form
                  </Text>
                  <div className="flex flex-col font-opensans items-center justify-start mb-[7px] mt-0.5 pt-4 w-full">
                    <div className="flex flex-col gap-8 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                        <div className="relative w-[524px] sm:w-full">
                          <div className="bg-white-A700 h-14 m-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-full"></div>
                          <div className="absolute flex flex-col h-full inset-[0] items-start justify-start m-auto pl-[13px] md:pr-10 sm:pr-5 pr-[427px] py-[17px] w-auto">
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtOpenSansRegular16Gray800"
                            >
                              Your Name
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-between mt-4 w-full">
                          <div className="relative w-[254px]">
                            <div className="bg-white-A700 h-14 m-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-full"></div>
                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-start m-auto pl-[13px] md:pr-10 sm:pr-5 pr-[161px] py-[17px] w-auto">
                              <Text
                                className="text-base text-gray-800 w-auto"
                                size="txtOpenSansRegular16Gray800"
                              >
                                Your Email
                              </Text>
                            </div>
                          </div>
                          <div className="relative w-[254px]">
                            <div className="bg-white-A700 h-14 m-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-full"></div>
                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-start m-auto pl-[13px] md:pr-10 sm:pr-5 pr-[168px] py-[17px] w-auto">
                              <Text
                                className="text-base text-gray-800 w-auto"
                                size="txtOpenSansRegular16Gray800"
                              >
                                Password
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 relative w-[524px] sm:w-full">
                          <div className="bg-white-A700 h-[98px] m-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-full"></div>
                          <div className="absolute flex flex-col h-full inset-[0] items-start justify-start m-auto pb-[59px] pl-[13px] md:pr-10 sm:pr-5 pr-[450px] pt-[17px] w-auto">
                            <Text
                              className="text-base text-gray-800 w-auto"
                              size="txtOpenSansRegular16Gray800"
                            >
                              Address
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-start justify-between mt-[9px] w-full">
                          <div className="sm:mt-0 mt-1.5 relative w-[254px]">
                            <div className="bg-white-A700 h-14 m-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-full"></div>
                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-start m-auto pl-[13px] md:pr-10 sm:pr-5 pr-[213px] py-[17px] w-auto">
                              <Text
                                className="text-base text-gray-800 w-auto"
                                size="txtOpenSansRegular16Gray800"
                              >
                                City
                              </Text>
                            </div>
                          </div>
                          <div className="relative w-[164px]">
                            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row gap-3 items-center justify-evenly mt-auto mx-auto p-[11px] rounded-md w-full">
                              <div className="flex flex-col items-start justify-start mt-4 md:pr-10 sm:pr-5 pr-[42px] w-auto">
                                <Text
                                  className="text-base text-gray-900 w-auto"
                                  size="txtOpenSansRegular16"
                                >
                                  New York
                                </Text>
                              </div>
                              <Img
                                className="h-3 w-3"
                                src="images/img_arrowdown.svg"
                                alt="arrowdown"
                              />
                            </div>
                            <div className="absolute flex flex-col items-start justify-start left-[1%] pb-[13px] pl-[11.05px] md:pr-10 sm:pr-5 pr-[89.35px] pt-[12.3px] top-[0] w-auto">
                              <Text
                                className="text-base text-gray-800 w-auto"
                                size="txtOpenSansRegular16Gray800"
                              >
                                State
                              </Text>
                            </div>
                          </div>
                          <div className="sm:mt-0 mt-1.5 relative w-[74px]">
                            <div className="bg-white-A700 h-14 m-auto outline outline-[1px] outline-blue_gray-100 rounded-md w-[98%]"></div>
                            <div className="absolute flex flex-col h-full inset-[0] items-start justify-start m-auto pl-[13px] sm:pr-5 pr-[38px] py-[17px] w-auto">
                              <Text
                                className="text-base text-gray-800"
                                size="txtOpenSansRegular16Gray800"
                              >
                                Zip
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[4.16px] items-start justify-start pl-[194.86px] pr-[194.88px] md:px-10 sm:px-5 w-auto sm:w-full">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;
