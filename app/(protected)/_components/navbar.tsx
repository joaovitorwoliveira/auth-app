"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl sm:w-full md:w-3/4 lg:w-1/2 shadow-sm">
      <div className="flex gap-x-2 md:flex-grow flex-wrap">
        <Button asChild variant={pathName === "/admin" ? "default" : "outline"}>
          <Link href="/admin">Administrador</Link>
        </Button>
        <Button
          asChild
          variant={pathName === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Cliente</Link>
        </Button>
        <Button
          asChild
          variant={pathName === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Servidor</Link>
        </Button>
        <Button
          asChild
          variant={pathName === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Configurações</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
