import { useState } from "react";
import style from './ClipBoard.module.scss'
export const ClipBoard = ({valueItem}) => {

  const [buttonText, setButtonText] = useState("Copy");

  const copyTextToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
    console.log(text);
  };

  const handleClick = (value) => {
    setButtonText("Button clicked");
    copyTextToClipboard(value);
    setTimeout(() => {
      setButtonText("Copy");
    }, 2000);
  };
  return (
    <div className={style.buttonCopy}>
      <button onClick={() => handleClick(valueItem)}>{buttonText}</button>
    </div>
  );
};
