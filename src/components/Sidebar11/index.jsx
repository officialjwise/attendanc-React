import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Sidebar11 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <Text
          className="ml-5 md:ml-[0] mr-[245px] mt-[21px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          Track
        </Text>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/attendancesheet")}
          leftIcon={
            <Img
              className="h-6 mr-[7px]"
              src="images/img_file.svg"
              alt="file"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Attendance Sheet
          </div>
        </Button>
        <Text
          className="ml-5 md:ml-[0] mr-[231px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          ANalyze
        </Text>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/dashboard")}
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
          <div className="font-opensans font-semibold text-[15px] text-left">
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
        <div className="bg-gray-50 flex flex-row gap-[7px] items-center justify-start md:ml-[0] mx-5 p-2 rounded w-[87%]">
          <Img
            className="h-[26px] w-[26px]"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
          />
          <Text
            className="text-[15px] text-indigo-A400"
            size="txtOpenSansSemiBold15IndigoA400"
          >
            Student
          </Text>
        </div>
        <Text
          className="ml-5 md:ml-[0] mr-[185px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          Chal chla nikal
        </Text>
        <div className="bg-white-A700 flex flex-row gap-[11px] items-start justify-start mb-[534px] md:ml-[0] mx-5 p-2 rounded w-[87%]">
          <Img
            className="h-[19px] ml-0.5 mt-[5px] w-[19px]"
            src="images/img_iconparkoutlinelogout.svg"
            alt="iconparkoutline"
          />
          <Text
            className="mt-[5px] text-[15px] text-indigo-900"
            size="txtOpenSansSemiBold15"
          >
            Logout
          </Text>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
