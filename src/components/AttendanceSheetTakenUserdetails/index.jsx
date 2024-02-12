import React from "react";

import { List, Text } from "components";

const AttendanceSheetTakenUserdetails = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start pb-[14.59px] pt-5 w-full">
            <Text
              className="text-indigo-900 text-lg w-auto"
              size="txtPoppinsMedium18Indigo900"
            >
              {props?.subjectreporttext}
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
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[71%] md:w-full"
                orientation="horizontal"
              >
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-800 w-auto"
                    size="txtRobotoBold13"
                  >
                    {props?.studentnametext}
                  </Text>
                </div>
                <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
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
                    {props?.totalpresentdaytext}
                  </Text>
                </div>
              </List>
              <Text
                className="border-b-2 border-gray-300_af border-solid flex-1 sm:pr-5 pr-[35px] py-3 text-[13px] text-gray-800 w-full"
                size="txtRobotoBold13"
              >
                {props?.totalabsencedaytext}
              </Text>
            </div>
            <div className="flex flex-1 flex-row items-start justify-start my-0 px-2 py-2.5 w-full">
              <Text
                className="text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.numbertext1}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.studentnametext1}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.firsttext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.tentext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.languagetext}
              </Text>
            </div>
            <div className="flex flex-1 flex-row items-start justify-start my-0 px-2 py-2.5 w-full">
              <Text
                className="text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.numbertext2}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.studentnametext2}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.firsttext1}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.twotext}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.tentext1}
              </Text>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

AttendanceSheetTakenUserdetails.defaultProps = {
  subjectreporttext: "Subject Report",
  numbertext: "#",
  studentnametext: "Student name",
  semestertext: "Semester",
  totalpresentdaytext: "Total Present Day",
  totalabsencedaytext: "Total Absence Day",
  numbertext1: "1",
  studentnametext1: "Maria",
  firsttext: "First",
  tentext: "10",
  languagetext: "2 ",
  numbertext2: "1",
  studentnametext2: "Maria",
  firsttext1: "First",
  twotext: "2",
  tentext1: "10",
};

export default AttendanceSheetTakenUserdetails;
