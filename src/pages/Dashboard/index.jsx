import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-gray-50 font-nunito h-[900px] mx-auto relative w-full">
        <div className="flex flex-col gap-[35px] h-full items-center justify-start ml-auto mr-14 my-auto md:px-5 w-[70%]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
              size="txtNunitoSemiBold24"
            >
              Dashboard
            </Text>
            <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[1023px] w-full">
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
          <div className="flex md:flex-col flex-row font-poppins gap-5 items-start justify-between w-[98%] md:w-full">
            <div className="flex flex-col gap-14 items-center justify-start w-[68%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col items-center justify-center sm:ml-[0] rounded-[5px] shadow-bs2 w-[212px]">
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
                    <div className="flex flex-row items-start justify-start w-full">
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
                <div className="bg-white-A700 flex flex-col items-center justify-center sm:ml-[0] rounded-[5px] shadow-bs2 w-[230px]">
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
                    <div className="flex flex-row items-start justify-start pr-[18px] w-full">
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
                <div className="bg-white-A700 flex flex-col items-center justify-center sm:ml-[0] rounded-[5px] shadow-bs2 w-[252px]">
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
                    <div className="flex flex-row items-start justify-start pr-10 sm:pr-5 w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[5px] shadow-bs2 w-full">
                <div className="flex flex-col gap-2 items-start justify-start pb-[35px] px-5 rounded-[5px] w-auto md:w-full">
                  <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[595px] pt-5 w-auto md:w-full">
                    <Text
                      className="text-lg text-teal-A400 w-auto"
                      size="txtPoppinsMedium18"
                    >
                      <span className="text-indigo-A400 font-poppins text-left font-medium">
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
            <div className="bg-white-A700 flex flex-col items-center justify-start mb-[251px] rounded-[5px] shadow-bs2 w-[31%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-center px-5 w-[348px]">
                <div className="flex flex-col items-start justify-start pb-[14.59px] md:pr-10 sm:pr-5 pr-[110px] pt-5 w-full">
                  <Text
                    className="text-lg text-teal-A400 w-auto"
                    size="txtPoppinsMedium18"
                  >
                    <span className="text-indigo-A400 font-poppins text-left font-medium">
                      Attendance Report
                    </span>
                    <span className="text-teal-A400 font-poppins text-left font-medium">
                      {" "}
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
        <div className="absolute font-opensans md:h-[841px] h-[899px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar1 className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto shadow-bs1" />
          <div className="absolute bg-white-A700 flex flex-row font-nunito inset-x-[0] items-center justify-start max-w-[1648px] mx-auto px-5 py-[9px] shadow-bs top-[0] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start py-2 w-auto">
                <div className="flex flex-col items-start justify-start sm:px-5 px-[30px] w-full">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtNunitoBold26"
                  >
                    Attendify
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-row font-opensans gap-[25px] items-center justify-end pr-4 w-full">
                <Img className="h-[35px] w-6" src="images/img_a.svg" alt="a" />
                <Img
                  className="h-[35px] w-6"
                  src="images/img_user.svg"
                  alt="user"
                />
                <div className="flex flex-row items-center justify-center w-[17%]">
                  <Img
                    className="h-9 md:h-auto rounded-[50%] w-9"
                    src="images/img_profileimgjpg.png"
                    alt="profileimgjpg"
                  />
                  <div className="flex flex-col items-start justify-start px-2">
                    <Text
                      className="text-indigo-900 text-sm"
                      size="txtOpenSansSemiBold14"
                    >
                      Praful
                    </Text>
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

export default DashboardPage;
