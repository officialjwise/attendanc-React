import React from "react";

import { Button, Img, Input, Text } from "components";

const AbsenceApplicationUserdetails = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start pb-[14.59px] pt-4 w-full">
            <Text
              className="text-indigo-900 text-lg w-auto"
              size="txtPoppinsMedium18Indigo900"
            >
              {props?.absencerecordstext}
            </Text>
          </div>
          <div className="bg-gray-50_01 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
            <div className="border-b-2 border-gray-300_af border-solid flex flex-1 flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-full">
              <Text
                className="text-[13px] text-gray-800 w-auto"
                size="txtRobotoBold13"
              >
                {props?.semestertext}
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
              {props?.absencefortext}
            </Text>
            <Input
              name="th_One"
              placeholder="Action"
              className="!placeholder:text-gray-800 !text-gray-800 font-bold font-roboto p-0 text-[13px] text-left w-full"
              wrapClassName="flex-1 md:flex-1 w-[16%] md:w-full"
              shape="square"
              color="gray_300_af"
              size="lg"
              variant="outline"
            ></Input>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row items-start justify-start px-2 py-2.5 w-full">
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
                {props?.semestertext1}
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
              <div className="flex flex-1 flex-row gap-2 items-center justify-start sm:px-5 px-[31px] w-full">
                <Button
                  className="flex h-[27px] items-center justify-center rounded-lg w-[27px]"
                  color="green_500"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark" />
                </Button>
                <Button
                  className="flex h-[27px] items-center justify-center rounded-lg w-[27px]"
                  color="red_A200"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-2.5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-row items-start justify-start px-2 py-2.5 w-full">
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
                {props?.semestertext2}
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
              <div className="flex flex-1 flex-row gap-2 items-center justify-start sm:px-5 px-[31px] w-full">
                <Button
                  className="flex h-[27px] items-center justify-center rounded-lg w-[27px]"
                  color="green_500"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark_One" />
                </Button>
                <Button
                  className="flex h-[27px] items-center justify-center rounded-lg w-[27px]"
                  color="red_A200"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-2.5"
                    src="images/img_arrowright.svg"
                    alt="arrowright_One"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AbsenceApplicationUserdetails.defaultProps = {
  absencerecordstext: "Absence records",
  numbertext: "#",
  studentnametext: "Student name",
  coursetext: "Course",
  semestertext: "Semester",
  absencereasontext: "Absence reason",
  absencefortext: "Absence for",
  numbertext1: "1",
  studentnametext1: "Maria",
  coursetext1: "BICT",
  semestertext1: "First",
  absencereasontext1: "Sick",
  durationtext: "1 day",
  numbertext2: "1",
  studentnametext2: "Maria",
  coursetext2: "BICT",
  semestertext2: "First",
  absencereasontext2: "Sick",
  durationtext1: "1 day",
};

export default AbsenceApplicationUserdetails;
