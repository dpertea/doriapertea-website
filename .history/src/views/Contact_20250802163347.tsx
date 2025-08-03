// src/views/Contact.tsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Container,
} from "@mui/material";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    success: true,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "your_service_id",
        "your_template_id",
        form,
        "your_user_id"
      );

      setSnackbar({
        open: true,
        success: true,
        message: "Message sent successfully!",
      });

      setForm({ name: "", email: "", message: "" });
    } catch (error: ) {
      setSnackbar({
        open: true,
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Get in Touch
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          margin="normal"
          label="Your Name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Your Email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Your Message"
          name="message"
          multiline
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.success ? "success" : "error"}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};
