import React from "react";
import { HiMiniCalendarDays } from "react-icons/hi2";
import { IoMdCompass } from "react-icons/io";
import { Box, Button, Input } from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">TicketZone</div>
        <Box m={"0px auto"} display={"flex"} className="search">
          <Input
            width={"100%"}
            ml={"auto"}
            borderRadius={"0px"}
            borderTopLeftRadius={"10px"}
            borderBottomLeftRadius={"10px"}
            border={"2px solid white"}
            _placeholder={{ fontWeight: 300, color: "white" }}
            placeholder={"Cari event seru di sini"}
            borderRight={"transparent"}
          ></Input>
          <Button
            color={"white"}
            bg={"#032466"}
            borderTopLeftRadius={"0px"}
            borderBottomLeftRadius={"0px"}
          >
            <FaMagnifyingGlass />
          </Button>
        </Box>
      </div>
      <div className="navbar-right">
        <ul className="navbar-nav">
          <Button
            fontWeight={900}
            _hover={"transparent"}
            bg={"transparent"}
            border={"transparent"}
            leftIcon={<HiMiniCalendarDays size={"25px"} />}
          >
            Buat Event
          </Button>
          <Button
            fontWeight={900}
            _hover={"transparent"}
            bg={"none"}
            leftIcon={<IoMdCompass size={"25px"} />}
          >
            Discovery
          </Button>
          <li className="auth-navbar-button-container">
            <div className="nav-auth-button">
              <Button
                border={"2px solid white"}
                variant={"outline"}
                mr={"10px"}
              >
                Daftar
              </Button>
              <Button color={"white"} bg={"#032466"}>
                Masuk
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
