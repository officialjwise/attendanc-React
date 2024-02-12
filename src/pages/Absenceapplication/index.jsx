import React from "react";

import { Button, Img, Input, List, Text } from "components";
import AbsenceApplicationUserdetails from "components/AbsenceApplicationUserdetails";
import AbsenceApplicationUserdetails1 from "components/AbsenceApplicationUserdetails1";
import LoginHeaderheader from "components/LoginHeaderheader";
import Sidebar3 from "components/Sidebar3";

const AbsenceapplicationPage = () => {
  return (
    <>
      <div className="bg-gray-50 font-opensans h-[900px] mx-auto relative w-full">
        <Sidebar3 className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden inset-y-[0] justify-start left-[0] overflow-auto md:px-5 shadow-bs1" />
        <div className="absolute flex flex-col font-nunito gap-7 items-center justify-start md:px-5 right-[4%] top-[11%] w-[74%]">
          <div className="flex flex-col gap-[38px] items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
                size="txtNunitoSemiBold24"
              >
                Absence
              </Text>
              <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[1024px] w-[95%] md:w-full">
                <Text
                  className="mt-0.5 text-gray-500 text-sm"
                  size="txtNunitoSemiBold14"
                >
                  Analyse
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
                    Absence
                  </Text>
                </div>
              </div>
            </div>
            <AbsenceApplicationUserdetails className="bg-white-A700 flex flex-col font-poppins items-start justify-start max-w-[1213px] p-4 rounded-lg w-full" />
          </div>
          <AbsenceApplicationUserdetails1 className="bg-white-A700 flex flex-col font-poppins items-start justify-start max-w-[1213px] p-4 rounded-lg w-full" />
        </div>
        <LoginHeaderheader
          className="absolute bg-white-A700 flex flex-row font-nunito inset-x-[0] items-center justify-start max-w-[1648px] mx-auto px-5 py-[9px] shadow-bs top-[0] w-full"
          dynamicimage="images/img_a.svg"
          dynamiccircleimage="images/img_profileimgjpg.png"
          dynamictext="Peterpan"
        />
      </div>
    </>
  );
};

export default AbsenceapplicationPage;
