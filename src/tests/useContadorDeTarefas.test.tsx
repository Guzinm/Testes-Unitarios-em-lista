import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import { renderHook } from "@testing-library/react";

test("Testa se é retornado o numero de objetos esperado", () => {
  const lista = [{ a: 1 }, { b: 2 }, { c: 3 }];

  const { result } = renderHook(() => useContadorDeTarefas(lista));

  expect(result.current).toBe(lista.length);
});
