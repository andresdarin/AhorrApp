import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Comida", value: 420 },
  { name: "Transporte", value: 180 },
  { name: "Vivienda", value: 760 },
  { name: "Ocio", value: 220 },
  { name: "Otros", value: 140 },
];

const colors = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--secondary))",
  "hsl(var(--ring))",
  "hsl(var(--muted-foreground))",
];

export default function CategoryPie() {
  return (
    <section aria-labelledby="pie-categorias">
      <Card className="glass-card">
        <CardHeader>
          <CardTitle id="pie-categorias" className="text-sm text-muted-foreground">Categorías más gastadas</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} innerRadius={48} paddingAngle={2}>
                {data.map((_, idx) => (
                  <Cell key={idx} fill={colors[idx % colors.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(var(--popover))", border: "1px solid hsl(var(--border))" }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </section>
  );
}
