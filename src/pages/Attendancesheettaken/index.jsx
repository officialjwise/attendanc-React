import React from "react";

import { Button, Img, List, Text } from "components";
import AttendanceSheetTakenUserdetails from "components/AttendanceSheetTakenUserdetails";
import Sidebar11 from "components/Sidebar11";

const AttendancesheettakenPage = () => {
  return (
    <>
      <div className="bg-gray-50 font-nunito h-[900px] mx-auto relative w-full">
        <div className="flex flex-col h-full items-start justify-start ml-auto mr-14 mt-[81px] md:px-5 w-[70%]">
          <Text
            className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
            size="txtNunitoSemiBold24"
          >
            Attendance
          </Text>
          <div className="flex flex-row items-center justify-start md:pr-10 sm:pr-5 pr-[886px] w-full">
            <Text className="text-gray-500 text-sm" size="txtNunitoSemiBold14">
              Teack
            </Text>
            <div className="md:h-[21px] h-[22px] relative w-[86%]">
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
                  Attendance sheet
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
                  Attendance
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute font-opensans md:h-[841px] h-[899px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar11 className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto shadow-bs1" />
          <div className="absolute flex flex-col font-poppins gap-6 items-center justify-start right-[5%] top-[18%] w-[69%]">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-6 items-end justify-start max-w-[1128px] px-4 py-[26px] rounded-[5px] w-full">
              <div className="font-opensans relative w-[169px]">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid md:h-[19px] h-[58px] mt-auto mx-auto p-[11px] rounded-md w-[98%]">
                  <Img
                    className="absolute h-3 inset-y-[0] my-auto right-[8%] w-3"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <div className="absolute bottom-[19%] flex flex-col inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[42px] w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtOpenSansRegular16"
                    >
                      Advance Java
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col items-start justify-start left-[0] pb-[13px] pl-[11.05px] md:pr-10 sm:pr-5 pr-[89.35px] pt-[12.3px] top-[0] w-auto">
                  <Text
                    className="text-base text-gray-800 w-auto"
                    size="txtOpenSansRegular16Gray800"
                  >
                    Subject
                  </Text>
                </div>
              </div>
              <div className="font-opensans relative w-[169px]">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-row items-center justify-between mt-auto mx-auto p-[11px] rounded-md w-[98%]">
                  <div className="flex flex-col items-start justify-start ml-0.5 mt-4 md:pr-10 sm:pr-5 pr-[42px] w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtOpenSansRegular16"
                    >
                      A
                    </Text>
                  </div>
                  <Img
                    className="h-3 mr-0.5 w-3"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_One"
                  />
                </div>
                <div className="absolute flex flex-col items-start justify-start left-[0] pb-[13px] pl-[11.05px] md:pr-10 sm:pr-5 pr-[89.35px] pt-[12.3px] top-[0] w-auto">
                  <Text
                    className="text-base text-gray-800 w-auto"
                    size="txtOpenSansRegular16Gray800"
                  >
                    Section
                  </Text>
                </div>
              </div>
              <div className="font-opensans relative w-[164px]">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid md:h-5 h-[58px] mt-auto mx-auto p-[11px] rounded-md w-full">
                  <Img
                    className="absolute h-3 inset-y-[0] my-auto right-[8%] w-3"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_Two"
                  />
                  <div className="absolute bottom-[19%] flex flex-col items-start justify-start left-[8%] md:pr-10 sm:pr-5 pr-[42px] w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtOpenSansRegular16"
                    >
                      2023/03/15
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col items-start justify-start left-[2%] pb-[13px] pl-[11.05px] md:pr-10 sm:pr-5 pr-[89.35px] pt-[12.3px] top-[0] w-auto">
                  <Text
                    className="text-base text-gray-800 w-auto"
                    size="txtOpenSansRegular16Gray800"
                  >
                    Date
                  </Text>
                </div>
              </div>
              <Text
                className="bg-indigo-A400 h-10 justify-center px-1 py-3 rounded-lg text-white-A700 text-xs w-[90px]"
                size="txtRobotoRomanRegular12"
              >
                Generate Sheet
              </Text>
            </div>
            <AttendanceSheetTakenUserdetails className="bg-white-A700 flex flex-col items-start justify-start max-w-[1128px] p-4 rounded-lg w-full" />
          </div>
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
                <Img
                  className="h-[35px] w-6"
                  src="images/img_a.svg"
                  alt="a_One"
                />
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

export default AttendancesheettakenPage;
