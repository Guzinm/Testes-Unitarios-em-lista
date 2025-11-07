"use client";

import { useState } from "react";

type Props = {
  onAdd: (tarefa: string) => void;
};

export function NovaTarefa({ onAdd }: Props) {
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novaTarefa.trim()) return;
    onAdd(novaTarefa);
    setNovaTarefa("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite sua Tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </>
  );
}
