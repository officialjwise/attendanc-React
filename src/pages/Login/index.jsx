import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import LoginHeaderheader from "components/LoginHeaderheader";
import LoginRow from "components/LoginRow";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        <LoginHeaderheader className="bg-white-A700 flex flex-col items-center justify-start max-w-[1648px] px-5 py-[9px] shadow-bs w-full" />
        <div className="bg-blue_gray-50 flex md:flex-col flex-row font-roboto md:gap-10 items-start justify-between max-w-[1629px] mx-auto p-[104px] md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[49px] items-start justify-start md:mt-0 mt-[115px] w-[44%] md:w-full">
            <div className="flex flex-col gap-2 items-start justify-start">
              <Text
                className="md:text-5xl text-[64px] text-gray-900"
                size="txtRobotoRegular64"
              >
                Attendance
              </Text>
              <Text
                className="md:text-5xl text-[64px] text-indigo-A400"
                size="txtRobotoRegular64IndigoA400"
              >
                for your business
              </Text>
            </div>
            <Text
              className="leading-[24.00px] text-base text-blue_gray-500 w-full"
              size="txtRobotoRegular16"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </Text>
          </div>
          <div className="bg-white-A700 border border-black-900_1f border-solid flex md:flex-1 flex-col gap-[26px] items-start justify-start mb-[68px] mr-[27px] md:mt-0 mt-3 md:px-10 sm:px-5 px-[49px] py-12 rounded w-auto md:w-full">
            <LoginRow className="flex sm:flex-col flex-row gap-[39px] items-center justify-center w-auto sm:w-full" />
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="text-[15px] text-gray-900"
                size="txtRobotoRegular15"
              >
                Username
              </Text>
              <Input
                name="rectangle"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex h-[38px] w-full"
                shape="round"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-start w-full">
              <Text className="text-gray-900 text-sm" size="txtRobotoRegular14">
                Password
              </Text>
              <Input
                name="rectangle_One"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-blue_gray-100 border-solid flex h-[38px] w-full"
                shape="round"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-[24%] md:w-full">
              <div className="bg-blue-A400 border border-blue-A400 border-solid flex flex-col h-4 items-end justify-start p-1 rounded w-4">
                <Img className="h-1" src="images/img_vector.svg" alt="vector" />
              </div>
              <Text
                className="text-[15px] text-gray-900"
                size="txtRobotoRegular15"
              >
                Remember me
              </Text>
            </div>
            <Button
              className="common-pointer cursor-pointer min-w-[74px] text-base text-center"
              onClick={() => navigate("/dashboardone")}
              shape="round"
              color="indigo_A400"
              size="sm"
              variant="fill"
            >
              Sign in
            </Button>
            <a href="javascript:" className="text-[13px] text-gray-600 w-auto">
              <Text size="txtRobotoRegular13">Forgot password?</Text>
            </a>
            <div className="flex flex-row gap-1.5 items-start justify-start w-1/2 md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtRobotoRegular16Gray900">
                  <>Don&#39;t have an account?</>
                </Text>
              </a>
              <a
                href="javascript:"
                className="mt-0.5 text-[15px] text-light_blue-A400"
              >
                <Text size="txtRobotoRegular15LightblueA400">
                  Register here
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
