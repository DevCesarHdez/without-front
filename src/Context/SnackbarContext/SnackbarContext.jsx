import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

export const SnackbarContext = React.createContext();

export default function SnackbarProvider(props) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("Undefined");
  const [severity, setSeverity] = useState("success");
  const handleOpen = (msg, severity) => {
    setMsg(msg);
    setSeverity(severity);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <SnackbarContext.Provider value={{ handleOpen }}>
      {props.children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
