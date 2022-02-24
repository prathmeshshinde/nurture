import React from "react";
import { MenuItem, Select } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    borderRadius: 10,
  },
});

export const Custom = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="section-custom">
        <div className="dropdown">
          <div className="avalanche">
            <Select
              displayEmpty
              sx={{
                height: "60%",
                backgroundColor: "#353945",
                color: "#ffffff",
              }}
            >
              <MenuItem
                sx={{
                  color: "#000000",
                }}
              >
                <img alt="bit" className="menu-img" src="./icons/ava.svg" />
                Avalanche
              </MenuItem>
            </Select>
          </div>
          <div className="user">
            <Select
              displayEmpty
              sx={{
                height: "60%",
                border: "2px solid #3772ff",
                color: "#ffffff",
              }}
            >
              <MenuItem
                sx={{
                  color: "#000000",
                }}
              >
                <img alt="bit" className="menu-img" src="./icons/Wallet.svg" />
                0XF6..1353
              </MenuItem>
            </Select>
          </div>
        </div>
        <div className="custom-link">
          <div className="path-img">
            <img
              alt="bit"
              src="./icons/path.svg"
              style={{
                width: "16px",
              }}
            />
          </div>
          <div>
            <p>Custom Link</p>
          </div>
        </div>
        <div className="testnet">
          <p>https://testnet.xyz.xyz/trade?ref=</p>
        </div>
        <div>
          <input placeholder="ENTER" type="text" name="ENTER" />
        </div>
        <div className="custom-button">
          <button className="button-custom">
            <img
              alt="bit"
              src="./icons/link.svg"
              style={{
                width: "15px",
              }}
            />
            <p>Custom link</p>
          </button>
          <button className="button-cancel">
            <img
              alt="bit"
              src="./icons/icon.svg"
              style={{
                width: "15px",
              }}
            />
            <p>Cancel</p>
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
};
