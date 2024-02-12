import React from "react";

import { List, Text } from "components";

const AbsenceApplicationUserdetails1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start pb-[14.59px] pt-5 w-full">
            <Text
              className="text-indigo-900 text-lg w-auto"
              size="txtPoppinsMedium18Indigo900"
            >
              {props?.absencerecordstext}
            </Text>
          </div>
          <List
            className="flex flex-col items-start w-full"
            orientation="vertical"
          >
            <div className="bg-gray-50_01 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start my-0 w-full">
              <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[76.22px] pt-[9px] w-[58px]">
                <Text
                  className="text-[13px] text-gray-800 w-auto"
                  size="txtRobotoBold13"
                >
                  {props?.numbertext}
                </Text>
              </div>
              <div className="border-b-2 border-gray-300_af border-solid flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-full">
                <Text
                  className="text-[13px] text-gray-800 w-auto"
                  size="txtRobotoBold13"
                >
                  {props?.studentnametext}
                </Text>
              </div>
              <Text
                className="border-b-2 border-gray-300_af border-solid flex-1 pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-800 w-full"
                size="txtRobotoBold13"
              >
                {props?.coursetext}
              </Text>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 grid-cols-2 w-[38%] md:w-full"
                orientation="horizontal"
              >
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    {props?.semestertext}
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    {props?.absencereasontext}
                  </Text>
                </div>
              </List>
              <Text
                className="border-b-2 border-gray-300_af border-solid flex-1 pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-800 w-full"
                size="txtRobotoBold13"
              >
                {props?.absencefortext}
              </Text>
            </div>
            <div className="flex flex-1 flex-row items-start justify-start my-0 px-2 py-2.5 w-full">
              <Text
                className="text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row1numbertext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row1studentnametext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row1coursetext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row1absencereasontext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row1durationtext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.duration}
              </Text>
            </div>
            <div className="flex flex-1 flex-row items-start justify-start my-0 px-2 py-2.5 w-full">
              <Text
                className="text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row2numbertext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row2studentnametext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row2coursetext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row2absencereasontext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.row2durationtext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.duration1}
              </Text>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

AbsenceApplicationUserdetails1.defaultProps = {
  absencerecordstext: "Absence records",
  numbertext: "#",
  studentnametext: "Student name",
  coursetext: "Course",
  semestertext: "Semester",
  absencereasontext: "Absence reason",
  absencefortext: "Absence for",
  row1numbertext: "1",
  row1studentnametext: "Maria",
  row1coursetext: "BICT",
  row1absencereasontext: "First",
  row1durationtext: "Sick",
  duration: "1 day",
  row2numbertext: "1",
  row2studentnametext: "Maria",
  row2coursetext: "BICT",
  row2absencereasontext: "Second",
  row2durationtext: "2",
  duration1: "1 day",
};

export default AbsenceApplicationUserdetails1;
