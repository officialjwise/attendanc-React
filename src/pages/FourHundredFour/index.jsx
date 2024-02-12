import React from "react";

import { Button, Img, Text } from "components";

const FourHundredFourPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-roboto h-[1080px] items-center justify-start mx-auto p-[314px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_fourhundredfour.png')" }}
      >
        <div className="flex flex-col items-center justify-start p-[9px] w-[49%] md:w-full">
          <Img
            className="h-[223px] sm:h-auto object-cover w-[82%] md:w-full"
            src="images/img_404png.png"
            alt="404png"
          />
          <Text
            className="mt-[92px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
            size="txtRobotoRegular24"
          >
            Ooops! The page you are looking for could not be found :(
          </Text>
          <Button
            className="border border-blue-300 border-solid cursor-pointer min-w-[123px] my-5 rounded-[5px] text-center text-sm"
            shape="round"
            color="blue_300"
            size="lg"
            variant="fill"
          >
            Back Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default FourHundredFourPage;
