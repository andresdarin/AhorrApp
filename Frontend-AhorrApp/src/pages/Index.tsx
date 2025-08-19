import heroImage from "@/assets/hero-finance.png";
import heroTitle from "@/assets/db-title-1.png";
import SummaryCards from "@/components/dashboard/SummaryCards";
import IncomeExpenseChart from "@/components/dashboard/IncomeExpenseChart";
import CategoryPie from "@/components/dashboard/CategoryPie";
import CreditCardsGrid from "@/components/dashboard/CreditCardsGrid";

const Index = () => {
  return (
    <div className="space-y-6">
      <header className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-center">
        <div className="md:col-span-3">
          <img
            src={heroTitle}
            alt="Título AhorrApp"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            loading="lazy"
          />

        </div>
        <aside className="md:col-span-2">
          <img
            src={heroImage}
            alt="Ilustración isométrica AhorrApp"
            loading="lazy"
            className="w-3/4 h-auto object-contain rounded-lg mx-auto"
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
