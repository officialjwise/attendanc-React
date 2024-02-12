import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Sidebar2 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mt-5 mx-5"
          onClick={() => navigate("/dashboardone")}
          leftIcon={
            <Img
              className="h-[26px] mr-2"
              src="images/img_materialsymbolstablechartviewoutlinerounded.svg"
              alt="material-symbols:table-chart-view-outline-rounded"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Dashboard
          </div>
        </Button>
        <Text
          className="ml-5 md:ml-[0] mr-[232px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          ANALYSE
        </Text>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          leftIcon={
            <Img className="h-6 mr-2" src="images/img_file.svg" alt="file" />
          }
          shape="round"
          color="gray_50"
          size="sm"
          variant="fill"
        >
          <div className="!text-indigo-A400 font-opensans font-semibold text-[15px] text-left">
            Attendance
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/absenceapplication")}
          leftIcon={
            <Img
              className="h-6 mr-2"
              src="images/img_charmnotescross.svg"
              alt="charm:notes-cross"
            />
          }
          size="sm"
        >
          <div className="font-opensans font-semibold text-[15px] text-indigo-900 text-left">
            Absence
          </div>
        </Button>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/reports")}
          leftIcon={
            <Img
              className="h-[26px] mr-2"
              src="images/img_carbonreport.svg"
              alt="carbon:report"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Report
          </div>
        </Button>
        <Text
          className="ml-5 md:ml-[0] mr-[232px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          Manage
        </Text>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/teacher")}
          leftIcon={
            <div className="mr-2 bg-indigo-900">
              <Img src="images/img_television.svg" alt="television" />
            </div>
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Teacher
          </div>
        </Button>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/studentone")}
          leftIcon={
            <Img
              className="h-[26px] mr-2"
              src="images/img_thumbsup.svg"
              alt="thumbs_up"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Student
          </div>
        </Button>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/subject")}
          leftIcon={
            <Img
              className="h-[26px] mb-px mr-[7px]"
              src="images/img_icroundmenubook.svg"
              alt="ic:round-menu-book"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Subject
          </div>
        </Button>
        <Text
          className="ml-5 md:ml-[0] mr-[185px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          Chal chla nikal
        </Text>
        <div className="bg-white-A700 flex flex-row gap-2 items-center justify-start mb-[431px] md:ml-[0] mx-5 px-2.5 py-[9px] rounded w-[260px]">
          <Img
            className="h-[19px] w-[19px]"
            src="images/img_iconparkoutlinelogout.svg"
            alt="iconparkoutline"
          />
          <Text
            className="text-[15px] text-indigo-900 w-auto"
            size="txtOpenSansSemiBold15"
          >
            Logout
          </Text>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
