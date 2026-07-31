export default function DashboardPage() {
return (
<div style={{ padding: "20px" }}>
<h1>☕ CafeERP</h1>
 
<p>Painel de Controle da Fazenda</p>
 
<div
 style={{
 display: "grid",
 gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
 gap: "20px",
 marginTop: "20px"
 }}
 >
<div style={{
 background:"#fff",
 padding:"20px",
 borderRadius:"12px",
 borderTop:"5px solid #2E7D32"
 }}>
<h3>☕ Sacas em Estoque</h3>
<h2>0</h2>
</div>
 
<div style={{
 background:"#fff",
 padding:"20px",
 borderRadius:"12px",
 borderTop:"5px solid #C62828"
 }}>
<h3>💰 Contas a Pagar</h3>
<h2>R$ 0,00</h2>
</div>
 
<div style={{
 background:"#fff",
 padding:"20px",
 borderRadius:"12px",
 borderTop:"5px solid #1565C0"
 }}>
<h3>💵 Contas a Receber</h3>
<h2>R$ 0,00</h2>
</div>
 
<div style={{
 background:"#fff",
 padding:"20px",
 borderRadius:"12px",
 borderTop:"5px solid #EF6C00"
 }}>
<h3>🚜 Máquinas</h3>
<h2>0</h2>
</div>
</div>
 
<h2 style={{ marginTop: "30px" }}>🌱 Propriedades</h2>
 
<ul>
<li>Sítio Santa Clara</li>
<li>Sítio Cantaduva</li>
<li>Sítio Olho D'Água</li>
<li>Sítio Giral</li>
</ul>
</div>
);
}
