import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar4 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <div className="bg-white-A700 flex flex-row gap-2 h-11 md:h-auto items-center justify-start md:ml-[0] mt-5 mx-5 px-2.5 py-2 rounded w-[260px]">
          <Img
            className="h-[26px] w-[26px]"
            src="images/img_materialsymbolstablechartviewoutlinerounded.svg"
            alt="materialsymbol"
          />
          <Text
            className="text-[15px] text-indigo-900 w-[79px]"
            size="txtOpenSansSemiBold15"
          >
            Dashboard
          </Text>
        </div>
        <Text
          className="ml-5 md:ml-[0] mr-[232px] mt-[9px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          ANALYSE
        </Text>
        <Menu
          menuItemStyles={{
            button: {
              padding: "7px 7px 7px 9px",
              gap: "8px",
              backgroundColor: "#ffffff",
              color: "#012970",
              fontWeight: 600,
              fontSize: "15px",
              fontFamily: "Open Sans",
              borderRadius: "4px",
              [`&:hover, &.ps-active`]: {
                color: "#4154f1",
                backgroundColor: "#f6f9ffff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-[510px] pt-2.5 px-5 w-[87%]"
        >
          <div className="flex flex-col items-center justify-start pb-[100px] w-full">
            <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_file.svg"
                    alt="file"
                  />
                }
                active={window.location.pathname === "/attendancesheet"}
              >
                <Text className="w-auto">Attendance</Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                }
                active={window.location.pathname === "/student"}
              >
                <Text className="w-auto">Student</Text>
              </MenuItem>
            </div>
            <Text
              className="text-[11px] text-blue_gray-300 uppercase w-auto"
              size="txtOpenSansSemiBold11"
            >
              Request
            </Text>
          </div>
          <div className="flex flex-col gap-2 items-center justify-end mt-[9px] w-full">
            <Text
              className="text-[11px] text-blue_gray-300 uppercase w-auto"
              size="txtOpenSansSemiBold11"
            >
              getout
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_iconparkoutlinelogout.svg"
                    alt="iconparkoutline"
                  />
                }
              >
                <Text className="w-auto">Logout</Text>
              </MenuItem>
            </div>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar4.defaultProps = {};

export default Sidebar4;
