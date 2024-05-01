import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">Um app de autenticação!</p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Entrar!
            </Button>
          </LoginButton>
        </div>
        <div>
          <h1 className="text-white text-xs mt-10 drop-shadow-md">
            Desenvolvido por{" "}
            <a
              href="http://www.linkedin.com/in/joaovitorwoliveira"
              target="_blank"
              rel="noopener noreferrer"
            >
              João Vitor Oliveira
            </a>
          </h1>
        </div>
      </div>
    </main>
  );
}
