import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import hero from "@/assets/hero-finance.png";

export default function Guia() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Guía rápida</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Cómo añadir gastos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Usa el botón “+ Gasto” en la barra superior o desde la sección Gastos.</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Presupuestos y ahorro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Define límites por categoría en Presupuesto y agrega aportes en Ahorro.</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Filtros y personalización</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Filtra por categoría, medio de pago o tags para encontrar movimientos.</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Sincronizar o exportar</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Conecta cuentas o exporta reportes desde la sección Freelance.</p>
          </CardContent>
        </Card>
      </div>
      <img src={hero} alt="Guía financiera AhorrApp" loading="lazy" className="rounded-lg shadow" />
    </div>
  );
}
