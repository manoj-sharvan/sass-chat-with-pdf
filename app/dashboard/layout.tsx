import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col">
        {/*Header*/}
        <Header />
        <main className="overflow-y-auto flex-1">{children}</main>
      </div>
    </ClerkLoaded>
  );
};

export default DashboardLayout;
