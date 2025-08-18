import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  FileText, 
  DollarSign,
  Calendar,
  Download,
  Plus,
  Star,
  Clock,
  CheckCircle
} from "lucide-react";

const monthlyStats = [
  { label: "Ingresos totales", value: "$3,250", change: "+12%", positive: true },
  { label: "Gastos operativos", value: "$485", change: "-8%", positive: true },
  { label: "Ganancia neta", value: "$2,765", change: "+18%", positive: true },
  { label: "Proyectos activos", value: "4", change: "+1", positive: true },
];

const topClients = [
  { name: "TechCorp Solutions", revenue: 1250, projects: 3, status: "active", rating: 5 },
  { name: "StartupXYZ", revenue: 850, projects: 2, status: "active", rating: 4 },
  { name: "DesignStudio Pro", revenue: 650, projects: 1, status: "completed", rating: 5 },
  { name: "Local Business", revenue: 500, projects: 2, status: "active", rating: 4 },
];

const recentProjects = [
  { name: "E-commerce Website", client: "TechCorp", amount: 800, status: "in-progress", progress: 75, deadline: "Feb 15" },
  { name: "Mobile App Design", client: "StartupXYZ", amount: 650, status: "in-progress", progress: 45, deadline: "Feb 28" },
  { name: "Brand Identity", client: "DesignStudio", amount: 450, status: "completed", progress: 100, deadline: "Completed" },
  { name: "Landing Page", client: "Local Business", amount: 300, status: "pending", progress: 0, deadline: "Mar 10" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "text-green-500";
    case "in-progress": return "text-blue-500";
    case "pending": return "text-amber-500";
    default: return "text-gray-500";
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed": return "default";
    case "in-progress": return "secondary";
    case "pending": return "outline";
    default: return "outline";
  }
};

export default function Freelance() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Freelance - AhorrApp</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar fiscal
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo proyecto
          </Button>
        </div>
      </div>

      {/* Estadísticas mensuales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {monthlyStats.map((stat, index) => (
          <Card key={index} className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change} vs mes anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rentabilidad mensual */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Rentabilidad mensual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Enero 2025</span>
                <Badge variant="secondary">85% margen</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Ingresos</span>
                  <span className="font-medium text-green-500">$3,250</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>Gastos</span>
                  <span className="font-medium text-red-500">$485</span>
                </div>
                <Progress value={15} className="h-2 [&>div]:bg-red-500" />
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between">
                  <span className="font-medium">Ganancia neta</span>
                  <span className="font-bold text-green-500">$2,765</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Clientes principales */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Clientes principales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topClients.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex-1">
                    <div className="font-medium">{client.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {client.projects} proyecto{client.projects > 1 ? 's' : ''} • ${client.revenue}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant={client.status === "active" ? "default" : "secondary"}>
                      {client.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Proyectos recientes */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Proyectos recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="space-y-3 p-4 rounded-lg border bg-card/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{project.name}</div>
                    <div className="text-sm text-muted-foreground">{project.client}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">${project.amount}</div>
                    <Badge variant={getStatusBadge(project.status)}>
                      {project.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                      {project.status === "completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {project.status === "pending" && <Calendar className="h-3 w-3 mr-1" />}
                      {project.status}
                    </Badge>
                  </div>
                </div>
                {project.status !== "pending" && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progreso</span>
                      <span className={getStatusColor(project.status)}>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                )}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    {project.status === "completed" ? "Completado" : `Fecha límite: ${project.deadline}`}
                  </span>
                  <Button variant="ghost" size="sm">Ver detalles</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}