<Box sx={{ width: "50%" }}>
  <Box
    sx={{
      display: "flex",
      alignItems: "center", // aligns headshot and text vertically
      gap: 2, // space between headshot and text
    }}
  >
    <Box
      component="img"
      src={headshot}
      alt="Doria Pertea"
      sx={{
        width: 120,
        height: 120,
        borderRadius: "50%",
        border: "4px solid",
        borderColor: "accent.main",
        objectFit: "cover",
        flexShrink: 0, // prevents image from shrinking
        animation: "fadeInRight 1s ease-out 1s forwards",
        opacity: 0,
        transform: "translateX(50px)",
        "@keyframes fadeInRight": {
          to: {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
      }}
    />

    <Intro />
  </Box>
</Box>;
