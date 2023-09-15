"use client";
import { SessionProvider } from "next-auth/react";

export interface ProviderProps {
  children: React.ReactNode;
}

export default function NextAuthSessionProvider({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
