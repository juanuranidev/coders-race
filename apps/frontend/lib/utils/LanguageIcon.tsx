import React from "react";
import { Image } from "@nextui-org/react";
import { LANGUAGES_NAMES } from "lib/constants";
import JavaScript from "assets/icons/JavaScript.svg";
import TypeScript from "assets/icons/TypeScript.svg";
import Python from "assets/icons/Python.svg";

type Props = {
  language: string;
  width?: string | number;
  height?: string | number;
};

export default function LanguageIcon({
  language,
  width = "100%",
  height = "100%",
}: Props) {
  let icon = "";

  if (language === LANGUAGES_NAMES.JAVASCRIPT) {
    icon = JavaScript.src;
  } else if (language === LANGUAGES_NAMES.TYPESCRIPT) {
    icon = TypeScript.src;
  } else if (language === LANGUAGES_NAMES.PYTHON) {
    icon = Python.src;
  }

  return (
    <Image radius="none" width={width} height={height} alt={icon} src={icon} />
  );
}
