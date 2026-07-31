export default function DashboardPage() {
const cards = [
{
titulo: "☕ Sacas em Estoque",
valor: "0",
cor: "#2E7D32"
},
{
titulo: "💰 Contas a Pagar",
valor: "R$ 0,00",
cor: "#C62828"
},
{
titulo: "💵 Contas a Receber",
valor: "R$ 0,00",
cor: "#1565C0"
},
{
titulo: "🚜 Máquinas",
valor: "0",
cor: "#EF6C00"
}
];
 
return (
<div style={{ padding: "20px" }}>
<h1>☕ CafeERP</h1>
<p>Painel de Controle da Fazenda</p>
 
<div
 style={{
 display: "grid",
 gridTemplateColumns:
 "repeat(auto-fit, minmax(220px,1fr))",
 gap: "20px",
 marginTop: "20px"
 }}
 >
{cards.map((card) => (
<div
 key={card.titulo}
 style={{
 background: "#fff",
 padding: "20px",
 borderRadius: "12px",
 boxShadow:
 "0 2px 10px rgba(0,0,0,0.1)",
 borderTop: `5px solid ${card.cor}`
 }}
 >
<h3>{card.titulo}</h3>
 
<h2
 style={{
 color: card.cor,
 marginTop: "10px"
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
 "repeat(auto-fit, minmax(200px,1fr))",
 gap: "15px"
 }}
 >
<div className="card">
Sítio Santa Clara
</div>
 
<div className="card">
Sítio Cantaduva
</div>
 
<div className="card">
Sítio Olho D'Água
</div>
 
<div className="card">
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
 gap: "15px"
 }}
 >
<button>☕ Lotes de Café</button>
<button>🧪 Análise de Solo</button>
<button>🚜 Máquinas</button>
<button>👨‍🌾 Funcionários</button>
<button>📦 Estoque</button>
<button>💰 Financeiro</button>
</div>
</div>
);
}
``
