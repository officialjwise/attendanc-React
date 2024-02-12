import React from "react";

import { Img, List, Text } from "components";

const TableTwoPage = () => {
  return (
    <>
      <div className="bg-gray-900_01 flex flex-col font-roboto items-start justify-start mx-auto pb-[50px] pl-[30px] pr-[35px] pt-[30px] sm:px-5 w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-7 items-center justify-start max-w-[1560px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="text-[13px] text-gray-300_01 uppercase w-auto"
              size="txtRobotoBold13Gray30001"
            >
              Recent orders
            </Text>
            <Img
              className="h-5 w-[57px]"
              src="images/img_user_gray_500_01.svg"
              alt="user"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="border-b border-blue_gray-900_01 border-solid flex md:flex-col flex-row md:gap-5 items-start justify-start w-auto md:w-full">
                <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] pl-2.5 md:pr-10 sm:pr-5 pr-[70.73px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-300_01 w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    #
                  </Text>
                </div>
                <Text
                  className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid justify-center pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-300_01 w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Invoice
                </Text>
                <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[114.22px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-300_01 w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    Customer Name
                  </Text>
                </div>
                <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[203.95px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-300_01 w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    Product
                  </Text>
                </div>
                <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[147.2px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-300_01 w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    Quantity
                  </Text>
                </div>
                <Text
                  className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid justify-center pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-300_01 w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Date
                </Text>
                <div className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid flex flex-col items-start justify-start pb-[11.8px] md:pr-10 sm:pr-5 pr-[146.2px] pt-[9px] w-auto">
                  <Text
                    className="text-[13px] text-gray-300_01 w-auto"
                    size="txtRobotoBold13Gray30001"
                  >
                    Location
                  </Text>
                </div>
                <Text
                  className="bg-gray-900_01 border-b-2 border-blue_gray-900_01 border-solid justify-center pb-3.5 sm:pr-5 pr-[35px] pt-[11px] text-[13px] text-gray-300_01 w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Status
                </Text>
              </div>
              <List
                className="flex flex-col items-start w-auto"
                orientation="vertical"
              >
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2.5 w-full">
                  <Text
                    className="text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[78px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    In-123356
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Lok Morisson
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[130px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Xiaomi Mi 6
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[181px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[191px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2017/12/25
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[127px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Melbourne
                  </Text>
                  <Text
                    className="bg-green-A200 justify-center sm:ml-[0] ml-[135px] pt-1 px-[7px] rounded-md text-[13px] text-center text-white-A700 w-auto"
                    size="txtRobotoMedium13"
                  >
                    In Progress
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[75px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    In-254875
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Norman Brown
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[122px] sm:mt-0 mt-[3px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Apple iPhone 12 Pro
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[132px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[191px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2020/11/25
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[127px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Tokio
                  </Text>
                  <Text
                    className="bg-blue-300 justify-center sm:ml-[0] ml-[165px] px-[7px] py-0.5 rounded-md text-[13px] text-center text-white-A700 w-auto"
                    size="txtRobotoMedium13"
                  >
                    Completed
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    3
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[75px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    In-877868
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] sm:mt-0 mt-[3px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Sam Medinberg
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[118px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Xiaomi Mi 6
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[181px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[191px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2020/11/13
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[127px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Moscow
                  </Text>
                  <Text
                    className="bg-green-A200 justify-center sm:ml-[0] ml-[147px] pt-1 px-[7px] rounded-md text-[13px] text-center text-white-A700 w-auto"
                    size="txtRobotoMedium13"
                  >
                    In Progress
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    4
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[75px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    In-619876
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Dave Morisson
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[123px] sm:mt-0 mt-[3px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Apple iPhone SE
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[155px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[191px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2017/12/25
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[127px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Moscow
                  </Text>
                  <Text
                    className="bg-green-A200 justify-center sm:ml-[0] ml-[147px] pt-1 px-[7px] rounded-md text-[13px] text-center text-white-A700 w-auto"
                    size="txtRobotoMedium13"
                  >
                    In Progress
                  </Text>
                </div>
                <div className="border-b border-blue_gray-900_01 border-solid flex sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 p-2.5 w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    5
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[75px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    In-218778
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Klara Brown
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[139px] sm:mt-0 mt-[3px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Apple iPhone 12 Pro
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[132px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[191px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2020/11/01
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[129px] sm:mt-0 mt-0.5 text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    London
                  </Text>
                  <Text
                    className="bg-blue-300 justify-center sm:ml-[0] ml-[153px] px-[7px] py-[3px] rounded-md text-[13px] text-center text-white-A700 w-auto"
                    size="txtRobotoMedium13"
                  >
                    Completed
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start my-0 p-2.5 w-full">
                  <Text
                    className="text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    6
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[75px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    In-626268
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[138px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Molly Medinberg
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[113px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Apple iPhone 12
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[155px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    1
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[191px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    2020/11/01
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[129px] text-[13px] text-gray-500_01"
                    size="txtRobotoRegular13Gray50001"
                  >
                    Rome
                  </Text>
                  <Text
                    className="bg-blue-300 justify-center sm:ml-[0] ml-[163px] px-[7px] py-0.5 rounded-md text-[13px] text-center text-white-A700 w-auto"
                    size="txtRobotoMedium13"
                  >
                    Completed
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableTwoPage;
