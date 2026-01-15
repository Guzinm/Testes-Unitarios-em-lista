"use client";

import { Tarefa } from "@/types/Tarefa";
import { NovaTarefa } from "../NovaTarefa";
import Item from "../Item";
import { useState } from "react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import style from "./ListaDeTarefas.module.css";

export default function ListaDeTarefas({ data }: { data: Tarefa[] }) {
  const [tarefas, setTarefas] = useState(data);

  const adicionarTarefa = (tarefa: string) => {
    setTarefas((prev) => [...prev, { id: Date.now(), tarefa: tarefa }]);
  };
  const deletarTarefa = (id: number) => {
    setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <main className={style.main}>
      <h1 className={style.title}>Total de tarefas: {useContadorDeTarefas(tarefas)}</h1>

      <NovaTarefa onAdd={adicionarTarefa} />

      <ul className={style.lista}>
        {tarefas.map((t) => (
          <Item key={t.id} tarefa={t} onDelete={deletarTarefa} />
        ))}
      </ul>
    </main>
  );
}
