"use client";

import { SidebarProvider, useSidebarContext } from "@/context/SidebarContext";
import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Header } from "./header";
import { Menu } from "./menu";

const DashboardLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

const DashboardLayoutContent: FC<PropsWithChildren> = function ({ children }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <Header />
      <div className="mt-16 flex items-start">
        <Menu />
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
