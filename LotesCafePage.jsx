import { useState, useEffect } from "react";


import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

export default function LotesCafePage() {
  const [form, setForm] = useState({
    codigo: "",
    produtor: "",
    fazenda: "",
    talhao: "",
    variedade: "",
    safra: "",
    quantidade: "",
    observacoes: ""
  });
const [lotes, setLotes] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
const carregarLotes = async () => {
  try {
    const snapshot = await getDocs(collection(db, "lotesCafe"));

    const dados = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setLotes(dados);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  carregarLotes();
}, []);

  const salvarLote = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "lotesCafe"), {
        ...form,
        quantidade: Number(form.quantidade),
        criadoEm: serverTimestamp()
      });
await carregarLotes();

      alert("Lote cadastrado com sucesso!");

      setForm({
        codigo: "",
        produtor: "",
        fazenda: "",
        talhao: "",
        variedade: "",
        safra: "",
        quantidade: "",
        observacoes: ""
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar lote.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Lote de Café</h2>

      <form onSubmit={salvarLote}>
        <input
          name="codigo"
          placeholder="Código do Lote"
          value={form.codigo}
          onChange={handleChange}
        />

        <input
          name="produtor"
          placeholder="Produtor"
          value={form.produtor}
          onChange={handleChange}
        />

        <input
          name="fazenda"
          placeholder="Fazenda"
          value={form.fazenda}
          onChange={handleChange}
        />

        <input
          name="talhao"
          placeholder="Talhão"
          value={form.talhao}
          onChange={handleChange}
        />

        <input
          name="variedade"
          placeholder="Variedade"
          value={form.variedade}
          onChange={handleChange}
        />

        <input
          name="safra"
          placeholder="Safra"
          value={form.safra}
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantidade"
          placeholder="Quantidade de Sacas"
          value={form.quantidade}
          onChange={handleChange}
        />

        <textarea
          name="observacoes"
          placeholder="Observações"
          value={form.observacoes}
          onChange={handleChange}
        />

        <br />
        <button type="submit">
          Salvar Lote
        </button>
      </form>
   <hr />

<h3>Lotes Cadastrados</h3>

<table
  border="1"
  cellPadding="8"
  style={{
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px"
  }}
>
  <thead>
    <tr>
      <th>Código</th>
      <th>Produtor</th>
      <th>Fazenda</th>
      <th>Talhão</th>
      <th>Variedade</th>
      <th>Safra</th>
      <th>Sacas</th>
    </tr>
  </thead>

  <tbody>
    {lotes.map((lote) => (
      <tr key={lote.id}>
        <td>{lote.codigo}</td>
        <td>{lote.produtor}</td>
        <td>{lote.fazenda}</td>
        <td>{lote.talhao}</td>
        <td>{lote.variedade}</td>
        <td>{lote.safra}</td>
        <td>{lote.quantidade}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
}
