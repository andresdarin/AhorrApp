import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Gastos from "./pages/Gastos";
import Presupuesto from "./pages/Presupuesto";
import Freelance from "./pages/Freelance";
import Ahorro from "./pages/Ahorro";
import Tarjetas from "./pages/Tarjetas";
import Analytics from "./pages/Analytics";
import Guia from "./pages/Guia";
import AppLayout from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gastos" element={<Gastos />} />
            <Route path="/presupuesto" element={<Presupuesto />} />
            <Route path="/freelance" element={<Freelance />} />
            <Route path="/ahorro" element={<Ahorro />} />
            <Route path="/tarjetas" element={<Tarjetas />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/guia" element={<Guia />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
