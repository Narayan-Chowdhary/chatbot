import HiteshiLogo from "../../../assets/images/HiteshiLogo.png";
import { React } from "react";

import { Box, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { blue } from "@mui/material/colors";

export default function ViewChatBot({ chatbotContentBgColor }) {
  const headerBackgroundColor = chatbotContentBgColor.headerColor;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90vw", sm: "60vw", md: "35vw" },
          minHeight: "80vh",
          maxHeight: "80vh",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          p: 1,
          boxShadow: "-12px -8px 40px rgba(70,70,70,0.12) inset;",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: " center",
            backgroundColor: headerBackgroundColor,
          }}
        >
          <img src={HiteshiLogo} alt="Hiteshi" height={30} />
          <Box>
            <Typography variant="h6"></Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            border: "15px",
            height: "100%",
            overflow: "scroll",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{
              minWidth: { xs: "80vw", sm: "50vw", md: "30vw " },
              borderRadius: "20px",
              padding: "15px",
            }}
            type="text"
            placeholder="Type a message..."
          />
          <SendIcon
            sx={{
              color: blue[500],
              fontSize: { xs: 20, sm: 35, md: 50 },
              cursor: "pointer",
              "&:hover": {
                color: blue[300],
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
