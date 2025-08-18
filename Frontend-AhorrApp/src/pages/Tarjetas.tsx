import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Plus, 
  Calendar, 
  AlertTriangle,
  CheckCircle,
  DollarSign,
  TrendingDown,
  MoreHorizontal,
  Eye,
  Settings
} from "lucide-react";

const creditCards = [
  {
    id: 1,
    name: "Visa Platinum",
    bank: "Banco Nacional",
    number: "**** 4532",
    balance: 1250.50,
    limit: 5000,
    percentage: 25,
    minPayment: 125.05,
    totalPayment: 1250.50,
    dueDate: "15 Feb",
    status: "good",
    color: "bg-gradient-to-r from-slate-900 to-slate-700"
  },
  {
    id: 2,
    name: "Mastercard Gold",
    bank: "Banco Central",
    number: "**** 8901",
    balance: 850.25,
    limit: 2500,
    percentage: 34,
    minPayment: 85.03,
    totalPayment: 850.25,
    dueDate: "22 Feb",
    status: "warning",
    color: "bg-gradient-to-r from-amber-600 to-amber-800"
  },
  {
    id: 3,
    name: "American Express",
    bank: "Banco Premium",
    number: "**** 1234",
    balance: 3200.00,
    limit: 8000,
    percentage: 40,
    minPayment: 320.00,
    totalPayment: 3200.00,
    dueDate: "28 Feb",
    status: "warning",
    color: "bg-gradient-to-r from-blue-900 to-blue-700"
  },
  {
    id: 4,
    name: "Visa Classic",
    bank: "Banco Popular",
    number: "**** 5678",
    balance: 125.75,
    limit: 1500,
    percentage: 8,
    minPayment: 12.58,
    totalPayment: 125.75,
    dueDate: "5 Mar",
    status: "good",
    color: "bg-gradient-to-r from-green-700 to-green-900"
  }
];

const recentTransactions = [
  { id: 1, description: "Supermercado Central", amount: 85.50, date: "Hoy 14:30", card: "Visa Platinum", category: "Alimentación" },
  { id: 2, description: "Amazon Purchase", amount: 120.00, date: "Ayer 20:15", card: "Mastercard Gold", category: "Compras" },
  { id: 3, description: "Spotify Premium", amount: 9.99, date: "Ayer 10:00", card: "Visa Classic", category: "Suscripciones" },
  { id: 4, description: "Gasolinera Shell", amount: 45.00, date: "23 Ene", card: "American Express", category: "Transporte" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "good": return "text-green-500";
    case "warning": return "text-amber-500";
    case "danger": return "text-red-500";
    default: return "text-gray-500";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "good": return CheckCircle;
    case "warning": return AlertTriangle;
    case "danger": return AlertTriangle;
    default: return CheckCircle;
  }
};

const totalBalance = creditCards.reduce((sum, card) => sum + card.balance, 0);
const totalLimit = creditCards.reduce((sum, card) => sum + card.limit, 0);
const overallUsage = Math.round((totalBalance / totalLimit) * 100);

export default function Tarjetas() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Tarjetas de crédito - AhorrApp</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Configurar
          </Button>
          <Button variant="hero" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Agregar tarjeta
          </Button>
        </div>
      </div>

      {/* Resumen general */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo total usado</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">${totalBalance.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">de ${totalLimit.toFixed(2)} disponible</p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uso promedio</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallUsage}%</div>
            <Progress value={overallUsage} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tarjetas activas</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{creditCards.length}</div>
            <p className="text-xs text-muted-foreground">
              {creditCards.filter(c => c.status === "good").length} en buen estado
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tarjetas de crédito */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {creditCards.map((card) => {
          const StatusIcon = getStatusIcon(card.status);
          return (
            <Card key={card.id} className="glass-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <CardTitle className="text-base">{card.name}</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Tarjeta visual */}
                <div className={`relative p-4 rounded-lg ${card.color} text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm opacity-80">{card.bank}</div>
                      <div className="font-semibold">{card.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-80">Disponible</div>
                      <div className="font-semibold">${(card.limit - card.balance).toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="text-lg font-mono tracking-wider">{card.number}</div>
                </div>

                {/* Información de uso */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Uso actual</span>
                    <div className="flex items-center gap-2">
                      <StatusIcon className={`h-4 w-4 ${getStatusColor(card.status)}`} />
                      <Badge variant={card.status === "good" ? "default" : "secondary"}>
                        {card.percentage}%
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={card.percentage} 
                    className={`h-2 ${card.percentage > 70 ? "[&>div]:bg-amber-500" : ""} ${card.percentage > 90 ? "[&>div]:bg-red-500" : ""}`}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${card.balance.toFixed(2)} usado</span>
                    <span>${card.limit.toFixed(2)} límite</span>
                  </div>
                </div>

                {/* Información de pago */}
                <div className="space-y-2 pt-2 border-t">
                  <div className="flex justify-between">
                    <span className="text-sm">Pago mínimo</span>
                    <span className="font-medium">${card.minPayment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Pago total</span>
                    <span className="font-medium">${card.totalPayment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Fecha de cierre</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{card.dueDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver estado
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Pagar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Transacciones recientes */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Transacciones recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className="flex-1">
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-sm text-muted-foreground">
                    {transaction.card} • {transaction.category}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-destructive">-${transaction.amount}</div>
                  <div className="text-sm text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">Ver todas las transacciones</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}