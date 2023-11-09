import { React, useState } from "react";

import ResetButton from "../../common/resetbutton/ResetButton";
import InputTypeColor from "../../common/inputcolortype/InputTypeColor";
import StaticViewChatBotDesign from "../staticviewchatbotdesign/StaticViewChatBotDesign";

import {
  Box,
  Typography,
  TextField,
  Grid,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

export default function ChatInterFaceSettings() {
  const [theme, setTheme] = useState("");
  const [botName, setBotName] = useState();
  const [chatbotContentBgColor, setChatbotContentBgColor] = useState({
    headerColor: "",
    chatMsgColor: "",
    chatBubbleColor: "",
  });

  localStorage.setItem("botName", JSON.stringify(botName));
  const handleBotDisplayNameChange = (e) => {
    setBotName(e.target.value);
  };

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  const handleColorChange = (color, identifier) => {
    setChatbotContentBgColor((prevState) => ({
      ...prevState,
      [identifier]: color,
    }));
  };
  return (
    <>
      <Box>
        <Box>
          <Typography variant="h5">
            <strong>Chat Interface</strong>
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">
            applies when embedded on a website
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <ResetButton />
            </Box>

            <Box>
              <Typography variant="button">initial message</Typography>
            </Box>
            <Box>
              <TextField
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
            <Box>
              <Typography variant="caption">
                Enter each message in a new line.
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box>
                <Typography>Suggested Message</Typography>
              </Box>
              <Box>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: "10px",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography variant="caption">
                  Enter each message in a new line.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box>
                <Typography>Theme</Typography>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theme}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Light</MenuItem>
                    <MenuItem value={20}>Dark</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography>Header Color</Typography>
                  <InputTypeColor
                    identifier="headerColor"
                    onColorChange={handleColorChange}
                  />
                </Box>
                <Box>
                  <ResetButton />
                </Box>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="button">
                Update chatbot profile picture
              </Typography>
              <Box>
                <input type="file" />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box>
                <Typography>Remove chatbot profile picture </Typography>
              </Box>
              <Box>
                <input type="checkbox" />
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Box>
                <Typography>Display Name</Typography>
              </Box>
              <Box>
                <TextField
                  onChange={handleBotDisplayNameChange}
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: "10px",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  mt: 2,
                }}
              >
                <ResetButton />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box>
                <Typography>User Message Color</Typography>
              </Box>
              <Box>
                <InputTypeColor
                  identifier="chatMsgColor"
                  onColorChange={handleColorChange}
                />
              </Box>
              <Box>
                <Typography variant="caption">
                  **If the changes here don't show up immediately on your
                  website try clearing your browser cache or use incognito. (New
                  users will see the changes immediately)**
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box>
                <Typography>Remove Chat Icon</Typography>
              </Box>
              <Box>
                <input type="checkbox" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Box>
                <Box>
                  <Typography>Chat Bubble Button Color</Typography>
                </Box>
                <Box>
                  <InputTypeColor
                    identifier="chatBubbleColor"
                    onColorChange={handleColorChange}
                  />
                </Box>
              </Box>
              <Box>
                <ResetButton />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Box>
                <Typography>Align Chat Bubble Button</Typography>
              </Box>
              <Box>
                {" "}
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theme}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Left</MenuItem>
                    <MenuItem value={20}>Right</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <StaticViewChatBotDesign
              chatbotContentBgColor={chatbotContentBgColor}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
