import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChartPie, 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  Calendar,
  Download,
  RefreshCw,
  DollarSign,
  Target,
  PiggyBank,
  CreditCard,
  AlertTriangle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const monthlyData = [
  { month: 'Ago', ingresos: 2800, gastos: 2200, ahorro: 600 },
  { month: 'Sep', ingresos: 3200, gastos: 2500, ahorro: 700 },
  { month: 'Oct', ingresos: 2900, gastos: 2400, ahorro: 500 },
  { month: 'Nov', ingresos: 3500, gastos: 2800, ahorro: 700 },
  { month: 'Dic', ingresos: 4200, gastos: 3100, ahorro: 1100 },
  { month: 'Ene', ingresos: 3250, gastos: 2650, ahorro: 600 },
];

const categorySpending = [
  { name: 'Alimentación', value: 35, amount: 925, color: '#10B981' },
  { name: 'Transporte', value: 26, amount: 686, color: '#3B82F6' },
  { name: 'Hogar', value: 21, amount: 554, color: '#8B5CF6' },
  { name: 'Entretenimiento', value: 14, amount: 369, color: '#F59E0B' },
  { name: 'Otros', value: 4, amount: 106, color: '#6B7280' },
];

const performanceData = [
  { subject: 'Ingresos', A: 85, fullMark: 100 },
  { subject: 'Gastos', A: 78, fullMark: 100 },
  { subject: 'Ahorro', A: 65, fullMark: 100 },
  { subject: 'Inversiones', A: 40, fullMark: 100 },
  { subject: 'Presupuesto', A: 88, fullMark: 100 },
  { subject: 'Metas', A: 72, fullMark: 100 },
];

const kpiData = [
  {
    title: "Ingreso promedio",
    value: "$3,384",
    change: "+12%",
    positive: true,
    icon: DollarSign,
    description: "vs mes anterior"
  },
  {
    title: "Gasto promedio",
    value: "$2,612",
    change: "-5%",
    positive: true,
    icon: TrendingDown,
    description: "reducción mensual"
  },
  {
    title: "Tasa de ahorro",
    value: "23%",
    change: "+3%",
    positive: true,
    icon: PiggyBank,
    description: "de ingresos"
  },
  {
    title: "Uso de crédito",
    value: "28%",
    change: "-8%",
    positive: true,
    icon: CreditCard,
    description: "del límite total"
  },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Analytics - AhorrApp</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Último año
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Actualizar
          </Button>
          <Button variant="hero" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPIs destacados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={index} className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center gap-1">
                <span className={`text-xs ${kpi.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {kpi.change}
                </span>
                <span className="text-xs text-muted-foreground">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Evolución mensual */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Evolución mensual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="ingresos" stroke="#10B981" strokeWidth={2} name="Ingresos" />
                <Line type="monotone" dataKey="gastos" stroke="#EF4444" strokeWidth={2} name="Gastos" />
                <Line type="monotone" dataKey="ahorro" stroke="#3B82F6" strokeWidth={2} name="Ahorro" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribución por categorías */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChartPie className="h-5 w-5" />
              Gastos por categoría
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categorySpending}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categorySpending.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name, props) => [`$${props.payload.amount}`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {categorySpending.map((category) => (
                <div key={category.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm">{category.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Comparación anual */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Comparación anual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="ingresos" fill="#10B981" name="Ingresos" />
                <Bar dataKey="gastos" fill="#EF4444" name="Gastos" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Radar de rendimiento */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Rendimiento financiero
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <PolarRadiusAxis domain={[0, 100]} tick={false} />
                <Radar
                  name="Rendimiento"
                  dataKey="A"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value) => [`${value}%`, 'Rendimiento']}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Resumen de insights */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Insights financieros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <Badge variant="secondary" className="bg-green-100 text-green-800">Positivo</Badge>
              </div>
              <div className="font-medium text-green-800 dark:text-green-200">
                Excelente control de gastos
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">
                Has reducido tus gastos un 5% este mes
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <PiggyBank className="h-4 w-4 text-blue-600" />
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">Meta</Badge>
              </div>
              <div className="font-medium text-blue-800 dark:text-blue-200">
                Cerca de tu meta de ahorro
              </div>
              <div className="text-sm text-blue-600 dark:text-blue-400">
                Solo faltan $200 para alcanzar tu objetivo mensual
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">Atención</Badge>
              </div>
              <div className="font-medium text-amber-800 dark:text-amber-200">
                Aumentó gasto en entretenimiento
              </div>
              <div className="text-sm text-amber-600 dark:text-amber-400">
                +15% vs el mes anterior en esta categoría
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}