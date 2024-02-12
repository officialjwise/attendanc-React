import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import LoginHeaderheader from "components/LoginHeaderheader";
import Sidebar2 from "components/Sidebar2";

const DashboardOnePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex font-nunito h-[900px] justify-end mx-auto relative w-full">
        <div className="flex flex-col gap-[45px] h-full items-center justify-start mb-[23px] ml-auto mr-[67px] mt-auto md:px-5 w-[74%]">
          <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
              size="txtNunitoSemiBold24"
            >
              Dashboard
            </Text>
            <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[1023px] w-[96%] md:w-full">
              <Text
                className="text-gray-500 text-sm"
                size="txtNunitoSemiBold14"
              >
                Home
              </Text>
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
                  Dashboard
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-[43px] items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start md:mt-0 mt-0.5 w-[67%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[802px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-2 items-center justify-center pb-5 px-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[92.33px] pt-5 w-full">
                      <Text
                        className="text-lg text-teal-A400 w-auto"
                        size="txtPoppinsMedium18"
                      >
                        <span className="text-indigo-A400 font-poppins text-left font-medium">
                          Present
                        </span>
                        <span className="text-teal-A400 font-poppins text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                          | Today
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[45px] w-full">
                      <div className="bg-gray-50_01 h-16 rounded-[50%] w-16"></div>
                      <div className="flex flex-col gap-[2.59px] items-start justify-start pl-4 pr-[3.52px] w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-A400 w-auto"
                          size="txtNunitoBold28"
                        >
                          145
                        </Text>
                        <Text
                          className="text-sm text-teal-700 w-auto"
                          size="txtOpenSansBold14"
                        >
                          <span className="text-indigo-900 font-opensans text-left font-bold">
                            12%
                          </span>
                          <span className="text-teal-700 font-opensans text-left font-bold">
                            {" "}
                          </span>
                          <span className="text-gray-600 font-opensans text-left font-normal">
                            increase
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-2 items-center justify-center pb-5 px-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[92.33px] pt-5 w-full">
                      <Text
                        className="text-lg text-teal-A400 w-auto"
                        size="txtPoppinsMedium18"
                      >
                        <span className="text-indigo-A400 font-poppins text-left font-medium">
                          Absent
                        </span>
                        <span className="text-teal-A400 font-poppins text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                          | Today
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[45px] w-full">
                      <div className="bg-gray-50_01 h-16 rounded-[50%] w-16"></div>
                      <div className="flex flex-col gap-[2.59px] items-start justify-start pl-4 pr-[3.52px] w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-A400 w-auto"
                          size="txtNunitoBold28"
                        >
                          145
                        </Text>
                        <Text
                          className="text-sm text-teal-700 w-auto"
                          size="txtOpenSansBold14"
                        >
                          <span className="text-indigo-900 font-opensans text-left font-bold">
                            12%
                          </span>
                          <span className="text-teal-700 font-opensans text-left font-bold">
                            {" "}
                          </span>
                          <span className="text-gray-600 font-opensans text-left font-normal">
                            increase
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center rounded-[5px] shadow-bs2 w-full">
                  <div className="flex flex-col gap-2 items-center justify-center pb-5 px-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[92.33px] pt-5 w-full">
                      <Text
                        className="text-lg text-teal-A400 w-auto"
                        size="txtPoppinsMedium18"
                      >
                        <span className="text-indigo-A400 font-poppins text-left font-medium">
                          Attendance{" "}
                        </span>
                        <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                          | This Month
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[45px] w-full">
                      <div className="bg-gray-50_01 h-16 rounded-[50%] w-16"></div>
                      <div className="flex flex-col gap-[2.59px] items-start justify-start pl-4 pr-[3.52px] w-auto">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-indigo-A400 w-auto"
                          size="txtNunitoBold28"
                        >
                          145
                        </Text>
                        <Text
                          className="text-sm text-teal-700 w-auto"
                          size="txtOpenSansBold14"
                        >
                          <span className="text-indigo-900 font-opensans text-left font-bold">
                            12%
                          </span>
                          <span className="text-teal-700 font-opensans text-left font-bold">
                            {" "}
                          </span>
                          <span className="text-gray-600 font-opensans text-left font-normal">
                            increase
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="h-[449px] relative w-full">
                <div className="absolute bg-white-A700 h-[449px] inset-[0] justify-center m-auto rounded-[5px] shadow-bs2 w-full"></div>
                <div className="absolute flex flex-col gap-2 h-full inset-y-[0] items-center justify-start left-[0] my-auto pb-[35px] px-5 w-auto">
                  <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[595px] pt-5 w-auto md:w-full">
                    <Text
                      className="text-lg text-teal-A400 w-auto"
                      size="txtPoppinsMedium18"
                    >
                      <span className="text-teal-A400 font-poppins text-left font-medium">
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
                              backgroundImage: "url('images/img_group1.svg')",
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
            <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-[30%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-center rounded-[5px] shadow-bs2 w-[361px]">
                <div className="flex flex-col gap-2 items-start justify-start pb-5 px-5 rounded-[5px] w-full">
                  <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[137px] pt-5 w-full">
                    <Text
                      className="text-lg text-teal-A400 w-auto"
                      size="txtPoppinsMedium18"
                    >
                      <span className="text-teal-A400 font-poppins text-left font-medium">
                        Recent Activities{" "}
                      </span>
                      <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                        | Today
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col font-opensans items-start justify-start w-full">
                    <List
                      className="flex flex-col gap-px items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row items-start justify-evenly w-full">
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
                            className="text-gray-800 text-sm w-auto"
                            size="txtOpenSansRegular14Gray800"
                          >
                            New teacher created
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-2 items-start justify-start md:pr-10 sm:pr-5 pr-[86px] w-[98%] md:w-full">
                        <div className="h-[62px] relative w-[35%]">
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
                          className="mt-[13px] text-gray-800 text-sm"
                          size="txtOpenSansRegular14Gray800"
                        >
                          Java attendance taken
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-2.5 items-start justify-start md:pr-10 sm:pr-5 pr-[99px] w-[98%] md:w-full">
                        <div className="h-[62px] relative w-[37%]">
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
                          className="mt-[13px] text-gray-800 text-sm"
                          size="txtOpenSansRegular14Gray800"
                        >
                          Absence application{" "}
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-[9px] items-start justify-center px-5 w-[348px]">
                  <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[110px] pt-5 w-full">
                    <Text
                      className="text-lg text-teal-A400 w-auto"
                      size="txtPoppinsMedium18"
                    >
                      <span className="text-teal-A400 font-poppins text-left font-medium">
                        Attendance Report{" "}
                      </span>
                      <span className="text-blue_gray-300 font-poppins text-left text-sm font-normal">
                        | This Month
                      </span>
                    </Text>
                  </div>
                  <Img
                    className="h-[336px] sm:h-auto object-cover w-[348px] md:w-full"
                    src="images/img_image.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute font-opensans md:h-[841px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar2 className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto shadow-bs1" />
          <LoginHeaderheader
            className="absolute bg-white-A700 flex flex-row font-nunito inset-x-[0] items-center justify-start max-w-[1648px] mx-auto px-5 py-[9px] shadow-bs top-[0] w-full"
            dynamicimage="images/img_a.svg"
            dynamiccircleimage="images/img_profileimgjpg.png"
            dynamictext="Peterpan"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardOnePage;
