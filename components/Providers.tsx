"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import { DarkModeProvider } from "./DarkModeContext";

export default function Providers({
  children,
  schematicPubKey,
}: {
  children: React.ReactNode;
  schematicPubKey: string;
}) {
  return (
    <ClerkProvider>
      <SchematicProvider publishableKey={schematicPubKey}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </SchematicProvider>
    </ClerkProvider>
  );
}
