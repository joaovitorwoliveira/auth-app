"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Permitido!");
      } else {
        toast.error("Proibido!");
      }
    });
  };

  return (
    <Card className="sm:w-full md:w-3/4 lg:w-1/2">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Administrador</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Você consegue ver este conteúdo!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Rota da API para Administradores
          </p>
          <Button onClick={onApiRouteClick}>Clique para testar</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Ação no Servidor para Administradores
          </p>
          <Button onClick={onServerActionClick}>Clique para testar</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
