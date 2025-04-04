import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto my-20 p-4">{children}</div>;
};

export default MainLayout;
