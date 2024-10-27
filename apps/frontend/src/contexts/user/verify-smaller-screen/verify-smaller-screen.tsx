import React, { createContext, useState, useEffect } from "react";

const VerifySmallerScreenContext = createContext<object>({});

const SMALL_SCREEN_THRESHOLD = 768;

export const VerifySmallerScreenProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < SMALL_SCREEN_THRESHOLD);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isSmallScreen) {
    return (
      <div className="flex items-center justify-center h-screen bg-black-500">
        <div className="text-center p-8 rounded-lg shadow-md border-2 border-white-500">
          <h1 className="text-2xl font-bold mb-4 text-white-500">
            ¿Programarías desde un celular?
          </h1>
          <p className="font-medium text-white-400">
            ¿Entonces por qué intentas hacerlo?
          </p>
        </div>
      </div>
    );
  }

  return (
    <VerifySmallerScreenContext.Provider value={Object.create(null)}>
      {children}
    </VerifySmallerScreenContext.Provider>
  );
};
