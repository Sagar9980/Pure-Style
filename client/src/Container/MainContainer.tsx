import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto max-w-[1200px]">
      {children}
    </div>
  );
};
