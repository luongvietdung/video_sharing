import { useSidebarContext } from "@/context/SidebarContext";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  HiUserAdd,
  HiHome,
  HiLogout,
  HiLogin
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const DashboardSidebar: FC = function () {
  const { isCollapsed } = useSidebarContext();

  return (
    <Sidebar
      aria-label="Sidebar menu"
      collapsed={isCollapsed}
      id="sidebar"
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={HiHome}>
            Homepage
          </Sidebar.Item>
          <Sidebar.Item href="/signup" icon={HiUserAdd}>
            Sign Up
          </Sidebar.Item>
          <Sidebar.Item href="/signin" icon={HiLogin}>
            Sign In
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/signout" icon={HiLogout}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
