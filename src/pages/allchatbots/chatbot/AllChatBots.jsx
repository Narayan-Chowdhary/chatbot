import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import SettingsPopOver from "../../../components/settingspopover/SettingsPopOver";
import responseofChatBotName from "../../../services/commonapi/CommonGetApi";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function AllChatBots() {
  const navigation = useNavigate();

  const [botName, setBotName] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCall = await responseofChatBotName();
        setBotName(apiCall);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h4"> All Chat Bots </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <b>Bot Name </b>
              </TableCell>
              <TableCell align="left">
                <b>Created On </b>
              </TableCell>
              <TableCell align="left">
                <b>Action </b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {botName?.map((row, indec) => (
              <>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        onClick={() => {
                          if (row.link) {
                            navigation(`${row.link}`);
                          }
                        }}
                        sx={{
                          display: "flex",

                          fontSize: "16px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        <Box sx={{ color: blue[500], mr: 2 }}>
                          <SmartToyIcon />
                        </Box>
                        <Box>{row.botName}</Box>
                      </Box>
                    </Link>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <SettingsPopOver botName={botName} />
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
