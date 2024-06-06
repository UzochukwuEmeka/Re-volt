import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href={"/"} className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src={"/icons/logo.svg"}
            alt="logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="side-logo j">Volt</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}`);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn("sidebar-link")}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
