"use client";

import { useMemo } from "react";

export const useContadorDeTarefas = (tarefas: object[]) => {
  return useMemo(() => tarefas.length, [tarefas]);
};
