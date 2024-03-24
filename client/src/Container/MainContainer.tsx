import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-full lg:w-11/12 px-2 mx-auto max-w-[1400px]">
      {children}
    </div>
  );
};
