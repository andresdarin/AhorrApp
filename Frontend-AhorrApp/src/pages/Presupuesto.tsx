import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Settings,
  Plus,
  ShoppingCart,
  Car,
  Home,
  Gamepad2,
  Heart,
  MoreHorizontal
} from "lucide-react";

const budgetCategories = [
  { 
    id: 1, 
    category: "Alimentación", 
    budget: 300, 
    spent: 245.25, 
    percentage: 82, 
    icon: ShoppingCart, 
    color: "bg-green-500",
    status: "good" 
  },
  { 
    id: 2, 
    category: "Transporte", 
    budget: 200, 
    spent: 180.50, 
    percentage: 90, 
    icon: Car, 
    color: "bg-blue-500",
    status: "warning" 
  },
  { 
    id: 3, 
    category: "Hogar", 
    budget: 150, 
    spent: 165.00, 
    percentage: 110, 
    icon: Home, 
    color: "bg-purple-500",
    status: "exceeded" 
  },
  { 
    id: 4, 
    category: "Entretenimiento", 
    budget: 100, 
    spent: 45.30, 
    percentage: 45, 
    icon: Gamepad2, 
    color: "bg-pink-500",
    status: "good" 
  },
  { 
    id: 5, 
    category: "Salud", 
    budget: 80, 
    spent: 25.00, 
    percentage: 31, 
    icon: Heart, 
    color: "bg-red-500",
    status: "good" 
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "exceeded": return "text-destructive";
    case "warning": return "text-amber-500";
    default: return "text-green-500";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "exceeded": return AlertTriangle;
    case "warning": return AlertTriangle;
    default: return CheckCircle;
  }
};

export default function Presupuesto() {
  const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.budget, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const overallPercentage = Math.round((totalSpent / totalBudget) * 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Presupuesto - AhorrApp</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configurar
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nueva categoría
          </Button>
        </div>
      </div>

      {/* Resumen general */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Presupuesto Total</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBudget}</div>
            <p className="text-xs text-muted-foreground">Enero 2025</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gastado</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">${totalSpent.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">{overallPercentage}% del presupuesto</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Disponible</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">${(totalBudget - totalSpent).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">{100 - overallPercentage}% restante</p>
          </CardContent>
        </Card>
      </div>

      {/* Progreso general */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Progreso mensual
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Progreso general</span>
              <span className={overallPercentage > 90 ? "text-destructive" : "text-muted-foreground"}>
                {overallPercentage}%
              </span>
            </div>
            <Progress 
              value={overallPercentage} 
              className={`h-3 ${overallPercentage > 100 ? "[&>div]:bg-destructive" : ""}`} 
            />
          </div>
          {overallPercentage > 90 && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm text-destructive font-medium">
                {overallPercentage > 100 ? "Has superado tu presupuesto mensual" : "Te acercas al límite de tu presupuesto"}
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Presupuesto por categorías */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Presupuesto por categorías</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgetCategories.map((category) => {
              const StatusIcon = getStatusIcon(category.status);
              return (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${category.color} text-white`}>
                        <category.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">{category.category}</div>
                        <div className="text-sm text-muted-foreground">
                          ${category.spent} de ${category.budget}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={category.status === "exceeded" ? "destructive" : category.status === "warning" ? "secondary" : "default"}
                        className="flex items-center gap-1"
                      >
                        <StatusIcon className="h-3 w-3" />
                        {category.percentage}%
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Progress 
                    value={Math.min(category.percentage, 100)} 
                    className={`h-2 ${category.percentage > 100 ? "[&>div]:bg-destructive" : ""}`}
                  />
                  {category.percentage > 100 && (
                    <div className="text-sm text-destructive">
                      Excedido por ${(category.spent - category.budget).toFixed(2)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}