"use client";

import { useAppSelector, useAppDispatch } from "@/app/redux";
import {
  LockIcon,
  LucideIcon,
  Home,
  X,
  Briefcase,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { setIsSidebarCollapsed } from "@/state";

type Props = {};

const Sidebar = (props: Props) => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const sidebarClassnames = `
    fixed flex flex-col h-[100%] justify-between shadow-xl 
    transition-all duration-300 h-full z-40 dark:bg-black 
    overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0" : "w-64"}
  `;

  return (
    <div className={sidebarClassnames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* Logo Section */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            LIST
          </div>
          {!isSidebarCollapsed && (
            <button
              className="py-3"
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
              }
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          )}
        </div>

        {/* Team Section */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <div className="flex flex-col">
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              LANS TEAM
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <LockIcon className="h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="z-10 w-full">
          <SidebarLink href="/" icon={Home} label="Home" href="/" />

          <SidebarLink href="/" icon={Briefcase} label="Timeline" href="/timeline" />

          <SidebarLink href="/" icon={Search} label="Search" href="/search" />

          <SidebarLink href="/" icon={Settings} label="Settings" href="/settings" />

          <SidebarLink href="/" icon={User} label="Users" href="/users" />

          <SidebarLink href="/" icon={Users} label="Teams" href="/teams" />
        </nav>
        <div className="mt-4 flex flex-col">
          <SidebarLink
            href="/dashboard"
            icon={LockIcon}
            label="Dashboard"
            //   isCollapsed={false}
          />
          {/* Add more SidebarLink components here */}
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""} mx-2 my-1 rounded-lg p-3`}
      >
        {isActive && (
          <div className="absolute top-0 left-0 h-[100%] w-[5px] bg-blue-500"></div>
        )}

        <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        {!isCollapsed && (
          <span className={`font-medium text-gray-800 dark:text-gray-100`}>
            {label}
          </span>
        )}
      </div>
    </Link>
  );
};

export default Sidebar;
