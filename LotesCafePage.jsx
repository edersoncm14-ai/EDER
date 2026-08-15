import { useState, useEffect } from "react";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
    observacoes: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const salvarLote = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "lotesCafe"), {
        ...form,
        quantidade: Number(form.quantidade),
        criadoEm: serverTimestamp()
      });

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
    </div>
  );
}
