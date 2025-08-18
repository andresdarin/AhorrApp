import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "1", ingresos: 1200, gastos: 800 },
  { name: "5", ingresos: 900, gastos: 1100 },
  { name: "10", ingresos: 1500, gastos: 950 },
  { name: "15", ingresos: 1100, gastos: 1200 },
  { name: "20", ingresos: 1600, gastos: 1000 },
  { name: "25", ingresos: 1400, gastos: 900 },
  { name: "30", ingresos: 1700, gastos: 1300 },
];

export default function IncomeExpenseChart() {
  return (
    <section aria-labelledby="ie-chart">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle id="ie-chart" className="text-sm text-muted-foreground">Ingresos vs Egresos (mes)</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="colorGastos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))" }} />
              <Area type="monotone" dataKey="ingresos" stroke="hsl(var(--primary))" fill="url(#colorIngresos)" strokeWidth={2} />
              <Area type="monotone" dataKey="gastos" stroke="hsl(var(--accent))" fill="url(#colorGastos)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </section>
  );
}
