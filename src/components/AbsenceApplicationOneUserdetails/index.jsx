import React from "react";

import { Button, Input, List, Text } from "components";

const AbsenceApplicationOneUserdetails = (props) => {
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
              <div className="border-b-2 border-gray-300_af border-solid flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                <Text
                  className="text-[13px] text-gray-800 w-auto"
                  size="txtRobotoBold13"
                >
                  {props?.coursetext}
                </Text>
              </div>
              <div className="border-b-2 border-gray-300_af border-solid flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-full">
                <Text
                  className="text-[13px] text-gray-800 w-auto"
                  size="txtRobotoBold13"
                >
                  {props?.absencereasontext}
                </Text>
              </div>
              <Text
                className="border-b-2 border-gray-300_af border-solid flex-1 pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-800 w-full"
                size="txtRobotoBold13"
              >
                {props?.th}
              </Text>
              <Input
                name="th_One"
                placeholder="Status"
                className="!placeholder:text-gray-800 !text-gray-800 font-bold font-roboto p-0 text-[13px] text-left w-full"
                wrapClassName="flex-1 md:flex-1 w-[19%] md:w-full"
                shape="square"
                color="gray_300_af"
                size="lg"
                variant="outline"
              ></Input>
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
                {props?.coursetext1}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.absencereasontext1}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.durationtext}
              </Text>
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <Button
                  className="cursor-pointer font-medium font-roboto h-[34px] rounded-md text-[13px] text-center w-32"
                  shape="round"
                  color="indigo_A400"
                  size="sm"
                  variant="fill"
                >
                  {props?.inprogressbutton}
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-row items-start justify-start my-0 px-2 py-2.5 w-full">
              <Text
                className="text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.numbertext2}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.studentnametext2}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.coursetext2}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.absencereasontext2}
              </Text>
              <Text
                className="flex-1 text-[13px] text-gray-600_01 w-auto"
                size="txtRobotoRegular13Gray60001"
              >
                {props?.durationtext1}
              </Text>
              <div className="flex flex-1 flex-col items-center justify-center w-full">
                <Button
                  className="cursor-pointer font-medium font-roboto h-[34px] rounded-md text-[13px] text-center w-32"
                  shape="round"
                  color="green_A200"
                  size="sm"
                  variant="fill"
                >
                  {props?.approvedbutton}
                </Button>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

AbsenceApplicationOneUserdetails.defaultProps = {
  absencerecordstext: "Absence records",
  numbertext: "#",
  studentnametext: "Student name",
  coursetext: "Course",
  absencereasontext: "Absence reason",
  th: "Absence for",
  numbertext1: "1",
  studentnametext1: "Maria",
  coursetext1: "BICT",
  absencereasontext1: "Sick",
  durationtext: "1 day",
  inprogressbutton: "In Progress",
  numbertext2: "1",
  studentnametext2: "Maria",
  coursetext2: "BICT",
  absencereasontext2: "Sick",
  durationtext1: "1 day",
  approvedbutton: "Approved",
};

export default AbsenceApplicationOneUserdetails;
