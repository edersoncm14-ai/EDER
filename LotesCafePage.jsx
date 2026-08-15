import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

export default function LotesCafePage() {
  const [form, setForm] = useState({
    codigo: "",
    produtor: "",
    fazenda: "",
    talhao: "",
    variedade: "",
    safra: "",
    quantidade: "",
    observacoes: "",
  });

  const [lotes, setLotes] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
      console.error("Erro ao carregar lotes:", error);
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
        criadoEm: serverTimestamp(),
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
        observacoes: "",
      });
    } catch (error) {
      console.error("ERRO FIREBASE:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Lote de Café</h2>

      <form
        onSubmit={salvarLote}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "600px",
        }}
      >
        <input
          name="codigo"
          placeholder="Código do Lote"
          value={form.codigo}
          onChange={handleChange}
          required
        />

        <input
          name="produtor"
          placeholder="Produtor"
          value={form.produtor}
          onChange={handleChange}
          required
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

        <button
          type="submit"
          style={{
            backgroundColor: "#1b5e20",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
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
          {lotes.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                Nenhum lote cadastrado.
              </td>
            </tr>
          ) : (
            lotes.map((lote) => (
              <tr key={lote.id}>
                <td>{lote.codigo}</td>
                <td>{lote.produtor}</td>
                <td>{lote.fazenda}</td>
                <td>{lote.talhao}</td>
                <td>{lote.variedade}</td>
                <td>{lote.safra}</td>
                <td>{lote.quantidade}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
