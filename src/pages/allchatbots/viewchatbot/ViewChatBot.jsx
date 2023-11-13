import { React, useState } from "react";

import { Box, TextField, Typography } from "@mui/material";
import Message from "./Message";
import SendIcon from "@mui/icons-material/Send";
import { blue } from "@mui/material/colors";

export default function ViewChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessageOnEnter = (event) => {
    if (event.keyCode === 13) {
      if (input.trim() !== "") {
        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");
      }
    }
  };
  const handleSendMessage = (event) => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "50vw",
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
            backgroundColor: "transparent",
          }}
        >
          <img src=" " alt="img" height={40} />
          <Box>
            <Typography variant="h6">{}</Typography>
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
        >
          {messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{
              minWidth: "45vw",
              borderRadius: "20px",
              padding: "15px",
            }}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyUp={handleSendMessageOnEnter}
            placeholder="Type a message..."
          />
          <SendIcon
            onClick={handleSendMessage}
            sx={{
              color: blue[500],
              fontSize: 45,
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
