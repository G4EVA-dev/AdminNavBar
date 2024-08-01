"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  DataIcon,
  ContentIcon,
  SettingsIcon,
} from "./Icons";

const AdminNavbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/home", icon: HomeIcon },
    { name: "User Account", path: "/users", icon: UserIcon },
    { name: "Data Policies", path: "/data", icon: DataIcon },
    {
      name: "Content Management",
      path: "/content",
      icon: ContentIcon,
    },
    { name: "Settings", path: "/settings", icon: SettingsIcon },
  ];

  return (
    <div className="w-auto h-screen bg-gray-200 text-svgColor fixed">
      <ul className="p-5 w-64">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`flex h-[50px] px-[6px] py-[10px] rounded-[4px] ${
              pathname === item.path ? "bg-navBarFocus" : ""
            }`}
          >
            <Link href={item.path} className="flex items-center gap-[8px]">
              <item.icon
                className={`w-5 h-5 mr-3 ${
                  pathname === item.path
                    ? "text-navbarTextFocus"
                    : "text-svgColor"
                }`}
              />

              <p
                className={`text-[16px]  font-normal leading-[22.4px] ${
                  pathname === item.path
                    ? "text-navbarTextFocus"
                    : "text-slate-500"
                }  `}
              >
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminNavbar;
