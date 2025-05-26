"use client";

import { RootState } from "@/redux/store";
import { toggleTheme } from "@/redux/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function useTheme() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return { theme, handleToggleTheme };
}
