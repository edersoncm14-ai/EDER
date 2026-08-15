import { useState, useEffect } from "react";
2
import {
3
collection,
4
addDoc,
5
getDocs,
6
serverTimestamp,
7
} from "firebase/firestore";
8
 
9
import { db } from "./firebase";
10
 
11
export default function LotesCafePage() {
12
const [form, setForm] = useState({
13
codigo: "",
14
produtor: "",
15
fazenda: "",
16
talhao: "",
17
variedade: "",
18
safra: "",
19
quantidade: "",
20
observacoes: "",
21
});
22
 
23
const [lotes, setLotes] = useState([]);
24
 
25
const handleChange = (e) => {
26
setForm({
27
...form,
28
[e.target.name]: e.target.value,
29
});
30
};
31
 
32
const carregarLotes = async () => {
33
try {
34
const snapshot = await getDocs(collection(db, "lotesCafe"));
35
 
36
const dados = snapshot.docs.map((doc) => ({
37
id: doc.id,
38
...doc.data(),
39
}));
40
 
41
setLotes(dados);
42
} catch (error) {
43
console.error(error);
44
}
45
};
46
 
47
useEffect(() => {
48
carregarLotes();
49
}, []);
50
 
51
const salvarLote = async (e) => {
52
e.preventDefault();
53
 
54
try {
55
await addDoc(collection(db, "lotesCafe"), {
56
...form,
57
quantidade: Number(form.quantidade),
58
criadoEm: serverTimestamp(),
59
});
60
 
61
await carregarLotes();
62
 
63
alert("Lote cadastrado com sucesso!");
64
 
65
setForm({
66
codigo: "",
67
produtor: "",
68
fazenda: "",
69
talhao: "",
70
variedade: "",
71
safra: "",
72
quantidade: "",
73
observacoes: "",
74
});
75
} catch (error) {
76
console.error(error);
77
alert(error.message);
78
}
79
};
80
 
81
return (
82
<div style={{ padding: "20px" }}>
83
<h2>Cadastro de Lote de Café</h2>
84
 
85
<form
86
onSubmit={salvarLote}
87
style={{
88
display: "flex",
89
flexDirection: "column",
90
gap: "10px",
91
maxWidth: "500px",
92
}}
93
>
94
<input
95
name="codigo"
96
placeholder="Código do Lote"
97
value={form.codigo}
98
onChange={handleChange}
99
required
100
/>
101
 
102
<input
103
name="produtor"
104
placeholder="Produtor"
105
value={form.produtor}
106
onChange={handleChange}
107
required
108
/>
109
 
110
<input
111
name="fazenda"
112
placeholder="Fazenda"
113
value={form.fazenda}
114
onChange={handleChange}
115
/>
116
 
117
<input
118
name="talhao"
119
placeholder="Talhão"
120
value={form.talhao}
121
onChange={handleChange}
122
/>
123
 
124
<input
125
name="variedade"
126
placeholder="Variedade"
127
value={form.variedade}
128
onChange={handleChange}
129
/>
130
 
131
<input
132
name="safra"
133
placeholder="Safra"
134
value={form.safra}
135
onChange={handleChange}
136
/>
137
 
138
<input
139
type="number"
140
name="quantidade"
141
placeholder="Quantidade de Sacas"
142
value={form.quantidade}
143
onChange={handleChange}
144
/>
145
 
146
<textarea
147
name="observacoes"
148
placeholder="Observações"
149
value={form.observacoes}
150
onChange={handleChange}
151
/>
152
 
153
<button
154
type="submit"
155
style={{
156
background: "#1b5e20",
157
color: "#fff",
158
border: "none",
159
padding: "10px",
160
borderRadius: "5px",
161
cursor: "pointer",
162
}}
163
>
164
Salvar Lote
165
</button>
166
</form>
167
 
168
<hr />
169
 
170
<h3>Lotes Cadastrados</h3>
171
 
172
<table
173
border="1"
174
cellPadding="8"
175
style={{
176
width: "100%",
177
borderCollapse: "collapse",
178
marginTop: "10px",
179
}}
180
>
181
<thead>
182
<tr>
183
<th>Código</th>
184
<th>Produtor</th>
185
<th>Fazenda</th>
186
<th>Talhão</th>
187
<th>Variedade</th>
188
<th>Safra</th>
189
<th>Sacas</th>
190
</tr>
191
</thead>
192
 
193
<tbody>
194
{lotes.length === 0 ? (
195
<tr>
196
<td colSpan="7" style={{ textAlign: "center" }}>
197
Nenhum lote cadastrado.
198
</td>
199
</tr>
200
) : (
201
lotes.map((lote) => (
202
<tr key={lote.id}>
203
<td>{lote.codigo}</td>
204
<td>{lote.produtor}</td>
205
<td>{lote.fazenda}</td>
206
<td>{lote.talhao}</td>
207
<td>{lote.variedade}</td>
208
<td>{lote.safra}</td>
209
<td>{lote.quantidade}</td>
210
</tr>
211
))
212
)}
213
</tbody>
214
</table>
215
</div>
216
);
217
}
