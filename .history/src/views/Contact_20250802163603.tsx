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
    } catch (error) {
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "accent.main", fontWeight: "bold" }}
      >
        I look forward to hearing from you
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        {["name", "email", "message"].map((field) => (
          <TextField
            key={field}
            fullWidth
            margin="normal"
            label={
              field === "name"
                ? "Your Name"
                : field === "email"
                ? "Your Email"
                : "Your Message"
            }
            name={field}
            type={field === "email" ? "email" : "text"}
            multiline={field === "message"}
            rows={field === "message" ? 4 : undefined}
            required
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            sx={{
              "& label.Mui-focused": { color: "accent.main" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "accent.main" },
                "&:hover fieldset": { borderColor: "accent.main" },
                "&.Mui-focused fieldset": { borderColor: "accent.main" },
              },
            }}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "accent.main",
            "&:hover": {
              backgroundColor: "accent.dark",
            },
          }}
        >
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
