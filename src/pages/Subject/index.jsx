import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import LoginHeaderheader from "components/LoginHeaderheader";
import Sidebar2 from "components/Sidebar2";

const SubjectPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-50 font-roboto h-[900px] mx-auto relative w-full">
        <div className="bg-white-A700 flex flex-col h-full items-center justify-start max-w-[1200px] ml-auto mr-20 mt-[196px] p-4 md:px-5 rounded-lg w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between pb-[14.59px] pt-5 w-full">
              <Text
                className="text-indigo-900 text-lg w-auto"
                size="txtPoppinsMedium18Indigo900"
              >
                Current Subjects
              </Text>
              <Input
                name="input"
                placeholder="Search..."
                className="font-opensans leading-[normal] p-0 placeholder:text-gray-600_02 text-left text-sm w-full"
                wrapClassName="rounded-sm"
                shape="round"
                color="gray_600_03"
                size="md"
                variant="outline"
              ></Input>
            </div>
            <div className="bg-gray-50_01 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[76.22px] pt-[9px] w-[58px]">
                <Text
                  className="text-[13px] text-gray-800 w-auto"
                  size="txtRobotoBold13"
                >
                  #
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[77%] md:w-full"
                orientation="horizontal"
              >
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Subject name
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Course
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Semester
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Assigned Teacher
                  </Text>
                </div>
              </List>
              <Text
                className="border-b-2 border-gray-300_af border-solid flex-1 pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-800 w-full"
                size="txtRobotoBold13"
              >
                Action
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start px-2 py-2.5 w-full">
                <Text
                  className="text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  1
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01"
                  size="txtRobotoRegular13Gray60001"
                >
                  C programming
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  BIT
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  First
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Manag lama
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start px-2 py-2.5 w-full">
                <Text
                  className="text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  1
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01"
                  size="txtRobotoRegular13Gray60001"
                >
                  Digital Logic
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  BIT
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  First
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Prakash Rai
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight_One"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-start justify-start px-2 py-2.5 w-full">
                <Text
                  className="text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  1
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01"
                  size="txtRobotoRegular13Gray60001"
                >
                  OOP
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  BIT
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  First
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Manag lama
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6"
                  src="images/img_frame8.svg"
                  alt="frameEight_Two"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start px-2 py-2.5 w-full">
                <Text
                  className="text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  1
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01"
                  size="txtRobotoRegular13Gray60001"
                >
                  Data Structure
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  BIT
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Second
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  --
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight_Three"
                />
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
          <div className="absolute flex right-[4%] top-[11%] w-[73%] md:w-full">
            <div className="font-nunito md:h-[33px] h-[50px] my-auto w-[96%] md:w-full">
              <Text
                className="absolute left-[0] text-2xl md:text-[22px] text-indigo-A400 sm:text-xl top-[0]"
                size="txtNunitoSemiBold24"
              >
                Subject
              </Text>
              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[1032px] w-full">
                <Text
                  className="text-gray-500 text-sm"
                  size="txtNunitoSemiBold14"
                >
                  Manage{" "}
                </Text>
                <div className="flex flex-row gap-[7.17px] items-start justify-start pl-2 w-auto">
                  <Text
                    className="text-gray-500 text-sm w-auto"
                    size="txtNunitoSemiBold14"
                  >
                    /
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtNunitoSemiBold14Black900"
                  >
                    Subject
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-roboto h-10 leading-[normal] ml-[-42px] my-auto rounded-lg text-center text-xs w-[90px] z-[1]"
              onClick={() => navigate("/subjectaddsubjectone")}
              color="blue_A400"
              size="md"
              variant="fill"
            >
              Add Subject
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectPage;
