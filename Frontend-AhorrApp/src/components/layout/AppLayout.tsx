import React from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, ArrowDownCircle, PiggyBank, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[radial-gradient(1200px_600px_at_var(--mouse-x,50%)_var(--mouse-y,20%),hsl(var(--accent)/0.18),transparent_60%)] transition-[background]">
        <AppSidebar />
        <SidebarInset>
          <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="text-lg md:text-xl font-bold tracking-tight">AhorrApp</div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:block">
                <Input placeholder="Buscar…" className="w-64" />
              </div>
              <Button variant="glass" size="sm" aria-label="Añadir gasto">
                <PlusCircle />
                <span className="hidden md:inline">Gasto</span>
              </Button>
              <Button variant="glass" size="sm" aria-label="Añadir ingreso">
                <ArrowDownCircle />
                <span className="hidden md:inline">Ingreso</span>
              </Button>
              <Button variant="hero" size="sm" aria-label="Añadir al ahorro">
                <PiggyBank />
                <span className="hidden md:inline">Ahorro</span>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Notificaciones">
                <Bell />
              </Button>
              <Avatar>
                <AvatarFallback>LV</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main
            className="p-4 md:p-6"
            onMouseMove={(e) => {
              const root = (e.currentTarget as HTMLElement).closest("div");
              if (root) {
                root.style.setProperty("--mouse-x", `${e.clientX}px`);
                root.style.setProperty("--mouse-y", `${e.clientY}px`);
              }
            }}
          >
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
