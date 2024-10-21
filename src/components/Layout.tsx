import { FC } from "react";
import { Navbar } from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full flex items-stretch flex-col relative">
      <Navbar />
      <div className="mt-nav flex flex-col w-full">{children}</div>
    </div>
  );
};
