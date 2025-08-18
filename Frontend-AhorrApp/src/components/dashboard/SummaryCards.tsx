import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, PiggyBank } from "lucide-react";

export default function SummaryCards() {
  const total = 12850.75;
  const budget = 2000;
  const spent = 1420;
  const savings = 5600;
  const progress = Math.min(100, Math.round((spent / budget) * 100));

  return (
    <section aria-labelledby="resumen" className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
      <h2 id="resumen" className="sr-only">Resumen financiero</h2>

      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">Saldo total</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl md:text-4xl font-bold tracking-tight">${total.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
          <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
            <ArrowUpRight className="text-green-600" /> +3.4% este mes
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">Gasto vs Presupuesto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <div className="text-2xl font-semibold">{spent.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
            <div className="text-sm text-muted-foreground">de {budget.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
          </div>
          <Progress value={progress} className="mt-3" />
          <p className="mt-2 text-xs text-muted-foreground">{progress}% del presupuesto mensual usado</p>
        </CardContent>
      </Card>

      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle className="text-sm text-muted-foreground">Ahorros actuales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">{savings.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div>
          <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
            <ArrowDownRight className="text-blue-600" /> objetivo: 10.000€
          </div>
          <Button variant="hero" size="sm" className="mt-4" aria-label="Añadir al ahorro">
            <PiggyBank /> Añadir al ahorro
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
