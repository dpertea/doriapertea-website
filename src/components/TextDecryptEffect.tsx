import React, { useEffect, useState } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

interface TextDecryptEffectProps {
  textValues: string[];
}

const TextDecryptEffect: React.FC<TextDecryptEffectProps> = ({
  textValues,
}) => {
  const [result, dencrypt] = useDencrypt();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFirstTransition, setIsFirstTransition] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    // starting with slight delay before showing the first word
    const initialTimeout = setTimeout(() => {
      dencrypt(textValues[0]);
    }, 1200);

    return () => clearTimeout(initialTimeout);
  }, [dencrypt, textValues]);

  useEffect(() => {
    // using longer delay for first transition, normal delay for subsequent ones
    const delay = isFirstTransition ? 2500 : 1800;

    const action = setInterval(() => {
      const nextIndex = (currentWordIndex + 1) % textValues.length;
      setCurrentWordIndex(nextIndex);
      dencrypt(textValues[nextIndex]);
      if (isFirstTransition) setIsFirstTransition(false);
    }, delay);

    return () => clearInterval(action);
  }, [currentWordIndex, dencrypt, textValues, isFirstTransition]);

  const isFinalWord = textValues.includes(result);

  return (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        minWidth: "200px",
        color: "inherit",
        textShadow: isFinalWord
          ? `0 0 4px ${theme.palette.accent.main}, 0 0 8px ${theme.palette.accent.main}`
          : "none",
        transition: "color 0.1s ease, text-shadow 0.2s ease",
      }}
    >
      {result}{" "}
    </Box>
  );
};

export default TextDecryptEffect;
