import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const AttendancesheetPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-start max-w-[1648px] px-5 py-[9px] shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto md:px-5 w-full">
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
          <div className="flex md:flex-col flex-row font-opensans md:gap-10 gap-[92px] items-start justify-start md:px-5 w-[96%] md:w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[300px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto shadow-bs1 top-[0]"
            >
              <Text
                className="ml-5 md:ml-[0] mr-[245px] mt-[21px] text-[11px] text-blue_gray-300 uppercase w-auto"
                size="txtOpenSansSemiBold11"
              >
                Track
              </Text>
              <Text
                className="ml-5 md:ml-[0] mr-[231px] mt-[46px] text-[11px] text-blue_gray-300 uppercase w-auto"
                size="txtOpenSansSemiBold11"
              >
                ANalyze
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
                leftIcon={
                  <Img
                    className="h-[26px] mr-1.5"
                    src="images/img_materialsymbolstablechartviewoutlinerounded.svg"
                    alt="material-symbols:table-chart-view-outline-rounded"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <div className="font-semibold text-[15px] text-left">
                  Dashboard
                </div>
              </Button>
              <Button
                className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
                onClick={() => navigate("/reportsone")}
                leftIcon={
                  <Img
                    className="h-[26px] mb-px mr-[7px]"
                    src="images/img_carbonreport.svg"
                    alt="carbon:report"
                  />
                }
                shape="round"
                color="white_A700"
                size="sm"
                variant="fill"
              >
                <div className="font-semibold text-[15px] text-left">
                  Report
                </div>
              </Button>
              <Text
                className="ml-5 md:ml-[0] mr-[232px] text-[11px] text-blue_gray-300 uppercase w-auto"
                size="txtOpenSansSemiBold11"
              >
                Manage
              </Text>
              <Text
                className="ml-5 md:ml-[0] mr-[185px] mt-[46px] text-[11px] text-blue_gray-300 uppercase w-auto"
                size="txtOpenSansSemiBold11"
              >
                Chal chla nikal
              </Text>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "9px ",
                    paddingLeft: "10px",
                    paddingRight: "9px",
                    gap: "7px",
                    margin: " ",
                    color: "#012970",
                    fontWeight: 600,
                    fontSize: "15px",
                    borderRadius: "4px",
                    [`&:hover, &.ps-active`]: {
                      color: "#4154f1",
                      backgroundColor: "#f6f9ffff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[771px] pt-[11px] px-5 w-[87%]"
              >
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_file.svg"
                      alt="file"
                    />
                  }
                  active={window.location.pathname === "/attendancesheet"}
                  href="/attendancesheet"
                >
                  <Text>Attendance Sheet</Text>
                </MenuItem>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col font-nunito gap-[26px] items-center justify-start md:mt-0 mt-[21px] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-indigo-A400 sm:text-xl"
                  size="txtNunitoSemiBold24"
                >
                  Attendance
                </Text>
                <div className="flex flex-row items-start justify-start md:pr-10 sm:pr-5 pr-[1019px] w-[99%] md:w-full">
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtNunitoSemiBold14"
                  >
                    Teack
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
                      Attendance
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-col flex-row gap-6 items-end justify-start max-w-[1175px] px-4 py-[26px] rounded-[5px] w-full">
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
                <Button
                  className="common-pointer cursor-pointer font-roboto h-10 leading-[normal] rounded-lg text-center text-xs w-[102px]"
                  onClick={() => navigate("/attendancesheetgeneratesheet")}
                  color="indigo_A400"
                  size="md"
                  variant="fill"
                >
                  Generate Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendancesheetPage;
