// updating this section with task day 27 updates

import { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Personalized() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const deleteButtonRef = useRef(null);
  const confirmButtonRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    deleteButtonRef.current?.focus(); // restore focus
  };

  const handleConfirmDelete = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <Box
      component="section"
      aria-labelledby="personalized-heading"
      className="personalized-section"
      sx={{
        py: 8,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Typography
        id="personalized-heading"
        variant="h3"
        gutterBottom
      >
        Personalized Account Section
      </Typography>

      <Button
        ref={deleteButtonRef}
        variant="contained"
        color="error"
        sx={{ px: 4, py: 1.5, mb: 2 }}
        onClick={handleOpen}
        aria-haspopup="dialog"
        aria-controls="delete-dialog"
      >
        Delete Account
      </Button>

      <Typography variant="body2" color="text.secondary">
        This action cannot be undone.
      </Typography>

      <Dialog
        id="delete-dialog"
        open={open}
        onClose={handleClose}
        role="alertdialog"
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
        TransitionProps={{
          onEntered: () => {
            confirmButtonRef.current?.focus();
          },
        }}
      >
        <DialogTitle id="delete-dialog-title">
          Confirm Account Deletion
        </DialogTitle>

        <DialogContent>
          <Typography id="delete-dialog-description">
            Are you sure you want to delete your account? This action is permanent.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>

          <Button
            ref={confirmButtonRef}
            onClick={handleConfirmDelete}
            color="error"
            variant="contained"
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
