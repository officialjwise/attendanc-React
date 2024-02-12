import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";

const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TablePage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-roboto items-start justify-start mx-auto p-5 w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-[30px] justify-start max-w-[1560px] mx-auto pb-5 md:px-5 w-full">
          <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
            <Text
              className="text-[13px] text-gray-300_01 uppercase w-auto"
              size="txtRobotoBold13Gray30001"
            >
              editable react-table
            </Text>
            <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[1439px] w-auto md:w-full">
              <Text
                className="text-gray-300_99 text-xs w-auto"
                size="txtRobotoRegular12"
              >
                <span className="text-gray-300_01 font-roboto text-left font-normal">
                  Use table with{" "}
                </span>
                <span className="text-red-A200 font-roboto text-left font-normal">
                  editable
                </span>
              </Text>
            </div>
          </div>
          <SelectBox
            className="md:ml-[0] ml-[18px] text-center text-gray-500_01 text-sm w-[10%] sm:w-full"
            placeholderClassName="text-gray-500_01"
            indicator={
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_arrowdown_blue_gray_600.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="button"
            options={buttonOptionsList}
            isSearchable={false}
            placeholder="Table customizer"
            size="sm"
          />
        </div>
        <div className="flex flex-col gap-4 items-start justify-start max-w-[1560px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="border-b border-blue_gray-900_01 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[76.22px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-300_01 w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    #
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-[81%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.39px] pt-[9px] w-auto">
                    <Text
                      className="text-[13px] text-gray-300_01 w-auto"
                      size="txtRobotoBold13Gray30001"
                    >
                      First name
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[148.39px] pt-[9px] w-auto">
                    <Text
                      className="text-[13px] text-gray-300_01 w-auto"
                      size="txtRobotoBold13Gray30001"
                    >
                      Last name
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[149.39px] pt-[9px] w-auto">
                    <Text
                      className="text-[13px] text-gray-300_01 w-auto"
                      size="txtRobotoBold13Gray30001"
                    >
                      Username
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[185.39px] pt-[9px] w-auto">
                    <Text
                      className="text-[13px] text-gray-300_01 w-auto"
                      size="txtRobotoBold13Gray30001"
                    >
                      Age
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[182.39px] pt-[9px] w-auto">
                    <Text
                      className="text-[13px] text-gray-300_01 w-auto"
                      size="txtRobotoBold13Gray30001"
                    >
                      Date
                    </Text>
                  </div>
                  <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[158.39px] pt-[9px] w-auto">
                    <Text
                      className="text-[13px] text-gray-300_01 w-auto"
                      size="txtRobotoBold13Gray30001"
                    >
                      Location
                    </Text>
                  </div>
                </List>
                <Text
                  className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid justify-center pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-300_01 w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Work
                </Text>
              </div>
              <List
                className="flex flex-col items-start w-auto"
                orientation="vertical"
              >
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[83px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Maria
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[175px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Morrison
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @hamster
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[149px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    39
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    10/29/1964
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[139px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Moscow
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[159px] sm:mt-0 my-[3px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Nova Soft
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[81px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Maria
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[175px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Medinberg
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @dragon
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    28
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    5/5/1957
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[154px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Moscow
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[159px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Dog Shop
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    3
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[81px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Bobby
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[172px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Brown
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[172px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @dragon
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    46
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    3/17/1965
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[147px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Tokio
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[177px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Starlight
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[81px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Maria
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[175px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Brown
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[172px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @dragon
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    40
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    12/11/1975
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[139px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Tokio
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[177px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Aspirity
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    5
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[81px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Alexander
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[151px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Medinberg
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @cat
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[179px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    38
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2/4/1990
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[154px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Moscow
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[159px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Starlight
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    6
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[81px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Alexander
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[151px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Morrison
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @cat
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[179px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    29
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    12/16/1961
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[141px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Melbourne
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Aspirity
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    7
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[81px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Bobby
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[172px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Morrison
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @hamster
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[149px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    28
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    8/29/1992
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Rome
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[175px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Nova Soft
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    8
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[81px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Bobby
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[172px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Medinberg
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @cat
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[179px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    27
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    12/14/1996
                  </Text>
                  <Text
                    className="mb-1 sm:ml-[0] ml-[139px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Tokio
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[177px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Business Bro
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    9
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[81px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Maria
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[175px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Morrison
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @dragon
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[157px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    34
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[194px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1/10/1965
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Moscow
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[159px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Dog Shop
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    10
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[74px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Bobby
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[172px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Medinberg
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    @hamster
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[149px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    21
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[196px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2/18/1976
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Melbourne
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[147px] sm:mt-0 my-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Starlight
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[1116px] w-full">
            <div className="flex sm:flex-1 flex-row items-start justify-start pr-0.5 w-[46%] sm:w-full">
              <Button
                className="flex h-7 items-center justify-center w-7"
                shape="circle"
                color="blue_gray_900_7e"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_refresh.svg" alt="refresh" />
              </Button>
              <Button
                className="flex h-7 items-center justify-center w-7"
                shape="circle"
                color="blue_gray_900_7e"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_span.svg" alt="span" />
              </Button>
              <Text
                className="ml-[11px] mt-1.5 text-[10px] text-center text-gray-300_01"
                size="txtRobotoBold10"
              >
                1
              </Text>
              <Text
                className="ml-6 mt-1.5 text-[10px] text-center text-gray-500_01"
                size="txtRobotoRegular10"
              >
                2
              </Text>
              <Text
                className="ml-[23px] mt-1.5 text-[10px] text-center text-gray-500_01"
                size="txtRobotoRegular10"
              >
                3
              </Text>
              <Button
                className="flex h-7 items-center justify-center ml-3 w-7"
                shape="circle"
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_span.svg" alt="arrowright" />
              </Button>
              <Button
                className="flex h-7 items-center justify-center w-7"
                shape="circle"
                color="blue_gray_900"
                size="sm"
                variant="fill"
              >
                <Img
                  src="images/img_arrowdown_gray_500_01.svg"
                  alt="arrowdown"
                />
              </Button>
            </div>
            <Text
              className="ml-2.5 sm:ml-[0] text-gray-500_01 text-xs"
              size="txtRobotoRegular12Gray50001"
            >
              Showing 1 to 10 of 35
            </Text>
            <div className="bg-gray-900_01 border border-blue_gray-100 border-solid flex flex-col items-start justify-start sm:ml-[0] ml-[19px] pl-[17px] sm:pr-5 pr-[29px] py-[7px] rounded-md w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="text-gray-500_01 text-xs w-auto"
                  size="txtRobotoRegular12Gray50001"
                >
                  Show 10
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePage;
