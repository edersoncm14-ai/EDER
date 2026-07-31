export default function DashboardPage() {
const cards = [
{
titulo: "☕ Sacas em Estoque",
valor: "0",
cor: "#2E7D32",
},
{
titulo: "💰 Contas a Pagar",
valor: "R$ 0,00",
cor: "#C62828",
},
{
titulo: "💵 Contas a Receber",
valor: "R$ 0,00",
cor: "#1565C0",
},
{
titulo: "🚜 Máquinas",
valor: "0",
cor: "#EF6C00",
},
];
 
const menuItems = [
"☕ Lotes de Café",
"🧪 Análise de Solo",
"🚜 Máquinas",
"👨‍🌾 Funcionários",
"📦 Estoque",
"💰 Financeiro",
"🏭 Secadores",
"🏭 Tulhas",
"🏭 Terreiros",
"🏭 Armazéns",
"🏭 Beneficiamento",
];
 
return (
<div
 style={{
 fontFamily: "Arial",
 background: "#f5f5f5",
 minHeight: "100vh",
 padding: "20px",
 }}
 >
<h1 style={{ color: "#1b5e20" }}>
☕ CafeERP
</h1>
 
<p>Sistema de Gestão Cafeeira</p>
 
<div
 style={{
 display: "grid",
 gridTemplateColumns:
 "repeat(auto-fit, minmax(220px,1fr))",
 gap: "20px",
 marginTop: "20px",
 }}
 >
{cards.map((card) => (
<div
 key={card.titulo}
 style={{
 background: "#fff",
 borderRadius: "12px",
 padding: "20px",
 boxShadow:
 "0 2px 10px rgba(0,0,0,0.1)",
 borderTop: `5px solid ${card.cor}`,
 }}
 >
<h3>{card.titulo}</h3>
 
<h2
 style={{
 color: card.cor,
 marginTop: "10px",
 }}
 >
{card.valor}
</h2>
</div>
))}
</div>
 
<h2 style={{ marginTop: "30px" }}>
🌱 Propriedades
</h2>
 
<div
 style={{
 display: "grid",
 gridTemplateColumns:
 "repeat(auto-fit, minmax(220px,1fr))",
 gap: "15px",
 }}
 >
<div
 style={{
 background: "#fff",
 padding: "15px",
 borderRadius: "10px",
 }}
 >
Sítio Santa Clara
</div>
 
<div
 style={{
 background: "#fff",
 padding: "15px",
 borderRadius: "10px",
 }}
 >
Sítio Cantaduva
</div>
 
<div
 style={{
 background: "#fff",
 padding: "15px",
 borderRadius: "10px",
 }}
 >
Sítio Olho D'Água
</div>
 
<div
 style={{
 background: "#fff",
 padding: "15px",
 borderRadius: "10px",
 }}
 >
Sítio Giral
</div>
</div>
 
<h2 style={{ marginTop: "30px" }}>
🚀 Acesso Rápido
</h2>
 
<div
 style={{
 display: "grid",
 gridTemplateColumns:
 "repeat(auto-fit, minmax(200px,1fr))",
 gap: "15px",
 }}
 >
{menuItems.map((item) => (
<button
 key={item}
 style={{
 border: "none",
 background: "#1b5e20",
 color: "#fff",
 padding: "15px",
 borderRadius: "10px",
 cursor: "pointer",
 fontSize: "16px",
 }}
 >
{item}
</button>
))}
</div>
</div>
);
}
