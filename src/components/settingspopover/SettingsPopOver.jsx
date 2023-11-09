import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainDialogBox from "../alldialogbox/maindialogbox/MainDialogBox";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CodeIcon from "@mui/icons-material/Code";
import ShareIcon from "@mui/icons-material/Share";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SourceDialogBox from "../alldialogbox/sourcedialog/SourceDialogBox";
import EmbedOnSite from "../alldialogbox/embedonsite/EmbedOnSite";
import ShareDialog from "../alldialogbox/sharedialog/ShareDialog";

import { Typography, Popover, Box } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export default function SettingsPopOver({ botName }) {
  const navigation = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isRotated, setisRotated] = useState(false);
  const [openSourceDialogBox, setOpenSourceDialogBox] = useState(false);
  const [currentDialog, setCurrentDialog] = useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setisRotated(!isRotated);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setisRotated(!isRotated);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const settingsMenu = [
    {
      id: 1,
      icon: <PersonIcon />,
      name: "Chat bots",
      link: "viewchatbot",
    },
    {
      id: 2,
      icon: <SettingsIcon />,
      name: "settings",
      link: "settings",
    },
    {
      id: 3,
      icon: <EditNoteIcon />,
      name: "Source",
      dialog: (
        <SourceDialogBox
          setOpenSourceDialogBox={setOpenSourceDialogBox}
          openSourceDialogBox={openSourceDialogBox}
        />
      ),
    },
    {
      id: 4,
      icon: <CodeIcon />,
      name: "Embeded on Site",
      dialog: (
        <EmbedOnSite
          setOpenSourceDialogBox={setOpenSourceDialogBox}
          openSourceDialogBox={openSourceDialogBox}
        />
      ),
    },
    {
      id: 5,
      icon: <ShareIcon />,
      name: "Share",
      dialog: (
        <ShareDialog
          setOpenSourceDialogBox={setOpenSourceDialogBox}
          openSourceDialogBox={openSourceDialogBox}
        />
      ),
    },
    {
      icon: <DeleteForeverIcon sx={{ color: red[500] }} />,
      name: "Delete",
    },
  ];

  return (
    <div>
      <SettingsIcon
        onClick={handleClick}
        sx={{
          color: blue[500],
          transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
          cursor: "pointer",
        }}
      />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {settingsMenu?.map((menuItem, index) => (
          <>
            <Box
              onClick={() => {
                if (menuItem.link) {
                  navigation(`${menuItem.link}`);
                } else if (menuItem.dialog) {
                  if (menuItem.id === index + 1) {
                    setOpenSourceDialogBox(true);
                    setCurrentDialog(menuItem.dialog);
                    handleClose();
                  }
                }
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                px: 3,
                pb: 1,
                cursor: "pointer",
                "&:hover": {
                  color: blue[500],
                  backgroundColor: "#e7e5e4",
                },
              }}
            >
              <Typography sx={{ pt: 2, pr: 2 }}> {menuItem.icon} </Typography>
              <Typography
                sx={{
                  pt: 2,
                  color: menuItem.name === "Delete" ? "red" : "black",
                }}
              >
                {menuItem.name}
              </Typography>
            </Box>
          </>
        ))}
      </Popover>
      {openSourceDialogBox && (
        <MainDialogBox
          setOpenSourceDialogBox={setOpenSourceDialogBox}
          openSourceDialogBox={openSourceDialogBox}
          Content={currentDialog}
        />
      )}
    </div>
  );
}
