import React from "react";

import { Button, Img, List, Text } from "components";

const AlertPage = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <List
          className="flex flex-col gap-[30px] items-center max-w-[1600px] mb-3.5 mx-auto md:px-5 w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-full">
            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-1/2 md:w-full">
              <div className="flex flex-col gap-[3px] items-start justify-start md:pr-10 sm:pr-5 pr-[601px] w-auto md:w-full">
                <Text
                  className="text-[13px] text-gray-300_01 uppercase w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Basic alerts
                </Text>
                <Text
                  className="text-gray-300_99 text-xs w-auto"
                  size="txtRobotoRegular12"
                >
                  Basic configuration of alert
                </Text>
              </div>
              <div className="bg-blue-300 border border-blue-300 border-solid flex flex-col items-center justify-start mt-[30px] p-2.5 w-full">
                <div className="flex flex-col items-start justify-start pb-[0.59px] sm:pr-5 pr-[27.83px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[655px] md:max-w-full text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Information:
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-green-A200 border border-green-A200 border-solid flex flex-col items-center justify-start mt-2.5 p-2.5 w-full">
                <div className="flex flex-col items-start justify-start pb-[0.59px] pr-[3.16px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[679px] md:max-w-full text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Congratulations!
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-orange-A100 border border-orange-A100 border-solid flex flex-col items-center justify-start mt-2.5 p-2.5 w-full">
                <div className="flex flex-col items-start justify-start pb-[0.59px] md:pr-10 sm:pr-5 pr-[42.27px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] md:max-w-full max-w-screen-sm text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Attention!
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-red-A200 border border-red-A200 border-solid flex flex-col items-center justify-start mt-2.5 p-2.5 w-full">
                <div className="flex flex-col items-start justify-start pb-[0.59px] md:pr-10 sm:pr-5 pr-[48.17px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[634px] md:max-w-full text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Warning!
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-1/2 md:w-full">
              <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-[13px] text-gray-300_01 uppercase w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Bordered alerts with icons
                </Text>
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[553px] w-auto md:w-full">
                  <Text
                    className="text-gray-300_99 text-xs w-auto"
                    size="txtRobotoRegular12"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      Use basic alert with a prop{" "}
                    </span>
                    <span className="text-red-A200 font-roboto text-left font-normal">
                      bordered
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-blue-300 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-[30px] w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="blue_300"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_inbox.svg" alt="inbox" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] md:pr-10 sm:pr-5 pr-[44.94px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[578px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Information:
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-green-A200 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="green_A200"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_offer.svg" alt="offer" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] sm:pr-5 pr-[20.27px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[602px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Congratulations!
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-orange-A100 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="orange_A100"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_div.svg" alt="div" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] pr-[7.19px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[615px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Attention!
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-red-A200 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="red_A200"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_close.svg" alt="close" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] pr-[13.1px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[609px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Warning!
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 md:flex-col flex-row gap-[30px] items-center justify-between w-full">
            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-1/2 md:w-full">
              <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-[13px] text-gray-300_01 uppercase w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Colored alerts with icons
                </Text>
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[560px] w-auto md:w-full">
                  <Text
                    className="text-gray-300_99 text-xs w-auto"
                    size="txtRobotoRegular12"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      Use basic alert with a prop{" "}
                    </span>
                    <span className="text-red-A200 font-roboto text-left font-normal">
                      colored
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-blue-300 border border-blue-300 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-[30px] w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="blue_200"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_inbox.svg" alt="inbox" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] md:pr-10 sm:pr-5 pr-[44.94px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[578px] md:max-w-full text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Information:
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-green-A200 border border-green-A200 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="green_A200_01"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_offer.svg" alt="offer" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] sm:pr-5 pr-[20.27px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[602px] md:max-w-full text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Congratulations!
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-orange-A100 border border-orange-A100 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="amber_200"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_div.svg" alt="div" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] pr-[7.19px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[615px] md:max-w-full text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Attention!
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-red-A200 border border-red-A200 border-solid flex md:flex-col flex-row gap-5 items-center justify-start mt-2.5 w-full">
                <Button
                  className="flex items-center justify-center w-[60px]"
                  shape="square"
                  color="red_A100"
                  size="xl"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_close.svg" alt="close" />
                </Button>
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] pr-[13.1px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[609px] md:max-w-full text-[13px] text-white-A700"
                    size="txtRobotoBold13WhiteA700"
                  >
                    <span className="text-white-A700 font-roboto text-left font-bold">
                      Warning!
                    </span>
                    <span className="text-white-A700 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-900_01 flex md:flex-1 flex-col items-center justify-start p-5 rounded-[5px] w-1/2 md:w-full">
              <div className="flex flex-col gap-[3px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-[13px] text-gray-300_01 uppercase w-auto"
                  size="txtRobotoBold13Gray30001"
                >
                  Neutral alerts with icons
                </Text>
                <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[563px] w-auto md:w-full">
                  <Text
                    className="text-gray-300_99 text-xs w-auto"
                    size="txtRobotoRegular12"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      Use basic alert with a prop{" "}
                    </span>
                    <span className="text-red-A200 font-roboto text-left font-normal">
                      neutral
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-blue_gray-900 border-solid flex md:flex-col flex-row gap-[38px] items-center justify-start mt-[30px] p-2.5 w-full">
                <Img
                  className="h-6 md:ml-[0] ml-[9px] w-6"
                  src="images/img_inbox_blue_300.svg"
                  alt="inbox_One"
                />
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] md:pr-10 sm:pr-5 pr-[44.94px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[578px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Information:
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-blue_gray-900 border-solid flex md:flex-col flex-row gap-[38px] items-center justify-start mt-2.5 p-2.5 w-full">
                <Img
                  className="h-6 md:ml-[0] ml-[9px] w-6"
                  src="images/img_offer_green_a200.svg"
                  alt="offer_One"
                />
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] sm:pr-5 pr-[20.27px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[602px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Congratulations!
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-blue_gray-900 border-solid flex md:flex-col flex-row gap-[38px] items-center justify-start mt-2.5 p-2.5 w-full">
                <Img
                  className="h-6 md:ml-[0] ml-[9px] w-6"
                  src="images/img_television_orange_a100.svg"
                  alt="television"
                />
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] pr-[7.19px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[615px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Attention!
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="border border-blue_gray-900 border-solid flex md:flex-col flex-row gap-[38px] items-center justify-start mt-2.5 p-2.5 w-full">
                <Img
                  className="h-6 md:ml-[0] ml-[9px] w-6"
                  src="images/img_close_red_a200.svg"
                  alt="close_One"
                />
                <div className="flex md:flex-1 flex-col items-start justify-start pb-[0.59px] pr-[13.1px] w-auto md:w-full">
                  <Text
                    className="leading-[20.00px] max-w-[609px] md:max-w-full text-[13px] text-gray-300_01"
                    size="txtRobotoBold13Gray30001"
                  >
                    <span className="text-gray-300_01 font-roboto text-left font-bold">
                      Warning!
                    </span>
                    <span className="text-gray-300_01 font-roboto text-left font-normal">
                      {" "}
                      Learning day desirous informed expenses material returned
                      six the. She enabled invited exposed him another.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default AlertPage;
