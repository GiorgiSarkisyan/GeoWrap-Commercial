"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  fadeOut: boolean;
  setFadeOut: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isLoading, fadeOut, setFadeOut, setIsLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
export function useLoading() {
  const ctx = useContext(LoadingContext);
  if (!ctx) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return ctx;
}
