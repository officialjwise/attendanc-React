import React from "react";

import { List, Text } from "components";

const AttendanceSheetGenerateSheetColumnattendancesheetFive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start pb-[14.59px] pt-5 w-full">
            <Text
              className="text-indigo-900 text-lg w-auto"
              size="txtPoppinsMedium18Indigo900"
            >
              {props?.attendancesheettext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="bg-gray-50_01 flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
              <div className="border border-gray-600_01 border-solid h-6 rounded-lg w-6"></div>
              <div className="border-b-2 border-gray-300_af border-solid flex flex-col items-center justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[76.22px] pt-[9px] w-auto">
                <Text
                  className="text-[13px] text-gray-800 w-auto"
                  size="txtRobotoBold13"
                >
                  {props?.numbertext}
                </Text>
              </div>
              <Text
                className="border-b-2 border-gray-300_af border-solid flex-1 pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-800 w-full"
                size="txtRobotoBold13"
              >
                {props?.th}
              </Text>
              <div className="border-b-2 border-gray-300_af border-solid flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
                <Text
                  className="text-[13px] text-gray-800 w-auto"
                  size="txtRobotoBold13"
                >
                  {props?.studentidtext}
                </Text>
              </div>
              <Text
                className="border-b-2 border-gray-300_af border-solid flex-1 pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-800 w-full"
                size="txtRobotoBold13"
              >
                {props?.statustext}
              </Text>
            </div>
            <List
              className="flex flex-col items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="border border-gray-600_01 border-solid h-6 rounded-lg w-6"></div>
                <div className="flex flex-col items-center justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[76.22px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoBold13Gray60001"
                  >
                    {props?.numbertext1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.databasetext}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.studentnumbertext}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.percentagetext}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="border border-gray-600_01 border-solid h-6 rounded-lg w-6"></div>
                <div className="flex flex-col items-center justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[76.22px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoBold13Gray60001"
                  >
                    {props?.numbertext2}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.databasetext1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.studentnumbertext1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.percentagetext1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <div className="border border-gray-600_01 border-solid h-6 rounded-lg w-6"></div>
                <div className="flex flex-col items-center justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[76.22px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoBold13Gray60001"
                  >
                    {props?.numbertext3}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.databasetext2}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.studentnumbertext2}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                  <Text
                    className="text-[13px] text-gray-600_01 w-auto"
                    size="txtRobotoRegular13Gray60001"
                  >
                    {props?.percentagetext2}
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

AttendanceSheetGenerateSheetColumnattendancesheetFive.defaultProps = {
  attendancesheettext: "Attendance Sheet",
  numbertext: "#",
  th: "Student name",
  studentidtext: "Student ID",
  statustext: "Status",
  numbertext1: "1",
  databasetext: "Maria DB",
  studentnumbertext: "#2123123",
  percentagetext: "Persent",
  numbertext2: "1",
  databasetext1: "Maria DB",
  studentnumbertext1: "#2123123",
  percentagetext1: "Persent",
  numbertext3: "1",
  databasetext2: "Maria DB",
  studentnumbertext2: "#2123123",
  percentagetext2: "Persent",
};

export default AttendanceSheetGenerateSheetColumnattendancesheetFive;
