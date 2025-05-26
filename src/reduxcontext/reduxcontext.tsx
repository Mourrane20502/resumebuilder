"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxContext({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
