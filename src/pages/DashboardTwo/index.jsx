import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Input, Line, List, Text } from "components";

const DashboardTwoPage = () => {
  return (
    <>
      <div
        className="bg-black-900 bg-cover bg-no-repeat flex flex-col font-nunito h-[982px] items-center justify-end mx-auto w-full"
        style={{ backgroundImage: "url('images/img_dashboardtwo.png')" }}
      >
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full">
          <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] md:mt-0 my-1.5 py-2 w-auto">
            <div className="flex flex-row gap-1.5 items-end justify-start md:pr-10 sm:pr-5 pr-[117px] w-[87%]">
              <Img
                className="h-[26px] md:h-auto mb-[3px] mt-1.5 object-cover w-[15%]"
                src="images/img_logopng.png"
                alt="logopng"
              />
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                size="txtNunitoBold26"
              >
                NiceAdmin
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-opensans items-center justify-start ml-5 md:ml-[0] md:mt-0 my-[11px] w-[22%] md:w-full">
            <div className="bg-white-A700 border border-indigo-900_33 border-solid flex flex-col items-start justify-start pl-[9px] sm:pr-5 pr-[39px] py-[9px] rounded-[3px] w-auto">
              <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[227px] w-auto">
                <Text
                  className="text-gray-600_02 text-sm w-auto"
                  size="txtOpenSansRegular14Gray60002"
                >
                  Search
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-opensans gap-[25px] items-center justify-start md:ml-[0] ml-[582px] md:mt-0 my-[11px] pr-4 w-auto">
            <div className="flex flex-col items-start justify-start pb-[5.25px] pt-[5.75px] w-auto">
              <Text
                className="bg-blue-A400 justify-center pl-1.5 rounded-md text-center text-white-A700 text-xs w-auto"
                size="txtOpenSansRegular12"
              >
                4
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-[5.25px] pt-[5.75px] w-auto">
              <Text
                className="bg-teal-700 justify-center pl-1.5 rounded-md text-center text-white-A700 text-xs w-auto"
                size="txtOpenSansRegular12"
              >
                3
              </Text>
            </div>
            <div className="flex flex-row items-center justify-center w-3/5">
              <Img
                className="h-9 md:h-auto rounded-[50%] w-9"
                src="images/img_profileimgjpg.png"
                alt="profileimgjpg"
              />
              <div className="flex flex-row items-center justify-end pl-2 w-[74%]">
                <Text
                  className="text-indigo-900 text-sm"
                  size="txtOpenSansSemiBold14"
                >
                  K. Anderson
                </Text>
                <div className="border-indigo-900 border-solid border-t-4 border-x-4 h-1 ml-[3px] w-[9%]"></div>
              </div>
            </div>
          </div>
        </header>
        <div className="bg-gray-50 flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-evenly pb-[30px] w-full">
          <Sidebar className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden justify-start md:mt-0 mt-8 overflow-auto md:px-5 shadow-bs1 top-[0]">
            <Text
              className="bg-gray-50 h-11 justify-center md:ml-[0] mt-5 mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-A400 w-[260px]"
              size="txtOpenSansSemiBold15IndigoA400"
            >
              Dashboard
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Components
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Forms
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Tables
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Charts
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Icons
            </Text>
            <Text
              className="md:ml-[0] ml-[35px] mr-[230px] mt-2.5 text-[11px] text-blue_gray-300 uppercase"
              size="txtOpenSansSemiBold11"
            >
              Pages
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Profile
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              F.A.Q
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Contact
            </Text>
            <a
              href="javascript:"
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
            >
              <Text size="txtOpenSansSemiBold15">Register</Text>
            </a>
            <a
              href="javascript:"
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 pb-[9px] pt-[13px] sm:px-5 px-[35px] rounded text-[15px] text-indigo-900 w-[260px]"
            >
              <Text size="txtOpenSansSemiBold15">Login</Text>
            </a>
            <Text
              className="bg-white-A700 h-11 justify-center md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Error 404
            </Text>
            <Text
              className="bg-white-A700 h-11 justify-center mb-[211px] md:ml-[0] mt-[5px] mx-5 sm:px-5 px-[35px] py-[11px] rounded text-[15px] text-indigo-900 w-[260px]"
              size="txtOpenSansSemiBold15"
            >
              Blank
            </Text>
          </Sidebar>
          <div className="flex flex-1 flex-col font-nunito gap-4 items-center justify-end pl-4 md:px-5 py-4 w-full">
            <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-indigo-900 sm:text-xl"
                size="txtNunitoSemiBold24Indigo900"
              >
                Dashboard
              </Text>
              <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[1023px] w-full">
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
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtNunitoSemiBold14Bluegray600"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-center justify-evenly pb-[18px] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start pb-3 px-3 w-[66%] md:w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start mb-2 w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] pb-2.5 rounded-[5px] shadow-bs2 w-full">
                        <div className="flex flex-col gap-2 items-start justify-start pb-5 px-5 w-auto">
                          <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[92.33px] pt-5 w-auto">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsMedium18Indigo900"
                            >
                              <span className="text-indigo-900 font-poppins text-left font-medium">
                                Sales{" "}
                              </span>
                              <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                                | Today
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start sm:pr-5 pr-[25px] w-full">
                            <div className="bg-gray-50_01 h-16 rounded-[50%] w-16"></div>
                            <div className="flex flex-col gap-[2.59px] items-start justify-start pl-4 pr-[3.52px] w-auto">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-900 w-auto"
                                size="txtNunitoBold28Indigo900"
                              >
                                145
                              </Text>
                              <Text
                                className="text-sm text-teal-700 w-auto"
                                size="txtOpenSansBold14"
                              >
                                <span className="text-teal-700 font-opensans text-left font-bold">
                                  12%{" "}
                                </span>
                                <span className="text-gray-600 font-opensans text-left font-normal">
                                  increase
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] pb-2.5 rounded-[5px] shadow-bs2 w-full">
                        <div className="flex flex-col gap-2 items-start justify-start pb-5 px-5 w-auto">
                          <div className="flex flex-col items-start justify-start pb-[14.59px] sm:pr-5 pr-[31.33px] pt-5 w-auto">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsMedium18Indigo900"
                            >
                              <span className="text-indigo-900 font-poppins text-left font-medium">
                                Revenue{" "}
                              </span>
                              <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                                | This Month
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start sm:pr-5 pr-[26px] w-full">
                            <div className="bg-green-50 h-16 rounded-[50%] w-16"></div>
                            <div className="flex flex-col gap-[2.59px] items-start justify-start pl-4 w-auto">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-900 w-auto"
                                size="txtNunitoBold28Indigo900"
                              >
                                $3,264
                              </Text>
                              <Text
                                className="text-sm text-teal-700 w-auto"
                                size="txtOpenSansBold14"
                              >
                                <span className="text-teal-700 font-opensans text-left font-bold">
                                  8%{" "}
                                </span>
                                <span className="text-gray-600 font-opensans text-left font-normal">
                                  increase
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] pb-2.5 rounded-[5px] shadow-bs2 w-full">
                        <div className="flex flex-col gap-2 items-start justify-start pb-5 px-5 w-auto">
                          <div className="flex flex-col items-start justify-start pb-[14.59px] sm:pr-5 pr-[22.33px] pt-5 w-auto">
                            <Text
                              className="text-indigo-900 text-lg w-auto"
                              size="txtPoppinsMedium18Indigo900"
                            >
                              <span className="text-indigo-900 font-poppins text-left font-medium">
                                Customers{" "}
                              </span>
                              <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                                | This Year
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start sm:pr-5 pr-[21px] w-full">
                            <div className="bg-orange-50 h-16 rounded-[50%] w-16"></div>
                            <div className="flex flex-col gap-[2.59px] items-start justify-start pl-4 pr-[3.81px] w-auto">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-900 w-auto"
                                size="txtNunitoBold28Indigo900"
                              >
                                1244
                              </Text>
                              <Text
                                className="text-red-600 text-sm w-auto"
                                size="txtOpenSansBold14Red600"
                              >
                                <span className="text-red-600 font-opensans text-left font-bold">
                                  12%{" "}
                                </span>
                                <span className="text-gray-600 font-opensans text-left font-normal">
                                  decrease
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] shadow-bs2 w-full">
                      <div className="flex flex-col gap-2 items-start justify-start pb-[35px] px-5 rounded-[5px] w-auto md:w-full">
                        <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[595px] pt-5 w-auto md:w-full">
                          <Text
                            className="text-indigo-900 text-lg w-auto"
                            size="txtPoppinsMedium18Indigo900"
                          >
                            <span className="text-indigo-900 font-poppins text-left font-medium">
                              Reports{" "}
                            </span>
                            <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                              /Today
                            </span>
                          </Text>
                        </div>
                        <div className="flex flex-col font-inter items-center justify-start w-full">
                          <div className="md:h-[322px] h-[350px] pl-1.5 py-1.5 relative w-full">
                            <div className="absolute inset-x-[0] mx-auto overflow-x-auto top-[2%] w-[97%]">
                              <div className="md:h-[317px] h-[322px] relative w-full">
                                <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[1%] w-[93%]">
                                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                                    <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                                      <div className="bg-gray-300 h-1.5 w-[1%]"></div>
                                      <div className="bg-gray-300 h-1.5 w-[1%]"></div>
                                      <div className="bg-gray-300 h-1.5 w-[1%]"></div>
                                      <div className="bg-gray-300 h-1.5 w-[1%]"></div>
                                      <div className="bg-gray-300 h-1.5 w-[1%]"></div>
                                      <div className="bg-gray-300 h-1.5 w-[1%]"></div>
                                      <div className="bg-gray-300 h-1.5 w-[1%]"></div>
                                    </div>
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-row items-center justify-between w-full">
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          00:00
                                        </Text>
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          01:00
                                        </Text>
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          02:00
                                        </Text>
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          03:00
                                        </Text>
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          04:00
                                        </Text>
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          05:00
                                        </Text>
                                        <Text
                                          className="text-center text-gray-800 text-xs"
                                          size="txtInterRegular12"
                                        >
                                          06:00
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="h-[269px] m-auto"
                                  src="images/img_svgjsg1082.svg"
                                  alt="svgjsg1082"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[23px] sm:px-5 w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group1.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[271px]"
                                    src="images/img_svgjsg1085.svg"
                                    alt="svgjsg1085"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-col items-center justify-start left-[2%] top-[6%] w-[3%]">
                              <div className="flex flex-col gap-10 items-start justify-start w-full">
                                <Text
                                  className="text-[11px] text-gray-800 text-right"
                                  size="txtInterRegular11"
                                >
                                  100
                                </Text>
                                <Text
                                  className="h-3.5 md:ml-[0] ml-[5px] text-[11px] text-gray-800 text-right"
                                  size="txtInterRegular11"
                                >
                                  80
                                </Text>
                                <Text
                                  className="h-3.5 md:ml-[0] ml-[5px] text-[11px] text-gray-800 text-right"
                                  size="txtInterRegular11"
                                >
                                  60
                                </Text>
                                <Text
                                  className="h-3.5 md:ml-[0] ml-[5px] text-[11px] text-gray-800 text-right"
                                  size="txtInterRegular11"
                                >
                                  40
                                </Text>
                                <Text
                                  className="h-3.5 md:ml-[0] ml-[5px] text-[11px] text-gray-800 text-right"
                                  size="txtInterRegular11"
                                >
                                  20
                                </Text>
                                <Text
                                  className="ml-3 md:ml-[0] text-[11px] text-gray-800 text-right"
                                  size="txtInterRegular11"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] shadow-bs2 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start pb-5 px-5 rounded-[5px] w-auto md:w-full">
                      <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[548px] pt-5 w-auto md:w-full">
                        <Text
                          className="text-indigo-900 text-lg w-auto"
                          size="txtPoppinsMedium18Indigo900"
                        >
                          <span className="text-indigo-900 font-poppins text-left font-medium">
                            Recent Absence{" "}
                          </span>
                          <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                            | Today
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col font-opensans items-start justify-start pb-[7px] w-full">
                        <div className="flex flex-row sm:gap-10 gap-[353.91px] items-start justify-between pb-2.5 w-auto md:w-full">
                          <div className="flex flex-row items-center justify-start pr-[3.09px] w-auto">
                            <div className="bg-gray-200 border border-gray-600_03 border-solid flex flex-col items-start justify-start pl-[11px] sm:pr-5 pr-[23px] py-[7px] w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-black-900 text-sm w-auto"
                                  size="txtOpenSansRegular14Black900"
                                >
                                  10
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-gray-800 text-sm w-auto"
                              size="txtOpenSansRegular14Gray800"
                            >
                              entries per page
                            </Text>
                          </div>
                          <Input
                            name="input"
                            placeholder="Search..."
                            className="leading-[normal] p-0 placeholder:text-gray-600_02 text-left text-sm w-full"
                            wrapClassName="rounded-sm"
                            shape="round"
                            color="gray_600_03"
                            size="md"
                            variant="outline"
                          ></Input>
                        </div>
                        <div className="border-b border-blue_gray-100_01 border-solid flex flex-col items-start justify-start pb-[17px] w-auto md:w-full">
                          <div className="flex flex-col items-start justify-start max-w-[720px] w-full">
                            <div className="bg-gray-50_01 flex flex-col items-center justify-start px-2 w-full">
                              <div className="flex md:flex-col flex-row gap-5 items-center justify-center px-2.5 py-2 w-full">
                                <div className="flex flex-col items-center justify-start md:pr-10 sm:pr-5 pr-[48.88px] w-[49px]">
                                  <Text
                                    className="text-gray-900 text-sm w-auto"
                                    size="txtOpenSansBold14Gray900"
                                  >
                                    #
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[83.75px] w-[137px]">
                                  <Text
                                    className="text-gray-900 text-sm w-auto"
                                    size="txtOpenSansBold14Gray900"
                                  >
                                    Student name
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start md:pr-10 sm:pr-5 pr-[212.61px] w-[150px]">
                                  <Text
                                    className="text-gray-900 text-sm w-auto"
                                    size="txtOpenSansBold14Gray900"
                                  >
                                    Subject
                                  </Text>
                                </div>
                                <List
                                  className="md:flex-1 sm:flex-col flex-row gap-5 grid grid-cols-2 w-[43%] md:w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col items-center justify-start pr-[15.89px] w-full">
                                    <Text
                                      className="text-gray-900 text-sm w-auto"
                                      size="txtOpenSansBold14Gray900"
                                    >
                                      Price
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[43.88px] w-full">
                                    <Text
                                      className="text-gray-900 text-sm w-auto"
                                      size="txtOpenSansBold14Gray900"
                                    >
                                      Status
                                    </Text>
                                  </div>
                                </List>
                              </div>
                            </div>
                            <List
                              className="flex flex-col items-start w-auto"
                              orientation="vertical"
                            >
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-1.5 w-full">
                                <Text
                                  className="sm:ml-[0] ml-[3px] text-gray-900 text-sm"
                                  size="txtOpenSansBold14Gray900"
                                >
                                  #1
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[63px] sm:mt-0 my-0.5 text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  Brandon Jacob
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[76px] sm:mt-0 mt-[3px] text-blue-A400 text-sm"
                                  size="txtOpenSansRegular14BlueA400"
                                >
                                  Requirement Engineering
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[121px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  $64
                                </Text>
                                <Text
                                  className="bg-teal-700 justify-center sm:ml-[0] ml-[45px] sm:mt-0 mt-1 px-1.5 rounded-md text-[10.5px] text-center text-white-A700 w-auto"
                                  size="txtOpenSansBold105"
                                >
                                  Approved
                                </Text>
                              </div>
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2 w-full">
                                <Text
                                  className="ml-0.5 sm:ml-[0] text-gray-900 text-sm"
                                  size="txtOpenSansBold14Gray900"
                                >
                                  #2
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[60px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  Bridie Kessler
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[83px] text-blue-A400 text-sm"
                                  size="txtOpenSansRegular14BlueA400"
                                >
                                  Requirement Engineering
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[121px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  $47
                                </Text>
                                <Text
                                  className="bg-amber-500 justify-center sm:ml-[0] ml-[45px] sm:mt-0 mt-[3px] px-1.5 py-[3px] rounded-md text-[10.5px] text-center text-white-A700 w-auto"
                                  size="txtOpenSansBold105"
                                >
                                  Pending
                                </Text>
                              </div>
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2 w-full">
                                <Text
                                  className="ml-0.5 sm:ml-[0] text-gray-900 text-sm"
                                  size="txtOpenSansBold14Gray900"
                                >
                                  #12
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[52px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  Ashleigh Langosh
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[58px] text-blue-A400 text-sm"
                                  size="txtOpenSansRegular14BlueA400"
                                >
                                  At recusandae consectetur
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[113px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  $147
                                </Text>
                                <Text
                                  className="bg-teal-700 justify-center sm:ml-[0] ml-[37px] sm:mt-0 mt-[3px] px-1.5 py-[3px] rounded-md text-[10.5px] text-center text-white-A700 w-auto"
                                  size="txtOpenSansBold105"
                                >
                                  Approved
                                </Text>
                              </div>
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2 w-full">
                                <Text
                                  className="ml-0.5 sm:ml-[0] text-gray-900 text-sm"
                                  size="txtOpenSansBold14Gray900"
                                >
                                  #33
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[52px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  Angus Grady
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[88px] text-indigo-A400 text-sm"
                                  size="txtOpenSansRegular14IndigoA400"
                                >
                                  Ut voluptatem id earum et
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[115px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  $67
                                </Text>
                                <Text
                                  className="bg-red-600 justify-center sm:ml-[0] ml-[45px] sm:mt-0 my-0.5 px-1.5 py-[3px] rounded-md text-[10.5px] text-center text-white-A700 w-auto"
                                  size="txtOpenSansBold105"
                                >
                                  Rejected
                                </Text>
                              </div>
                              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2 w-full">
                                <Text
                                  className="ml-0.5 sm:ml-[0] text-gray-900 text-sm"
                                  size="txtOpenSansBold14Gray900"
                                >
                                  #3
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[60px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  Raheem Lehner
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[68px] text-blue-A400 text-sm"
                                  size="txtOpenSansRegular14BlueA400"
                                >
                                  Sunt similique distinctio
                                </Text>
                                <Text
                                  className="sm:ml-[0] ml-[132px] text-gray-900 text-sm"
                                  size="txtOpenSansRegular14"
                                >
                                  $165
                                </Text>
                                <Text
                                  className="bg-teal-700 justify-center sm:ml-[0] ml-[37px] sm:mt-0 mt-[3px] px-1.5 py-[3px] rounded-md text-[10.5px] text-center text-white-A700 w-auto"
                                  size="txtOpenSansBold105"
                                >
                                  Approved
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                        <Text
                          className="mt-[17px] text-gray-800 text-sm"
                          size="txtOpenSansRegular14Gray800"
                        >
                          Showing 1 to 5 of 5 entries
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start pb-3 pl-3 w-[35%] md:w-full">
                <div className="h-[436px] md:h-[446px] relative w-full">
                  <div className="bg-white-A700 h-[436px] my-auto rounded-[5px] shadow-bs2 w-[93%]"></div>
                  <div className="absolute flex flex-col gap-2 h-full inset-[0] items-start justify-start m-auto pb-5 px-5 w-auto">
                    <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[137px] pt-5 w-auto sm:w-full">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsMedium18Indigo900"
                      >
                        <span className="text-indigo-900 font-poppins text-left font-medium">
                          Recent Notifications{" "}
                        </span>
                        <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                          | Today
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col font-opensans items-start justify-start w-auto">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                          <div className="h-[62px] relative w-1/4">
                            <div className="absolute flex flex-row gap-[26px] h-full inset-y-[0] items-start justify-between left-[0] my-auto pb-[41px] pr-[19px] w-auto">
                              <Text
                                className="text-blue_gray-400 text-sm w-auto"
                                size="txtOpenSansRegular14Bluegray400"
                              >
                                32 min
                              </Text>
                              <Line className="bg-blue-50 h-[57px] w-1" />
                            </div>
                            <div className="absolute border-[3px] border-solid border-white-A700 h-[17px] right-[0] rounded-lg top-[5%] w-[17px]"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start pb-5 pl-2.5 pr-[4.38px] w-auto">
                            <Text
                              className="leading-[21.00px] max-w-[232px] md:max-w-full text-gray-800 text-sm"
                              size="txtOpenSansRegular14Gray800"
                            >
                              <span className="text-gray-800 font-opensans text-left font-normal">
                                Quia quae rerum{" "}
                              </span>
                              <span className="text-gray-900 font-opensans text-left font-bold">
                                explicabo officiis
                              </span>
                              <span className="text-gray-800 font-opensans text-left font-normal">
                                {" "}
                                beatae
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-start justify-start sm:pr-5 pr-[34px] w-full">
                          <div className="h-[62px] relative w-[28%]">
                            <div className="absolute flex flex-row gap-[26px] h-full inset-y-[0] items-start justify-between left-[0] my-auto pb-[41px] pr-[19px] w-auto">
                              <Text
                                className="text-blue_gray-400 text-sm w-auto"
                                size="txtOpenSansRegular14Bluegray400"
                              >
                                56 min
                              </Text>
                              <Line className="bg-blue-50 h-[62px] w-1" />
                            </div>
                            <div className="absolute border-[3px] border-solid border-white-A700 h-[17px] right-[0] rounded-lg top-[5%] w-[17px]"></div>
                          </div>
                          <Text
                            className="sm:flex-1 leading-[21.00px] text-gray-800 text-sm w-[69%] sm:w-full"
                            size="txtOpenSansRegular14Gray800"
                          >
                            Voluptatem blanditiis blanditiis eveniet
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[45px] w-full">
                          <div className="h-[62px] relative w-[29%]">
                            <div className="absolute flex flex-row gap-[38px] h-full inset-y-[0] items-start justify-between left-[0] my-auto pb-[41px] sm:pr-5 pr-[31px] w-auto">
                              <Text
                                className="text-blue_gray-400 text-sm w-auto"
                                size="txtOpenSansRegular14Bluegray400"
                              >
                                2 hrs
                              </Text>
                              <Line className="bg-blue-50 h-[62px] w-1" />
                            </div>
                            <div className="absolute border-[3px] border-solid border-white-A700 h-[17px] right-[0] rounded-lg top-[5%] w-[17px]"></div>
                          </div>
                          <Text
                            className="sm:flex-1 leading-[21.00px] text-gray-800 text-sm w-[68%] sm:w-full"
                            size="txtOpenSansRegular14Gray800"
                          >
                            Voluptates corrupti molestias voluptatem
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-evenly w-full">
                          <div className="h-[62px] relative w-1/4">
                            <div className="absolute flex flex-row gap-[35px] h-full inset-y-[0] items-start justify-between left-[0] my-auto pb-[41px] sm:pr-5 pr-7 w-auto">
                              <Text
                                className="text-blue_gray-400 text-sm w-auto"
                                size="txtOpenSansRegular14Bluegray400"
                              >
                                1 day
                              </Text>
                              <Line className="bg-blue-50 h-[62px] w-1" />
                            </div>
                            <div className="absolute border-[3px] border-solid border-white-A700 h-[17px] right-[0] rounded-lg top-[5%] w-[17px]"></div>
                          </div>
                          <div className="flex flex-col items-start justify-start pb-5 pl-2.5 sm:pr-5 pr-[20.07px] w-auto">
                            <Text
                              className="leading-[21.00px] max-w-[216px] md:max-w-full text-gray-800 text-sm"
                              size="txtOpenSansRegular14Gray800"
                            >
                              <span className="text-gray-800 font-opensans text-left font-normal">
                                Tempore autem saepe{" "}
                              </span>
                              <span className="text-gray-900 font-opensans text-left font-bold">
                                occaecati voluptatem
                              </span>
                              <span className="text-gray-800 font-opensans text-left font-normal">
                                {" "}
                                tempore
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                          <div className="h-[61px] md:h-[62px] relative w-[36%]">
                            <div className="absolute flex flex-row gap-[29px] h-max inset-y-[0] items-start justify-between left-[0] my-auto pb-[41px] sm:pr-5 pr-[22px] w-auto">
                              <Text
                                className="text-blue_gray-400 text-sm w-auto"
                                size="txtOpenSansRegular14Bluegray400"
                              >
                                2 days
                              </Text>
                              <Line className="bg-blue-50 h-[62px] w-1" />
                            </div>
                            <div className="absolute border-[3px] border-solid border-white-A700 h-[17px] right-[0] rounded-lg top-[5%] w-[17px]"></div>
                          </div>
                          <Text
                            className="sm:flex-1 leading-[21.00px] text-gray-800 text-sm w-3/5 sm:w-full"
                            size="txtOpenSansRegular14Gray800"
                          >
                            Est sit eum reiciendis exercitationem
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-start pr-2 w-full">
                          <div className="h-[42px] relative w-[26%]">
                            <div className="absolute flex flex-row gap-[18px] h-full inset-y-[0] items-start justify-between left-[0] my-auto pb-[21px] pr-[11px] w-auto">
                              <Text
                                className="text-blue_gray-400 text-sm w-auto"
                                size="txtOpenSansRegular14Bluegray400"
                              >
                                4 weeks
                              </Text>
                              <Line className="bg-blue-50 h-[42px] w-1" />
                            </div>
                            <div className="absolute border-[3px] border-solid border-white-A700 h-[17px] right-[0] rounded-lg top-[7%] w-[17px]"></div>
                          </div>
                          <Text
                            className="sm:flex-1 leading-[21.00px] text-gray-800 text-sm w-[72%] sm:w-full"
                            size="txtOpenSansRegular14Gray800"
                          >
                            Dicta dolorem harum nulla eius. Ut quidem quidem sit
                            quas
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="md:h-[1018px] h-[464px] mb-[141px] relative w-full">
                  <div className="bg-white-A700 h-[464px] my-auto rounded-[5px] shadow-bs2 w-[93%]"></div>
                  <div className="absolute flex flex-col gap-2 h-full inset-[0] items-start justify-start m-auto pb-[408px] px-5 w-auto">
                    <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[110px] pt-5 w-auto">
                      <Text
                        className="text-indigo-900 text-lg w-auto"
                        size="txtPoppinsMedium18Indigo900"
                      >
                        <span className="text-indigo-900 font-poppins text-left font-medium">
                          Attendance Report{" "}
                        </span>
                        <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                          | This Month
                        </span>
                      </Text>
                    </div>
                    <Img
                      className="h-[400px] md:h-auto object-cover w-[328px]"
                      src="images/img_image.png"
                      alt="image"
                    />
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

export default DashboardTwoPage;
