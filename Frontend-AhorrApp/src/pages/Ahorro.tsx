import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  PiggyBank, 
  Plus, 
  Target, 
  TrendingUp, 
  Calendar,
  Plane,
  Home,
  Car,
  GraduationCap,
  Heart,
  Gift,
  MoreHorizontal,
  DollarSign
} from "lucide-react";

const savingsGoals = [
  {
    id: 1,
    name: "Vacaciones Europa",
    target: 3000,
    current: 2150,
    percentage: 72,
    icon: Plane,
    color: "bg-blue-500",
    deadline: "Jun 2025",
    monthlyTarget: 425,
    category: "travel"
  },
  {
    id: 2,
    name: "Fondo emergencia",
    target: 5000,
    current: 1800,
    percentage: 36,
    icon: Home,
    color: "bg-green-500",
    deadline: "Dic 2025",
    monthlyTarget: 400,
    category: "emergency"
  },
  {
    id: 3,
    name: "Auto nuevo",
    target: 15000,
    current: 4500,
    percentage: 30,
    icon: Car,
    color: "bg-red-500",
    deadline: "Mar 2026",
    monthlyTarget: 750,
    category: "vehicle"
  },
  {
    id: 4,
    name: "Curso especialización",
    target: 800,
    current: 650,
    percentage: 81,
    icon: GraduationCap,
    color: "bg-purple-500",
    deadline: "Abr 2025",
    monthlyTarget: 150,
    category: "education"
  }
];

const recentContributions = [
  { amount: 300, goal: "Vacaciones Europa", date: "Hoy", type: "manual" },
  { amount: 200, goal: "Fondo emergencia", date: "25 Ene", type: "automatic" },
  { amount: 150, goal: "Curso especialización", date: "22 Ene", type: "manual" },
  { amount: 500, goal: "Auto nuevo", date: "20 Ene", type: "manual" },
];

const totalSavings = savingsGoals.reduce((sum, goal) => sum + goal.current, 0);
const totalTargets = savingsGoals.reduce((sum, goal) => sum + goal.target, 0);
const overallProgress = Math.round((totalSavings / totalTargets) * 100);

export default function Ahorro() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ahorro - AhorrApp</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Programar aporte
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nueva meta
          </Button>
        </div>
      </div>

      {/* Resumen general */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total ahorrado</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">${totalSavings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">de ${totalTargets.toLocaleString()} objetivo</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progreso general</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress}%</div>
            <Progress value={overallProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Metas activas</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{savingsGoals.length}</div>
            <p className="text-xs text-muted-foreground">
              {savingsGoals.filter(g => g.percentage >= 80).length} próximas a completar
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Metas de ahorro */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Metas de ahorro
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {savingsGoals.map((goal) => (
              <div key={goal.id} className="space-y-4 p-4 rounded-lg border bg-card/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${goal.color} text-white`}>
                      <goal.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{goal.name}</div>
                      <div className="text-sm text-muted-foreground">Meta: {goal.deadline}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progreso</span>
                    <span className="font-medium">
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={goal.percentage} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{goal.percentage}% completado</span>
                    <span>Faltan ${(goal.target - goal.current).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="text-sm">
                    <div className="font-medium">${goal.monthlyTarget}/mes</div>
                    <div className="text-muted-foreground">Aporte sugerido</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Aportar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Aportes recientes */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Aportes recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentContributions.map((contribution, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div>
                  <div className="font-medium">{contribution.goal}</div>
                  <div className="text-sm text-muted-foreground">
                    {contribution.date} • {contribution.type === "automatic" ? "Automático" : "Manual"}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-green-500">+${contribution.amount}</div>
                  <Badge variant={contribution.type === "automatic" ? "secondary" : "outline"}>
                    {contribution.type === "automatic" ? "Auto" : "Manual"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">Ver historial completo</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}