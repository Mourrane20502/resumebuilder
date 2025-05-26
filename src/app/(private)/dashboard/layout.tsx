import { ReactNode } from "react";
import Header from "../_components/Header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="my-6 container">{children}</div>
    </>
  );
}
