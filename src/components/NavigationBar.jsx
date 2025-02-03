import React from "react";
import styled, { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { routePathConfig } from "../route";
import LogoPath from "../assets/FuLogo.jpg";
import SideMenu from "./SideMenu";

const Image = styled.img`
  object-fit: contain;
  border-radius: 4px;
  margin-right: 8px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 12px;
`;

const NavigationBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <AppBar
        component="nav"
        sx={{ background: "#FFF", height: "64px" }}
        position="static"
      >
        <SpaceBetween>
          <Logo
            onClick={() => {
              navigate(routePathConfig.home);
            }}
          >
            <Image src={LogoPath} width={44} height={44} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                color: theme.color.primary,
                fontWeight: "700",
              }}
            >
              傅偉勳基金會
            </Typography>
          </Logo>
          <SideMenu />
        </SpaceBetween>
      </AppBar>
    </Box>
  );
};
export default NavigationBar;
