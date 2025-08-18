import { Card, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function CreditCardsGrid() {
  const cards = [
    { name: "Visa •••• 2456", balance: 650.4, limit: 2000, closing: "12/08" },
    { name: "Mastercard •••• 9932", balance: 1200.2, limit: 3000, closing: "22/08" },
  ];

  return (
    <section aria-labelledby="tarjetas" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <h2 id="tarjetas" className="sr-only">Tarjetas de crédito</h2>
      {cards.map((c) => {
        const pct = Math.min(100, Math.round((c.balance / c.limit) * 100));
        return (
          <Card key={c.name} className="overflow-hidden border-0 bg-gradient-to-tr from-primary/15 to-accent/15 backdrop-blur glass-card hover-scale">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard />
                  <span className="font-medium">{c.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">Cierre {c.closing}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-muted-foreground">Saldo</div>
                  <div className="font-semibold">{c.balance.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Límite</div>
                  <div className="font-semibold">{c.limit.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: pct + "%" }} />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{pct}% del límite usado</div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
