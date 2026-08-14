import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
 
export default function LotesCafePage() {
const [lotes, setLotes] = useState([]);
 
useEffect(() => {
async function carregarLotes() {
try {
const querySnapshot = await getDocs(
collection(db, "lotes_cafe")
);
 
const lista = querySnapshot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
}));
 
setLotes(lista);
} catch (error) {
console.error("Erro ao carregar lotes:", error);
}
}
 
carregarLotes();
}, []);
 
return (
<div style={{ padding: "20px" }}>
<h1>☕ Lotes de Café</h1>
 
<table
 style={{
 width: "100%",
 background: "#fff",
 borderCollapse: "collapse",
 }}
 >
<thead>
<tr>
<th>Código</th>
<th>Propriedade</th>
<th>Bebida</th>
<th>Sacas</th>
<th>Safra</th>
</tr>
</thead>
 
<tbody>
{lotes.map((lote) => (
<tr key={lote.id}>
<td>{lote.codigo}</td>
<td>{lote.propriedade}</td>
<td>{lote.bebida}</td>
<td>{lote.sacas}</td>
<td>{lote.safra}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
