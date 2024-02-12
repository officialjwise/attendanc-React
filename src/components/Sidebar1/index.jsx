import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Text
          className="ml-5 md:ml-[0] mr-[245px] mt-[21px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          Track
        </Text>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/attendancesheet")}
          leftIcon={
            <Img
              className="h-6 mr-[7px]"
              src="images/img_file.svg"
              alt="file"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Attendance Sheet
          </div>
        </Button>
        <Text
          className="ml-5 md:ml-[0] mr-[231px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          ANalyze
        </Text>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center min-w-[260px] md:ml-[0] mx-5"
          onClick={() => navigate("/dashboard")}
          leftIcon={
            <Img
              className="h-[26px] mr-1.5"
              src="images/img_materialsymbolstablechartviewoutlinerounded.svg"
              alt="material-symbols:table-chart-view-outline-rounded"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="font-opensans font-semibold text-[15px] text-left">
            Dashboard
          </div>
        </Button>
        <Text
          className="ml-5 md:ml-[0] mr-[232px] mt-[45px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          Manage
        </Text>
        <Text
          className="ml-5 md:ml-[0] mr-[185px] mt-[46px] text-[11px] text-blue_gray-300 uppercase w-auto"
          size="txtOpenSansSemiBold11"
        >
          Chal chla nikal
        </Text>
        <Menu
          menuItemStyles={{
            button: {
              padding: "5px ",
              paddingLeft: "7px",
              paddingRight: "5px",
              gap: "7px",
              margin: " ",
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
          className="flex flex-col items-center justify-start mb-[666px] pt-[13px] px-5 w-[87%]"
        >
          <MenuItem
            icon={
              <Img
                className="h-[26px] mb-1.5 w-[26px]"
                src="images/img_carbonreport.svg"
                alt="carbonreport"
              />
            }
            active={window.location.pathname === "/reportsone"}
          >
            <Text>Report</Text>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
