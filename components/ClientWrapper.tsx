"use client";

import React, { useEffect, useState } from "react";
import Providers from "./Providers";

type DarkModeProps = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;

  if (!schematicPubKey) {
    throw new Error("Missing Schematic Publishable Key");
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        toggleDarkMode,
        isDarkMode,
      } as DarkModeProps);
    }
    return child;
  });

  return (
    <Providers schematicPubKey={schematicPubKey}>{childrenWithProps}</Providers>
  );
}
