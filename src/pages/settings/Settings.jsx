import { React, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Slider,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import ChatInterFaceSettings from "../../components/chatbotinterfacesettings/chatinterfacesettings/ChatInterFaceSettings";
import ResetButton from "../../components/common/resetbutton/ResetButton";

export default function Settings() {
  const [visibility, setVisibility] = useState("");

  const handleChange = (event) => {
    setVisibility(event.target.value);
  };

  const marks = [
    {
      value: 0,
      label: "Reserved",
    },

    {
      value: 100,
      label: "Creative",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <>
      <Box
        sx={{
          px: { xs: 2, sm: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            pb: 2,
          }}
        >
          <Box>Chatbot ID</Box>
          <Box>Will be dynamic</Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              position: "fixed",
              bottom: 20,
              right: 80,
              zIndex: 1,
            }}
          >
            Save Changes
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box>
              <Typography>Name</Typography>
              <TextField
                fullWidth
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    height: "45px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>Base Prompt (system message)</Typography>
              <TextField
                fullWidth
                placeholder="Your Message"
                multiline
                rows={3}
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                mt: 2,
              }}
            >
              <ResetButton />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>Model</Typography>
              <TextField
                fullWidth
                placeholder="model name"
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                    height: "45px",
                  },
                }}
              />
              <Typography variant="caption">
                1 message using gpt-3.5-turbo costs 1 message credit. 1 message
                using gpt-4 costs 20 message credits.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>Temprature</Typography>
              {valuetext}
              <Slider
                defaultValue={0.1}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                InputProps={{
                  sx: {
                    pl: "10px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography>Visibility</Typography>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={visibility}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Private</MenuItem>
                  <MenuItem value={20}>
                    Private but can be embedded on website
                  </MenuItem>
                  <MenuItem value={30}>Public </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              Private: No one can access your chatbot except you (your account){" "}
            </Typography>{" "}
            <br />
            <Typography variant="caption">
              Private but can be embedded on website: Other people can't access
              your chatbot if you send them the link, but you can still embed it
              on your website and your website visitors will be able to use it.
              (make sure to set your domains){" "}
            </Typography>
            <br />
            <Typography variant="caption">
              Public: Anyone with the link can access it on chatbase.co and can
              be embedded on your website.
            </Typography>{" "}
            <br />
            <Typography variant="caption">
              Set to public if you want to be able to send a link of your
              chatbot to someone to try it.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography>Domains</Typography>
              <TextField
                placeholder="example.com"
                InputProps={{
                  sx: {
                    borderRadius: "10px",
                  },
                }}
              />
              <Box>
                <Typography variant="caption">
                  Enter each domain in a new line
                </Typography>{" "}
                <br />
                <Typography variant="caption">
                  Domains you want to embed your chatbot on. Your chatbot
                  visibility has to be Public or Private but can be embedded on
                  website for this to work.
                </Typography>
                <br />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ChatInterFaceSettings />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
