import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import LoginHeaderheader from "components/LoginHeaderheader";
import Sidebar2 from "components/Sidebar2";

const TeacherPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-50 font-roboto h-[900px] mx-auto relative w-full">
        <div className="bg-white-A700 flex flex-col h-full items-center justify-start max-w-[1200px] ml-auto mr-20 my-auto p-4 md:px-5 rounded-lg w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between pb-[14.59px] pt-5 w-full">
              <Text
                className="text-indigo-900 text-lg w-auto"
                size="txtPoppinsMedium18Indigo900"
              >
                Current Teachers
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
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-4/5 md:w-full"
                orientation="horizontal"
              >
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Teacher name
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Address
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Enail
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Username
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[158.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    Password
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
                  Manag Lama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Dolpa
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  maan@gmail.com
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  @malama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  molamo
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
                  Manag Lama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Dolpa
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  maan@gmail.com
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  @malama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  molamo
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight_One"
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
                  Manag Lama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Dolpa
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  maan@gmail.com
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  @malama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  molamo
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
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
                  Manag Lama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Dolpa
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  maan@gmail.com
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  @malama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  molamo
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight_Three"
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
                  Manag Lama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Dolpa
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  maan@gmail.com
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  @malama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  molamo
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight_Four"
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
                  Manag Lama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Dolpa
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  maan@gmail.com
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  @malama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  molamo
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight_Five"
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
                  Manag Lama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  Dolpa
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  maan@gmail.com
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  @malama
                </Text>
                <Text
                  className="flex-1 text-[13px] text-gray-600_01 w-auto"
                  size="txtRobotoRegular13Gray60001"
                >
                  molamo
                </Text>
                <Img
                  className="flex-1 h-6 max-h-6 sm:w-[]"
                  src="images/img_frame8.svg"
                  alt="frameEight_Six"
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
          <div className="absolute md:h-10 h-[52px] pr-0.5 right-[5%] top-[12%] w-[73%] md:w-full">
            <div className="absolute font-nunito md:h-[33px] h-[52px] inset-[0] justify-center m-auto w-[96%] md:w-full">
              <Text
                className="absolute left-[0] text-2xl md:text-[22px] text-indigo-A400 sm:text-xl top-[0]"
                size="txtNunitoSemiBold24"
              >
                Teacher
              </Text>
              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[1030px] w-full">
                <Text
                  className="text-gray-500 text-sm"
                  size="txtNunitoSemiBold14"
                >
                  Manage
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
                    Teacher{" "}
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer absolute cursor-pointer font-roboto h-10 leading-[normal] right-[4%] rounded-lg text-center text-xs top-[8%] w-[90px]"
              onClick={() => navigate("/teacheraddteacher")}
              color="blue_A400"
              size="md"
              variant="fill"
            >
              Add teacher
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherPage;
