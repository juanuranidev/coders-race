"use client";
import { cn } from "lib/utils";
import PythonIcon from "assets/icons/Python.svg";
import JavaScriptIcon from "assets/icons/JavaScript.svg";
import TypeScriptIcon from "assets/icons/TypeScript.svg";
import PrimaryButton from "components/ui/primary-button/primary-button";
import { useState } from "react";

interface CardDemoProps {
  imageUrl: string;
  hoverImageUrl: string;
  title: string;
  subtitle: string;
}

export default function CardDemo({
  imageUrl,
  hoverImageUrl,
  title,
  subtitle,
}: CardDemoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group w-full overflow-hidden relative card rounded-md mx-auto flex flex-col border border-transparent dark:border-neutral-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-48 transition-all duration-500"
        style={{
          backgroundImage: `url(${isHovered ? hoverImageUrl : imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 bg-background-gray">
        <div className="flex flex-col justify-between gap-4">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50">
            {title}
          </h1>
          <p className="font-medium text-sm text-white-400">{subtitle}</p>
          <div>
            <h1 className="font-bold text-md text-white-400 mb-2">
              Selecciona el lenguaje
            </h1>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-3 py-1 text-sm text-white-500 border rounded-md border-gray-300 font-semibold hover:bg-[#25252e]">
                <img src={PythonIcon} alt="Python Icon" className="w-5 h-5" />
                Python
              </button>
              <button className="flex items-center gap-2 px-3 py-1 text-sm text-white-500 border rounded-md border-gray-300 font-semibold hover:bg-[#25252e]">
                <img
                  src={JavaScriptIcon}
                  alt="JavaScript"
                  className="w-5 h-5"
                />
                JavaScript
              </button>
              <button className="flex items-center gap-2 px-3 py-1 text-sm text-white-500 border rounded-md border-gray-300 font-semibold hover:bg-[#25252e]">
                <img
                  src={TypeScriptIcon}
                  alt="TypeScript"
                  className="w-5 h-5"
                />
                TypeScript
              </button>
            </div>
          </div>
          <PrimaryButton text="Comenzar" fullWidth />
        </div>
      </div>
    </div>
  );
}
