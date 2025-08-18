import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Receipt,
  Wallet,
  Briefcase,
  PiggyBank,
  CreditCard,
  ChartPie,
  BookOpenCheck,
} from "lucide-react";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Gastos", url: "/gastos", icon: Receipt },
  { title: "Presupuesto", url: "/presupuesto", icon: Wallet },
  { title: "Freelance", url: "/freelance", icon: Briefcase },
  { title: "Ahorro", url: "/ahorro", icon: PiggyBank },
  { title: "Tarjetas", url: "/tarjetas", icon: CreditCard },
  { title: "Analytics", url: "/analytics", icon: ChartPie },
  { title: "Guía", url: "/guia", icon: BookOpenCheck },
];

export function AppSidebar() {
  const location = useLocation();
  const active = useMemo(() => location.pathname, [location.pathname]);

  return (
    <Sidebar variant="floating" collapsible="icon" className="bg-sidebar/90 backdrop-blur">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>AhorrApp</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={active === item.url}>
                    <NavLink to={item.url} end>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
