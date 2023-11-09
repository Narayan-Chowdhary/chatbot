import { React } from "react";
import { Button } from "@mui/material";

export default function ResetButton({ setResetData }) {
  const handleResetButton = React;

  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#289CE8",
          fontSize: 12,
        }}
        onClick={handleResetButton}
      >
        Reset
      </Button>
    </>
  );
}
