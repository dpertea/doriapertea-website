import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

interface TextDecryptProps {
  textValues: string[];
}

const TextDecrypt: React.FC<TextDecryptProps> = ({ textValues }) => {
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
    <span>
      {result}
      {" "}
    </span>
  );
};

export default TextDecrypt;
