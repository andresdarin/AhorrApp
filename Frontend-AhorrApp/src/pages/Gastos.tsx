import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Filter, 
  Search, 
  TrendingDown, 
  Receipt, 
  CreditCard, 
  Wallet,
  ShoppingCart,
  Coffee,
  Car,
  Home,
  MoreHorizontal
} from "lucide-react";

const recentExpenses = [
  { id: 1, amount: 85.50, category: "Alimentación", description: "Supermercado Central", date: "Hoy 14:30", icon: ShoppingCart, color: "bg-green-500" },
  { id: 2, amount: 4.20, category: "Café", description: "Starbucks Centro", date: "Hoy 10:15", icon: Coffee, color: "bg-amber-500" },
  { id: 3, amount: 45.00, category: "Transporte", description: "Uber al aeropuerto", date: "Ayer 18:45", icon: Car, color: "bg-blue-500" },
  { id: 4, amount: 120.00, category: "Hogar", description: "Compras casa", date: "Ayer 16:20", icon: Home, color: "bg-purple-500" },
  { id: 5, amount: 35.75, category: "Alimentación", description: "Restaurante La Plaza", date: "23 Ene 20:30", icon: ShoppingCart, color: "bg-green-500" },
];

const categoryStats = [
  { category: "Alimentación", amount: 245.25, percentage: 35, color: "bg-green-500" },
  { category: "Transporte", amount: 180.50, percentage: 26, color: "bg-blue-500" },
  { category: "Hogar", amount: 150.00, percentage: 21, color: "bg-purple-500" },
  { category: "Entretenimiento", amount: 95.30, percentage: 14, color: "bg-pink-500" },
  { category: "Otros", amount: 28.95, percentage: 4, color: "bg-gray-500" },
];

export default function Gastos() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Gastos - AhorrApp</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar gastos..." className="pl-10 w-64" />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Fecha
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resumen del mes */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-destructive" />
              Gastos del mes
            </CardTitle>
            <Badge variant="secondary">Enero 2025</Badge>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold">$700.00</span>
              <span className="text-sm text-muted-foreground">de $850.00 presupuestado</span>
            </div>
            <Progress value={82} className="mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-lg font-semibold">23</div>
                <div className="text-sm text-muted-foreground">Transacciones</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">$30.43</div>
                <div className="text-sm text-muted-foreground">Promedio diario</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold">5</div>
                <div className="text-sm text-muted-foreground">Categorías</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-destructive">$150</div>
                <div className="text-sm text-muted-foreground">Disponible</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gastos por categoría */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Por categoría</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {categoryStats.map((stat) => (
              <div key={stat.category} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${stat.color}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium truncate">{stat.category}</span>
                    <span>${stat.amount}</span>
                  </div>
                  <Progress value={stat.percentage} className="h-2 mt-1" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Lista de gastos recientes */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Gastos recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentExpenses.map((expense) => (
              <div key={expense.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className={`p-2 rounded-full ${expense.color} text-white`}>
                  <expense.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{expense.description}</div>
                      <div className="text-sm text-muted-foreground">{expense.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-destructive">-${expense.amount}</div>
                      <div className="text-sm text-muted-foreground">{expense.date}</div>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">Ver todos los gastos</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}