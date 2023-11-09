import { React, useRef, useEffect } from "react";

import { Box } from "@mui/material";

const Message = ({ text, sender }) => {
  const chatbox = useRef(null);
  useEffect(() => chatbox.current.scrollIntoView(false), [text]);

  return (
    <Box
      ref={chatbox}
      sx={{
        backgroundColor: "#7dd3fc",
        width: "auto",
        maxWidth: "60%",

        height: "auto",
        py: "8px",
        px: " 15px",
        borderBottomRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderTopLeftRadius: "15px",
        margin: "3px 0px",
      }}
      className={`message ${sender}`}
    >
      {text}
    </Box>
  );
};

export default Message;
