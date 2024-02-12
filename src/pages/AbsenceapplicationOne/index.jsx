import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import AbsenceApplicationOneUserdetails from "components/AbsenceApplicationOneUserdetails";
import LoginHeaderheader from "components/LoginHeaderheader";
import Sidebar4 from "components/Sidebar4";

const AbsenceapplicationOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 font-poppins h-[900px] mx-auto relative w-full">
        <div className="flex flex-col gap-12 h-full items-center justify-start ml-auto mr-[67px] mt-[104px] md:px-5 w-[74%]">
          <div className="h-[54px] relative w-[99%] md:w-full">
            <div className="absolute flex flex-col font-nunito h-max inset-[0] items-center justify-start m-auto w-auto">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
                  size="txtNunitoSemiBold24"
                >
                  Absence Records
                </Text>
                <div className="flex flex-row items-start justify-start px-[3px] w-full">
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtNunitoSemiBold14"
                  >
                    {" "}
                    Absent Apllication
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
                      Absence Record
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer absolute cursor-pointer font-roboto h-10 leading-[normal] right-[0] rounded-lg text-center text-xs top-[0] w-[108px]"
              onClick={() => navigate("/sendabsentletter")}
              color="blue_A400"
              size="md"
              variant="fill"
            >
              Send application
            </Button>
          </div>
          <AbsenceApplicationOneUserdetails className="bg-white-A700 flex flex-col items-start justify-start max-w-[1217px] p-4 rounded-lg w-full" />
        </div>
        <div className="absolute font-opensans md:h-[841px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar4 className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto shadow-bs1" />
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

export default AbsenceapplicationOnePage;
