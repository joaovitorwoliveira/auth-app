"use client";

import { useCurrentRole } from "@/lib/use-current-role";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="Você não tem permissão para ver este conteúdo!" />
    );
  }

  return <>{children}</>;
};