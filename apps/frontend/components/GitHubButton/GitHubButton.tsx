import React from "react";
import GitHubIcon from "assets";
import { Button, Image } from "@nextui-org/react";

export default function GitHubButton({ onClick, disabled, children }: any) {
  return (
    <Button
      startContent={<Image src={GitHubIcon.src} width={25} />}
      className="text-white
      bg-[#15141a]
      border-2
      rounded-md
      border-gray-300
      font-semibold
      hover:bg-[#25252e]"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
