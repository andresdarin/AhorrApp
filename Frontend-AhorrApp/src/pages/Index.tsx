import heroImage from "@/assets/hero-finance.png";
import SummaryCards from "@/components/dashboard/SummaryCards";
import IncomeExpenseChart from "@/components/dashboard/IncomeExpenseChart";
import CategoryPie from "@/components/dashboard/CategoryPie";
import CreditCardsGrid from "@/components/dashboard/CreditCardsGrid";

const Index = () => {
  return (
    <div className="space-y-6">
      <header className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-center">
        <div className="md:col-span-3">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Dashboard de control financiero
          </h1>
          <p className="mt-2 text-muted-foreground">
            Resumen de ingresos, gastos, ahorros y tarjetas. Todo a la vista.
          </p>
        </div>
        <aside className="md:col-span-2">
          <img
            src={heroImage}
            alt="Ilustración isométrica de finanzas Lovable"
            loading="lazy"
            className="w-full h-40 md:h-44 object-cover rounded-lg shadow"
          />
        </aside>
      </header>

      <SummaryCards />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2">
          <IncomeExpenseChart />
        </div>
        <div>
          <CategoryPie />
        </div>
      </section>

      <CreditCardsGrid />
    </div>
  );
};

export default Index;
