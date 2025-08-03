import React, { useEffect } from "react";
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

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(textValues[i]);

      i = i === textValues.length - 1 ? 0 : i + 1;
    }, 1800);

    return () => clearInterval(action);
  }, [dencrypt, textValues]);

  return (
    <Box component="span" sx={{ color: theme.palette.accent.main }}>
      {result}
      {" "}
    </Box>
  );
};

export default TextDecryptEffect;
