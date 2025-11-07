"use client";

import { Tarefa } from "@/types/Tarefa";
import styles from "./item.module.css";

type Props = {
  tarefa: Tarefa;
  onDelete: (id: number) => void;
};

export default function Item({ tarefa, onDelete }: Props) {
  return (
    <li className={styles.li}>
      <p className={styles.p}>{tarefa.tarefa}</p>
      <button onClick={() => onDelete(tarefa.id)} className={styles.button}>
        Excluir Tarefa
      </button>
    </li>
  );
}
