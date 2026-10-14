"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

interface ExpertContactContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ExpertContactContext = createContext<ExpertContactContextValue | null>(null);

export function ExpertContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, openModal, closeModal }), [isOpen, openModal, closeModal]);

  return <ExpertContactContext.Provider value={value}>{children}</ExpertContactContext.Provider>;
}

export function useExpertContact() {
  const ctx = useContext(ExpertContactContext);
  if (!ctx) {
    throw new Error("useExpertContact must be used within an ExpertContactProvider");
  }
  return ctx;
}
